# Feedbackr

## Local setup instructions

Requirements:
- Docker

1. Clone the repo
```bash
git clone git@github.com:mapra99/feedbackr.git
```

2. Build the docker images
```bash
docker compose build
```

3. Set up the DB
```bash
docker compose run api rails db:setup
```

4. Run services
```bash
docker compose up
```

Go to http://localhost:3000 to see the UI

