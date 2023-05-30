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

3. Ask for the development key to get the rails credentials and set the key in `api/config/credentials/development.key`
```bash
echo "<THE KEY>" > api/config/credentials/development.key
```

4. Set up the DB
```bash
docker compose run api rails db:setup
```

5. Run services
```bash
docker compose up
```

Go to http://localhost:3000 to see the UI
