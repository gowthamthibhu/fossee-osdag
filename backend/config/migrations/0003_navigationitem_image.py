# Generated by Django 5.1.7 on 2025-04-03 14:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('config', '0002_navigationitem_parent_id_alter_navigationitem_icon'),
    ]

    operations = [
        migrations.AddField(
            model_name='navigationitem',
            name='image',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
