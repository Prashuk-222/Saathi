from django.http import HttpResponse,HttpRequest
from django.shortcuts import render 
def fun(request):
    if request.method == 'POST':
        form_data = request.POST.get('input_name')
        context = {
            'form_data' :form_data
        }
        return render(request, 'chatbot.html', context) 
    else:
        return render(request, 'chatbot.html') 