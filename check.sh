#!/bin/bash

set -e

echo "Running black"
poetry run black *.py

echo "Running isort --check"
poetry run isort --check *.py

echo "Running flake8"
poetry run flake8 *.py

echo ""
echo "Code is looking good!"

