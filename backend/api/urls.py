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

    # User API path
    path('user/register/', views.CreateUserView.as_view(), name='User Registration'),

    # Product API path
    path('products/', views.ListProductView.as_view(), name='View All Products'),
    path('products/<int:pk>', views.RetrieveProductView.as_view(), name='View Product by Id'),

    # Order API path
    path('orders/', views.ListOrderView.as_view(), name='View All Orders'),
    path('orders/create/', views.CreateOrderView.as_view(), name='Create Orders'),
    path('orders/delete/<int:pk>', views.DeleteOrderView.as_view(), name='Delete Orders'),
    path('orders/update/<int:pk>', views.UpdateOrderView.as_view(), name='Update Order'),
]

urlpatterns = format_suffix_patterns(urlpatterns)