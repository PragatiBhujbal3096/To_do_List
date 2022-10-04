from django.urls import path
from .import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about', views.about, name='about'),
    path('delete/<item_id>', views.delete, name='delete'),
    path('completed/<item_id>', views.completed, name='completed'),
    path('uncomplete/<item_id>', views.uncomplete, name='uncomplete'),
    path('edit/<item_id>', views.edit, name='edit'),

]
