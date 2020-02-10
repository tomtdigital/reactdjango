from django.shortcuts import render

def index(request):
    print('it werewesfdwe')
    return render(request, 'frontend/index.html')