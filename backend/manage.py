#!/usr/bin/env python
import os
import sys
import getpass

def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc

    # Django 설정 로드 후 API 키 설정
    import django
    django.setup()

    from momttokback.views import set_api_key

    # API 키 입력 받기
    api_key = getpass.getpass("Please enter your OpenAI API key: ")
    set_api_key(api_key)

    execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main()
