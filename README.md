# Feedbackr

## Local Setup Instructions

1. Clone the repo
```bash
git clone git@github.com:mapra99/feedbackr.git
```

2. Install ruby. rbenv is recommended
```bash
rbenv install 3.1.2
```

3. Install foreman
```bash
gem install foreman
```

### API Setup

1. cd into `api`
```bash
cd api
```

2. Install ruby dependencies
```bash
bundle install
```

3. Set up the DB
```bash
rails db:create
rails db:migrate
```

### Web Setup

1. cd into `web`
```bash
cd web
```

2. Install node. NVM is recommended
```bash
nvm install 18
nvm use 18
```

3. Install node dependencies
```bash
npm install --save-dev
```

### Local dev server

Run foreman at the root of the project to start all processes
```bash
foreman start
```

Go to http://localhost:3000 to see the UI

