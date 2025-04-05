from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import NavigationItem
from .serializers import NavigationItemSerializer

class NavigationItemsView(APIView):
    def get(self, request, *args, **kwargs):
        items = NavigationItem.objects.all()
        serializer = NavigationItemSerializer(items, many=True, context={'request': request})
        return Response(serializer.data)

class ConnectionSelectionView(APIView):
    def post(self, request, *args, **kwargs):
        # Extract connection details from the request
        connection_type = request.data.get('connection_type')
        secondary_tab = request.data.get('secondary_tab')
        checkbox_option = request.data.get('checkbox_option')

        if not connection_type or not secondary_tab or not checkbox_option:
            return Response(
                {"error": "All fields (connection_type, secondary_tab, checkbox_option) are required."},
                status=status.HTTP_400_BAD_REQUEST
            )

        response_data = {
            "message": "Connection selected successfully.",
            "connection_type": connection_type,
            "secondary_tab": secondary_tab,
            "checkbox_option": checkbox_option,
        }

        return Response(response_data, status=status.HTTP_200_OK)

# ✅ NEW VIEW: when "Connection" button is clicked on sidebar
class ConnectionPageSelectedView(APIView):
    def post(self, request, *args, **kwargs):
        page = request.data.get("page")

        if page == "connection":
            print("📡 Backend: 'Connection' page selected by frontend.")
            return Response({"message": "Connection page acknowledged by backend."}, status=status.HTTP_200_OK)

        return Response({"error": "Invalid page."}, status=status.HTTP_400_BAD_REQUEST)
