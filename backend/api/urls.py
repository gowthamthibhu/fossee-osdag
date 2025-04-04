from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BeamToColumnEndPlateViewSet

router = DefaultRouter()
router.register(r'beam-to-column', BeamToColumnEndPlateViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
