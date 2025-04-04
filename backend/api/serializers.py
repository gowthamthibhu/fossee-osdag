from rest_framework import serializers
from .models import BeamToColumnEndPlate

class BeamToColumnEndPlateSerializer(serializers.ModelSerializer):
    class Meta:
        model = BeamToColumnEndPlate
        fields = '__all__'
