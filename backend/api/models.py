from django.db import models
from django.contrib.auth.models import AbstractUser
import string
import random

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

# Category model
class Category(models.Model):
    category_name = models.CharField(null=False, max_length=255)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return f'Category Name: {self.category_name}'

# Product model
class Product(models.Model):
    product_name = models.CharField(null=False, blank=False, max_length=255)
    product_price = models.FloatField(null=False, blank=False)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    description = models.CharField(null=True, max_length=255)

    class Meta:
        ordering = ['id', 'product_name']

    def __str__(self):
        return f'Product Name: {self.product_name}'

# Order model
class Order(models.Model):
    order_id = models.CharField(null=False, max_length=10)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    price = models.FloatField(null=False, blank=False)
    is_done = models.BooleanField(null=False, default=False)
    delivered_date = models.DateTimeField(null=False)

    class Meta:
        ordering = ['id', 'delivered_date']

    def __str__(self):
        return f'Order ID: {self.order_id}. Delivered date: {self.delivered_date}'

    def order_id_generator(self):
        length = 10
        res = ''.join(random.choices(string.ascii_letters, k=length))
        return str(res).upper()

    def save(self, *args, **kwargs):
        if not self.order_id:
            while True:
                order_id = self.order_id_generator()
                if not Order.objects.filter(order_id=order_id).exists():
                    self.order_id = order_id
                    break
        super(Order, self).save(*args, **kwargs)

# Order Product model
class OrderProduct(models.Model):
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    order_id = models.ForeignKey(Order, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return f'Order ID: {self.order_id}. Product ID: {self.product_id}'

    
    


    
