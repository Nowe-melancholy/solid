FROM node:latest

WORKDIR /usr/src
COPY ./package.json /usr/src/
COPY ./yarn.lock /usr/src/
RUN yarn install
