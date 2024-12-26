# Generated by Django 5.1.3 on 2024-12-26 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_rename_user_id_order_user_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='is_check_out',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='order',
            name='order_id',
            field=models.CharField(max_length=10, null=True, unique=True),
        ),
    ]
