from django.urls import path  
from login_logout import views

urlpatterns = [
    path('signup', views.register, name="signup"),
    path('login', views.login, name="login"),

]
