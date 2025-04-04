from django.contrib import admin
from .models import NavigationItem

@admin.register(NavigationItem)
class NavigationItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'text', 'category', 'parent_id', 'image')
