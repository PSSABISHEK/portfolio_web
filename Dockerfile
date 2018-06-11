FROM node:7
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install mongodb --save
COPY . /app
CMD node app.js
EXPOSE 80