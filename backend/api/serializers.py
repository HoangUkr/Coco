from django.contrib.auth.models import User
from rest_framework import serializers
from .models import User, Category, Product, Order, OrderProduct

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'is_admin', 'address', 'phone']
        extra_kwargs = { 
            'password': {
                'write_only': True
            } 
        }
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

# Category serializer
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'category_name']

# Product serializer
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'product_name', 'product_price', 'category', 'description', 'product_image']
    
    def create(self, validated_data):
        return Product.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.product_name = validated_data.get('product_name', instance.product_name)
        instance.product_price = validated_data.get('product_price', instance.product_price)
        instance.category = validated_data.get('category', instance.category)
        instance.description = validated_data.get('description', instance.description)
        instance.product_image = validated_data.get('product_image', instance.product_image)
        instance.save()
        return instance

# Order serializer
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'order_id', 'user', 'price', 'is_done', 'is_check_out', 'delivered_date']
    
    def create(self, validated_data):
        return Order.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.order_id = validated_data.get('order_id', instance.order_id)
        instance.user = validated_data.get('user', instance.user)
        instance.price = validated_data.get('price', instance.price)
        instance.is_done = validated_data.get('is_done', instance.is_done)
        instance.is_check_out = validated_data.get('is_check_out', instance.is_check_out)
        instance.delivered_date = validated_data.get('delivered_date', instance.delivered_date)
        instance.save()
        return instance


# Order Product serializer
class OrderProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderProduct
        fields = ['id', 'product', 'order', 'quantity']
