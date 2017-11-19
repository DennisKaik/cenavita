##
FROM ubuntu:16.04

# NodeJS
RUN apt-get update -y
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get update -y
RUN apt-get install -y nodejs

# Express App in den Container kopieren und Packages installen
WORKDIR /node-server
COPY . .
RUN npm install


EXPOSE 3000

ENTRYPOINT [ "/bin/bash", "start.sh" ]
