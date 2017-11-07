##
FROM ubuntu:16.04

# MongoDB
RUN apt-get update
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
RUN echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.4.list
RUN apt-get update
RUN apt-get -y install mongodb-org
WORKDIR /data/db

# NodeJS
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs

# Express App in den Container kopieren und Packages installen
WORKDIR /node-server
COPY . .
RUN npm install


EXPOSE 3000

ENTRYPOINT [ "/bin/bash", "start.sh" ]
