from django.shortcuts import render
#TODO import models when there are some

# Create your views here.

def index(request):
	aValue = 10
	context = {
		'a_value' : aValue,
	}
	
	return render(request, 'index.html', context=context)