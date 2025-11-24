from rest_framework import viewsets
from core.models import Estudiante
from core.serializers import EstudianteSerializer


class EstudianteViewSet(viewsets.ModelViewSet):
    queryset = Estudiante.objects.all()
    serializer_class = EstudianteSerializer
