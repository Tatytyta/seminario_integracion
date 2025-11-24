from rest_framework import viewsets
from core.models import Solicitud
from core.serializers import SolicitudSerializer


class SolicitudViewSet(viewsets.ModelViewSet):
    queryset = Solicitud.objects.all()
    serializer_class = SolicitudSerializer
