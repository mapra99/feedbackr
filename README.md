# Feedbackr

## Local setup instructions

Requirements:
- Docker

1. Clone the repo
```bash
git clone git@github.com:mapra99/feedbackr.git
```

2. Start the docker deamon if you haven't

3. Ask for the development key to get the rails credentials and run the setup script
```bash
bin/dev/setup <THE KEY>
```

4. Start the app
```bash
bin/dev/start
```

Go to http://localhost:3000 to see the UI
