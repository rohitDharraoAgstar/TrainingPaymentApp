from rest_framework import routers
from django.urls import path, include
from . import views
#From current directory import all views

router = routers.DefaultRouter()
router.register(r'', views.PaymentViewSet)
urlpatterns = [
    path('drf/',include(router.urls)),
    path('dj/create/',views.create, name='payment.create'),
    path('dj/get/<str:id>/',views.get,name='payment.get'),
    path('dj/getall/',views.getall,name='payment.getall'),
    path('dj/update/<str:id>/',views.update,name='payment.update'),
    path('dj/delete/<str:id>/',views.delete,name='payment.delete')

]