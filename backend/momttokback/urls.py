from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import *

#defaultrouter: 뷰셋 대한 기본적인 url패턴 자동 생성 -> GET/POST/PUT/DELETE 관련 패턴 자동 생성
router = DefaultRouter() #DefaultRouter 설정
#router.register(): 등록된 뷰셋에 대한 url패턴 자동 생성. 이를 프로젝트의 url패턴으로 포함시킴
router.register(r'Babydata', BabydataViewSet) #Babydataviewset과 Babydata라는 router 등록
#(r'babydata', babydataviewset): 뷰셋의 이름과 기본적으로 제공하는 URL 패턴을 기반으로 URL 매핑을 자동으로 처리
router.register(r'Calendar', CalendarViewSet)
router.register(r'Comments', CommentsViewSet)
router.register(r'Diary', DiaryViewSet)
router.register(r'Dashboard', DashboardViewSet)
router.register(r'Mypg', MypgViewSet)
router.register(r'Mainpg', MainpgViewSet)
router.register(r'Photo', PhotoViewSet)
router.register(r'User', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('analyze-and-response/', AnalyzeAndResponseAPIView.as_view(), name='analyze_and_respond'),
    path('kakao-login/', KakaoLogin.as_view(), name='kakao-login'),
    path('update-profile/', UpdateUserProfile.as_view(), name='update-profile'),
]