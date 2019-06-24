FROM node:10.16.0-stretch-slim

ENV PATH $PATH:/node_modules/.bin:/api/
RUN npm install -g npm@6.9.0

COPY package.json package-lock.json /
RUN npm install

COPY . /api
WORKDIR /api
