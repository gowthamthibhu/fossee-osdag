from django.urls import path
from .views import NavigationItemsView, ConnectionSelectionView, ConnectionPageSelectedView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('navigation-items/', NavigationItemsView.as_view(), name='navigation-items'),
    path('select-connection/', ConnectionSelectionView.as_view(), name='select-connection'),
    path('connection-selected/', ConnectionPageSelectedView.as_view(), name='connection-selected'),  # 🔥 New endpoint
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
