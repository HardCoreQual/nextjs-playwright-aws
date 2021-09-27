FROM ubuntu
RUN apt update -y
RUN apt-get install -y tzdata
RUN apt install -y curl git
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash
RUN apt install -y nodejs
RUN npm i -g yarn