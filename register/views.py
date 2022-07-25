from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from django.contrib import messages
# Create your views here.


def index(request):
    # print(request.user)
    if request.user.is_anonymous:
        return redirect("/login")
    messages.success(request, ("Please Login!"))
    return render(request, 'index.html')


def register(response):
    if response.method == "POST":
        form = UserCreationForm(response.POST)
        if form.is_valid():
            form.save()
            messages.success(response, ("Registration Successful!"))
            return redirect("/login")
    else:
        form = UserCreationForm()
    return render(response, "register/register.html", {"form": form})


def loginUser(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        #print(username, password)

        # check if user has entered correct credentials
        user = authenticate(username=username, password=password)

        if user is not None:
            # A backend authenticated the credentials
            login(request, user)
            messages.success(request, ("You logged out successfully"))
            return redirect("/")

        else:
            messages.success(
                request, ("There Was An Error Logging In, Try Again..."))
            # No backend authenticated the credentials
            return render(request, 'registration/login.html')

    return render(request, 'registration/login.html')


def logoutUser(request):
    logout(request)
    messages.success(request, ("You logged out succcesfully"))
    return redirect("/login")
