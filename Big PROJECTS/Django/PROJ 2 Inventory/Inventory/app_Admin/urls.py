from django.contrib import admin
from django.urls import path
from app_Admin import views

urlpatterns = [
    path('home', views.home, name="homea"),
    path('add', views.add_Product, name="add" ),
    path('addc', views.add_Category, name="addc" ),
    path('change', views.change, name="change" ),
]