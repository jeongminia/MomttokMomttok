# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Babydata(models.Model):
    babydata_id = models.AutoField(primary_key=True)
    week = models.TextField(blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    image = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'babydata'


class Calendar(models.Model):
    calendar_id = models.AutoField(primary_key=True)
    date = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'calendar'


class Comments(models.Model):
    comments_id = models.AutoField(primary_key=True)
    diary = models.ForeignKey('Diary', models.DO_NOTHING)
    comment_type = models.CharField(max_length=50, blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'comments'


class Dashboard(models.Model):
    dashboard_id = models.AutoField(primary_key=True)
    diary = models.ForeignKey('Diary', models.DO_NOTHING)
    date = models.DateField(blank=True, null=True)
    daily_data = models.TextField(blank=True, null=True)
    weekly_data = models.TextField(blank=True, null=True)
    monthly_data = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dashboard'


class Diary(models.Model):
    diary_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('User', models.DO_NOTHING)
    title = models.CharField(max_length=255, blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    is_secret = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'diary'


class Mainpg(models.Model):
    mainpg_id = models.AutoField(primary_key=True)
    baby_guide = models.TextField(blank=True, null=True)
    parents_guide = models.TextField(blank=True, null=True)
    user = models.ForeignKey('User', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'mainpg'


class Mypg(models.Model):
    mypg_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('User', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'mypg'


class Photo(models.Model):
    photo_id = models.AutoField(primary_key=True)
    calendar = models.ForeignKey(Calendar, models.DO_NOTHING)
    photo_url = models.CharField(max_length=255, blank=True, null=True)
    user_id = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'photo'


class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    social_id = models.CharField(max_length=255, blank=True, null=True)
    provider = models.CharField(max_length=255, blank=True, null=True)
    token = models.CharField(max_length=255, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    role = models.CharField(max_length=50, blank=True, null=True)
    baby_name = models.CharField(max_length=255, blank=True, null=True)
    birth_or_not = models.IntegerField(blank=True, null=True)
    baby_birth = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user'
