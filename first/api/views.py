from django.http import JsonResponse

def home(request):
    return JsonResponse({'info':'Django React Couse', 'name': 'Rohit Dharrao'})
