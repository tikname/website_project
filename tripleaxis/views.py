# Create your views here.

from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.http import Http404
import os,sys


def home(request):
    return render(request,'home.html')

def contact(request):
    return render(request,'contact.html')