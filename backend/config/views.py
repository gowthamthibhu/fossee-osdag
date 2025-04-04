from rest_framework.views import APIView
from rest_framework.response import Response
from .models import NavigationItem
from .serializers import NavigationItemSerializer

class NavigationItemsView(APIView):
    def get(self, request, *args, **kwargs):
        items = NavigationItem.objects.all()
        serializer = NavigationItemSerializer(items, many=True, context={'request': request})
        return Response(serializer.data)