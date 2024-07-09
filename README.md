# graduation_project
숙명여자대학교 IT 공학전공 졸업프로젝트 레포입니다.
- 일기분석을 통한 감정분석 및 LLM 공감형 반응 제공
- data : [감성대화말뭉치](https://www.aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&aihubDataSe=realm&dataSetSn=86), 모두의 말뭉치-일기
-------------------------
## 💜 팀원

|  **AI Modeling** | **Back-end**   | **Front-end**   | 
| :-----------: | :------------: | :------------: |
| 안정민        |    유재원        |      이가윤     |
| ![image](https://github.com/jeongmin1016/graduation_project/assets/109460178/05ac0e9e-0ff7-417c-9488-5a2569d4ee43) |   ![image](https://github.com/jeongmin1016/graduation_project/assets/109460178/5cbfe072-eaea-4bdc-99f4-210644ef32fa)      | ![image](https://github.com/jeongmin1016/graduation_project/assets/109460178/a8947a6f-1ce4-49df-920a-ba5bd2c474d5)      |



## 💜 주제
### 배경
<img width="685" alt="스크린샷 2024-05-10 오후 4 27 51" src="https://github.com/jeongmin1016/graduation_project/assets/109460178/6c9ee5dc-5e4c-47c5-933c-ed3b674ce9e7">

### 목적
<img width="664" alt="스크린샷 2024-05-10 오후 4 27 31" src="https://github.com/jeongmin1016/graduation_project/assets/109460178/66157bec-fbfb-4071-b71b-4423d1824bb1">

1. 접근성은 높고 부담감은 낮은 마음 돌봄 어플리케이션을 제공해 부모의 정서적 안정에 기여.      

2. 엄마의 일기를 아빠와 공유함으로써 서로의 상태를 인지하게 해 함께 하는 임신 및 육아의 장을 마련할 계획        
     
3. 아이 발달 과정에 관한 간략한 정보 전달을 통해 무지함으로부터 비롯될 스트레스를 경감시키고 내 아이의 성장과정을 기록할 수 있게 함


## 💜 기술 스택
<img width="382" alt="image" src="https://github.com/jeongmin1016/MomttokMomttok/assets/112365313/cbdc8651-ce38-485a-8816-354e717062a6">


## 💜 소프트웨어 설계
<img width="964" alt="Untitled" src="https://github.com/jeongmin1016/MomttokMomttok/assets/112365313/218104cd-b64c-49f1-a9fc-5568d770fc06">


## 💜 프론트엔드
<img width="431" alt="image" src="https://github.com/jeongmin1016/MomttokMomttok/assets/112365313/ed0787c5-5827-448a-875f-9b41b12a65ba">

<img width="428" alt="image" src="https://github.com/jeongmin1016/MomttokMomttok/assets/112365313/fe055e4d-7899-47cc-8d16-2037b30dee21">

<img width="431" alt="image" src="https://github.com/jeongmin1016/MomttokMomttok/assets/112365313/6acc7f24-218f-4ab9-a7ea-d0f892cd9e9a">


## 💜 백엔드
### 1. 데이터베이스 설계 및 구축
작성한 ERD를 바탕으로 MySQL에 테이블을 생성하고 Django와 연동하여 DB 생성
![momttokERD](https://github.com/jeongmin1016/MomttokMomttok/assets/112365313/bc12bc39-d8c8-4b5d-98f3-17a1a8fbc9fc)

### 2. API 설계
Django Rest Framework를 사용하여 Restful API 구축
<img width="917" alt="drf" src="https://github.com/jeongmin1016/MomttokMomttok/assets/112365313/70e545f0-b1f5-44e5-9370-952e4fe488c7">

### 3. 카카오톡 소셜 로그인
카카오톡 API를 사용한 소셜 로그인
<img width="374" alt="카카오 소셜 로그인" src="https://github.com/jeongmin1016/MomttokMomttok/assets/112365313/840dd058-e040-4041-96e8-c580a1e5c462">


## 💜 모델링
### 1. 감정분석
LSTM, KoBERT, KoELECTRA 중 가장 정확도 높은 모델인 KoELECTRA 모델을 선정함
<img width="428" alt="image" src="https://github.com/jeongmin1016/MomttokMomttok/assets/112365313/926f527d-3962-46cf-913d-69d14d81361e">


### 2. AI 모델링
KoGPT2와 GPT3.5 turbo 중에서 더 뛰어난 공감형 반응을 보인 GPT3.5 turbo 모델을 선정함
<img width="429" alt="image" src="https://github.com/jeongmin1016/MomttokMomttok/assets/112365313/6e009dd4-68c6-437b-bd85-27e2bbd4bec3">

### 3. 최종 모델 병합
<img width="429" alt="image" src="https://github.com/jeongmin1016/MomttokMomttok/assets/112365313/3e75bd5f-51d9-4e82-ba9a-6af282fe479f">

