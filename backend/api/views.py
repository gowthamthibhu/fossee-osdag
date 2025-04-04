from rest_framework import viewsets
from .models import BeamToColumnEndPlate
from .serializers import BeamToColumnEndPlateSerializer

class BeamToColumnEndPlateViewSet(viewsets.ModelViewSet):
    queryset = BeamToColumnEndPlate.objects.all()
    serializer_class = BeamToColumnEndPlateSerializer
