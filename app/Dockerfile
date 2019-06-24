FROM node:10.16.0-stretch-slim
RUN apt-get update && apt-get -y install \
  iputils-ping \
  net-tools \
  vim \
  netcat \
  bzip2 \
  && apt-get clean && \
  rm -r /var/lib/apt/lists/*

ENV PATH $PATH:/node_modules/.bin:/app/
RUN npm install -g npm@6.9.0

COPY package.json package-lock.json /
RUN npm install

COPY . /app
WORKDIR /app