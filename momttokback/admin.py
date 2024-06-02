from django.contrib import admin
from momttokback.models import *

# Register your models here.
@admin.register(Babydata)
class BabydataAdmin(admin.ModelAdmin):
    pass

@admin.register(Calendar)
class CalendarAdmin(admin.ModelAdmin):
    pass

@admin.register(Comments)
class CommentsAdmin(admin.ModelAdmin):
    pass

@admin.register(Dashboard)
class DashboardAdmin(admin.ModelAdmin):
    pass

@admin.register(Diary)
class DiaryAdmin(admin.ModelAdmin):
    pass

@admin.register(Mypg)
class MypgAdmin(admin.ModelAdmin):
    pass

@admin.register(Mainpg)
class MainpgAdmin(admin.ModelAdmin):
    pass

@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    pass

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass