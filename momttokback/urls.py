from django.urls import include, path
from rest_framework import routers
from . import views #views.py import

router = routers.DefaultRouter() #DefaultRouter 설정
router.register('Babydata', views.BabydataViewSet) #Babydataviewset과 Babydata라는 router 등록
router.register('Calendar', views.CalendarViewSet)
router.register('Comments', views.CommentsViewSet)
router.register('Diary', views.DiaryViewSet)
router.register('Dashboard', views.DashboardViewSet)
router.register('Mypg', views.MypgViewSet)
router.register('Mainpg', views.MainpgViewSet)
router.register('Photo', views.PhotoViewSet)
router.register('User', views.UserViewSet)

urlpatterns = [
    path('', include(router.urls))
]