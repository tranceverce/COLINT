from django.urls import path
from app_User import views

urlpatterns = [
    path('home', views.home, name="home"),
    path('search', views.search, name="search"),
    path('<str:cat_id>',views.cate, name="cate"),

]