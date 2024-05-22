from django.http import HttpResponse,HttpRequest
from django.shortcuts import render 
def fun(request):
    return render(request, 'chatbot.html') 