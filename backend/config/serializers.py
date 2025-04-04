from rest_framework import serializers
from .models import NavigationItem

class NavigationItemSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = NavigationItem
        fields = ['id', 'icon', 'text', 'category', 'parent_id', 'image']

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None 