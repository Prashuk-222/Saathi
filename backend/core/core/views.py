from django.http import HttpResponse,HttpRequest
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate,login
from django.contrib import messages
from django.contrib.auth.models import User
from django.db import IntegrityError

def fun(request):
    if request.method == 'POST':
        form_data = request.POST.get('input_name')
        context = {
            'form_data' :form_data
        }
        return render(request, 'chatbot.html', context) 
    else:
        return render(request, 'chatbot.html') 
    
def login_page(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('fun')  # Redirect to a success page.
        else:
            messages.error(request, 'Invalid username or password.')
    return render(request,'login.html')

def signup_page(request):
    if request.method == 'POST':
        username = request.POST['username']
        password1 = request.POST['password1']
        password2 = request.POST['password2']

        if password1 != password2:
            messages.error(request, "Passwords do not match")
        else:
            try:
                user = User.objects.create_user(username=username, password=password1)
                user.save()
                user = authenticate(username=username, password=password1)
                if user is not None:
                    login(request, user)
                    return redirect('login')
            except IntegrityError:
                messages.error(request, "Username already taken")

    return render(request, 'signup.html')
