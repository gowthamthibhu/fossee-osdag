from django.db import models

class NavigationItem(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    icon = models.CharField(max_length=100, blank=True, null=True)
    text = models.CharField(max_length=100)
    category = models.CharField(max_length=50)  # e.g., 'sidebarMenuItems', 'topNavTabs', etc.
    parent_id = models.CharField(max_length=50, blank=True, null=True)  # For nested structures like connectionCards
    image = models.ImageField(upload_to='images/', null=True, blank=True)  # Add this field
        
    def __str__(self): 
        return self.text