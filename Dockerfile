FROM node
WORKDIR /app
RUN apt-get update
COPY . /app/
RUN node --version
RUN npm install -g npm@10.4.0
RUN npm --version
EXPOSE 3000

CMD ["npm","start" ]