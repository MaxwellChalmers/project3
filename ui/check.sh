#!/bin/bash

set -e

echo "Running black"
poetry run black *.js

echo "Running isort --check"
poetry run isort --check *.js

echo "Running flake8"
poetry run flake8 *.js

echo ""
echo "Code is looking good!"


