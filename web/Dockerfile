# gets the docker image of ruby 3.0.4 and lets us build on top of that
FROM node:18-alpine

# install rails dependencies
RUN apk add --update --no-cache bash

# create a folder /app in the docker container and go into that folder
RUN mkdir /app
WORKDIR /app

# Copy the package.json and package-lock.json from app root directory into the /app/ folder in the docker container
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

# Install node dependencies
RUN npm install --save-dev

# Copy the whole app
COPY . /app

EXPOSE 3000
CMD ["npm", "dev"]
