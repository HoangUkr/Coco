from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import User

# Form for user creation
class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('username', 'password', 'is_admin', 'address', 'phone')

class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = User
        fields = ('username', 'password', 'is_admin', 'address', 'phone')
