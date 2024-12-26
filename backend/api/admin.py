from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Category, Product

# Register your models here.
class CustomUserAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('is_admin', 'address', 'phone')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('is_admin', 'address', 'phone')}),
    )
admin.site.register(User, CustomUserAdmin)
admin.site.register(Category)
admin.site.register(Product)