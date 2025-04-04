from django.db import models

class BeamToColumnEndPlate(models.Model):
    beam_size = models.CharField(max_length=100)
    column_size = models.CharField(max_length=100)
    plate_thickness = models.FloatField()
    bolt_diameter = models.FloatField()
    bolt_grade = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Beam: {self.beam_size}, Column: {self.column_size}"
