from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, action
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny
from django.shortcuts import get_object_or_404
from .serializer import *
from .models import *
import torch
import torch.nn.functional as F
import re
import numpy as np
from transformers import ElectraTokenizer, ElectraForSequenceClassification
import openai
import threading

# 전역 변수를 위한 락과 변수 초기화
api_key_lock = threading.Lock()
api_key = None

def set_api_key(key):
    global api_key
    with api_key_lock:
        api_key = key

def get_api_key():
    with api_key_lock:
        return api_key

# Model and tokenizer loading
model_name = "monologg/koelectra-base-v3-discriminator"
tokenizer = ElectraTokenizer.from_pretrained(model_name)
model = ElectraForSequenceClassification.from_pretrained(model_name, num_labels=6)
model_path = 'momttokback/models/model_KoElectra_0527.pt'
device = torch.device('cpu')

try:
    model.load_state_dict(torch.load(model_path, map_location=device))
except Exception as e:
    print(f"Error loading model: {e}")

model.to(device)
model.eval()

# 모델을 다시 저장
torch.save(model.state_dict(), model_path)

def predict(predict_sentence):
    # 텍스트 클렌징
    predict_sentence = re.sub(r'[^가-힣A-Za-z0-9 ]', '', predict_sentence)
    predict_sentence = re.sub(r'\s+', ' ', predict_sentence).strip()

    # 입력 문장 토큰화
    inputs = tokenizer(
        predict_sentence,
        return_tensors="pt",
        max_length=64,
        padding="max_length",
        truncation=True
    )

    inputs = {k: v.to(device) for k, v in inputs.items()}

    # 모델 예측
    with torch.no_grad():
        outputs = model(**inputs)
        logits = outputs.logits

    # 소프트맥스 함수로 확률 계산
    probs = F.softmax(logits, dim=1)

    # 결과 해석
    probs = probs.detach().cpu().numpy()[0]
    pred_label = np.argmax(probs)

    emotion_labels = ["기쁨", "당황", "분노", "불안", "상처", "슬픔"]
    pred_emotion = emotion_labels[pred_label]

    # 각 감정에 대한 확률을 퍼센트로 변환하여 출력
    emotion_probs = {label: prob * 100 for label, prob in zip(emotion_labels, probs)}
    return pred_emotion, emotion_probs

def generate_comment(sentence, api_key):
    openai.api_key = api_key
    prompt = f"일기: {sentence}\n\n이 일기를 읽고 공감형 댓글을 작성해 주세요:"
    response = openai.ChatCompletion.create(
        model='ft:gpt-3.5-turbo-0125:personal::9biYxCFB',  # 파인튜닝된 모델 ID 사용
        messages=[
            {"role": "system", "content": "당신은 초보 엄마의 마음을 친절히 공감할 줄 아는 AI입니다."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=200,
        temperature=0.5
    )
    return response.choices[0].message['content']

class AnalyzeAndResponseAPIView(APIView):
    def post(self, request):
        diary_id = request.data.get('diary_id') #요청에서 일기의 id 가져오기
        #content = request.data.get('content', '')
        if not diary_id:
            return Response({'error': 'No content provided'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            diary = Diary.objects.get(id=diary_id)
        except Diary.DoesNotExist:
            return Response({'error': 'Diary not found'}, status=status.HTTP_404_NOT_FOUND)

        content = diary.content

        try:
            #API키를 전역변수에서 가져옴
            api_key = get_api_key()
            if not api_key:
                return Response({'error': 'No API key provided'}, status=status.HTTP_400_BAD_REQUEST)
            emotion, probs = predict(content)
            comment = generate_comment(content, api_key)
            return Response({
                'emotion': emotion,
                'probabilities': probs,
                'comment': comment
            }, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class BabydataViewSet(viewsets.ModelViewSet):
    queryset = Babydata.objects.all()
    serializer_class = BabydataSerializer

class CalendarViewSet(viewsets.ModelViewSet):
    queryset = Calendar.objects.all()
    serializer_class = CalendarSerializer

class CommentsViewSet(viewsets.ModelViewSet):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer

class DiaryViewSet(viewsets.ModelViewSet):
    queryset = Diary.objects.all()
    serializer_class = DiarySerializer
    permission_classes = [IsAuthenticated]
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class DashboardViewSet(viewsets.ModelViewSet):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardSerializer

class MypgViewSet(viewsets.ModelViewSet):
    queryset = Mypg.objects.all()
    serializer_class = MypgSerializer

class MainpgViewSet(viewsets.ModelViewSet):
    queryset = Mainpg.objects.all()
    serializer_class = MainpgSerializer

class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class KakaoLogin(APIView):
    permission_classes = [AllowAny] #누구나 이 뷰에 접근 가능

    #사용자가 카톡 로그인 후 이 엔드포인트로 요청 보냄->이 메소드 호출
    def post(self, request):
        #request.data.get('key): 클라이언트가 보낸 데이터 추출
        social_id = request.data.get('social_id') #사용자의 카카오톡 소셜 아이디
        provider = request.data.get('provider') #소셜 로그인 제공자(여기서는 'kakao')
        token = request.data.get('token') #사용자의 인증 토큰

        if not (social_id and provider and token):
            return Response({'error': 'Incomplete data'}, status=status.HTTP_400_BAD_REQUEST)

        #social_id, provider 기준으로 사용자 레코드를 가져오거나, 없으면 새로 만듦
        user, created = User.objects.get_or_create(
            social_id=social_id,
            provider=provider,
            #만약 해당 'social_id'와 'providers'를 가진 사용자가 이미 존재하면,
            #'created'는 false가 되고, 존재하지 않으면 True
            defaults={
                'token': token,
            }
        )

        if not created:
            user.token = token
            user.save()

        serializer = UserSerializer(user)
        return Response(serializer.data)

class UpdateUserProfile(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request):
        user = request.user
        data = request.data

        user.name = data.get('name', user.name)
        user.role = data.get('role', user.role)
        user.baby_name = data.get('baby_name', user.baby_name)
        user.birth_or_not = data.get('birth_or_not', user.birth_or_not)
        user.baby_birth = data.get('baby_birth', user.baby_birth)
        user.save()

        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)
