FROM node
WORKDIR /app
RUN apt-get update
COPY password-generator.zip .
RUN unzip password-generator.zip
RUN npm install -g npm@10.4.0
ENV KEY=value
EXPOSE 3000
CMD ["npm","start" ]
