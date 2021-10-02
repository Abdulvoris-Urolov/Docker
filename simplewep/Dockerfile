# Specify a base image
FROM node:alpine

#Install some dependencies

WORKDIR /usr/app
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Set up a default command
CMD [ "npm","start" ]