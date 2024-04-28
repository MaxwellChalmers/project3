FROM python:latest
WORKDIR /app
COPY . /app
RUN pip install poetry
RUN poetry install --no-dev



ENTRYPOINT poetry run uvicorn main:app --reload --host "0.0.0.0" 
