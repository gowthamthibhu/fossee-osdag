# Generated by Django 5.1.7 on 2025-04-03 14:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NavigationItem',
            fields=[
                ('id', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('icon', models.CharField(max_length=100)),
                ('text', models.CharField(max_length=100)),
                ('category', models.CharField(max_length=50)),
            ],
        ),
    ]
