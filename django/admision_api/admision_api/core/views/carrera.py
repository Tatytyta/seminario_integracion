from rest_framework import viewsets
from core.models import Carrera
from core.serializers import CarreraSerializer


class CarreraViewSet(viewsets.ModelViewSet):
    queryset = Carrera.objects.all()
    serializer_class = CarreraSerializer
