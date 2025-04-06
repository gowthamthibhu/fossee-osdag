from django.db import models

class NavigationItem(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    icon = models.CharField(max_length=100, blank=True, null=True)
    text = models.CharField(max_length=100)
    category = models.CharField(max_length=50) 
    parent_id = models.CharField(max_length=50, blank=True, null=True)  
    image = models.ImageField(upload_to='images/', null=True, blank=True) 
    def __str__(self): 
        return self.text