from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
# Class User model
class User(AbstractUser):
    is_admin = models.BooleanField(default=False)
    address = models.CharField(max_length=255, null=True)
    phone = models.CharField(max_length=255, null=True)

    class Meta:
        ordering = ['username']

    def __str__(self):
        return f'Username: {self.username}'

    
    


    
