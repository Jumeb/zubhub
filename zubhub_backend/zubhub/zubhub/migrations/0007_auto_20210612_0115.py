# Generated by Django 2.2.7 on 2021-06-12 01:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zubhub', '0006_auto_20210611_2354'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hero',
            name='image_project_id',
            field=models.CharField(max_length=36, null=True),
        ),
    ]