from rest_framework import serializers
from .models import *

class BabydataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Babydata
        fields = ("__all__")

class CalendarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calendar
        fields = ("__all__")

class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ("__all__")

class DiarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Diary
        fields = ("__all__")

class DashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dashboard
        fields = ("__all__")

class MypgSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mypg
        fields = ("__all__")

class MainpgSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mainpg
        fields = ("__all__")

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ("__all__")

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("__all__")