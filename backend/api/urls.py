from django.urls import include, path
# Import from rest_framework
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# Import views of the app
from api import views

urlpatterns = [
    path(r'', views.index, name='Index Page'),
    
    # Token path
    path('token/', TokenObtainPairView.as_view(), name='Get Token'),
    path('token/refresh/', TokenRefreshView.as_view(), name='Refresh Token'),
    path('api-auth/', include('rest_framework.urls')),

    # Check user role
    path('check_user_role/', views.check_user_role, name='Check User Role'),

    # User API path
    path('user/register/', views.CreateUserView.as_view(), name='User Registration'),

    # Product API path
    path('products/', views.ListProductView.as_view(), name='View All Products'),
    path('products/<int:pk>', views.RetrieveProductView.as_view(), name='View Product by Id'),
    path('product/create/', views.ProductCreateView.as_view(), name='Create Product view'),

    # Category API path
    path('categories/', views.ListCategoryView.as_view(), name='List Category view'),
    path('category/create/', views.CategoryCreateView.as_view(), name='Create Category view'),

    # Order API path
    path('orders/', views.ListOrderView.as_view(), name='View All Orders'),
    path('orders/create/', views.CreateOrderView.as_view(), name='Create Orders'),
    path('orders/delete/<int:pk>', views.DeleteOrderView.as_view(), name='Delete Orders'),
    path('orders/update/<int:pk>', views.UpdateOrderView.as_view(), name='Update Order'),
]

urlpatterns = format_suffix_patterns(urlpatterns)