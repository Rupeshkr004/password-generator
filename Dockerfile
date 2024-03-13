FROM node
WORKDIR /app
RUN apt-get update
COPY password-generator.zip .
RUN unzip password-generator.zip 
RUN rm -R node_modules/
RUN npm install
ENV KEY=value
EXPOSE 3000
CMD ["npm","start" ]
