from urllib import request
from rest_framework import viewsets
from django.http import JsonResponse
from .serializers import PaymentSerializer
from .models import Payment
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
#REST Framework
class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all().order_by('name')
    serializer_class = PaymentSerializer

#Django 
@csrf_exempt
def create(request):
    if request.method=="POST":
        data=json.loads(request.body.decode("utf-8"))
        print(data)
        name=data['name']
        amount=data['amount']

        payment=Payment(name=name,amount=amount)
        payment.save()

        return JsonResponse({'success':True, 'id':payment.id, 'msg':'Payment Created Successfully'})
    else:
        return JsonResponse({'success':False, 'msg':'Only POST Request Allowed'})

@csrf_exempt
def get(request,id):
    payment=Payment.objects.filter(pk=id).values()
    return JsonResponse({'success':True, 'payment':list(payment)})

@csrf_exempt
def getall(request):
    payments=Payment.objects.values()
    return JsonResponse({'success':True, 'payment':list(payments)})

@csrf_exempt 
def update(request, id):
    if request.method=="POST":
        data=json.loads(request.body.decode("utf-8"))
        print(data)
        name=data['name']
        amount=data['amount']
        result=Payment.objects.filter(pk=id).update(name=name,amount=amount)
        if result==0:
            return JsonResponse({'success':True, 'msg':"NO Row matching given id"})
        return JsonResponse({'success':True, 'result':result})

    else:
        return JsonResponse({'success':False, 'msg':'Only POST Request Allowed'})

@csrf_exempt
def delete(request,id):
    result=Payment.objects.filter(pk=id).delete()
    return JsonResponse({'success':True, 'result':result})