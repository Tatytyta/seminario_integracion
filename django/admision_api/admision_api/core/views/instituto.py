from rest_framework import viewsets
from core.models import Instituto
from core.serializers import InstitutoSerializer


class InstitutoViewSet(viewsets.ModelViewSet):
    queryset = Instituto.objects.all()
    serializer_class = InstitutoSerializer
