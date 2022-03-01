FROM node:alpine3.14

WORKDIR /opt/web-app/app
COPY *.json ./
RUN npm i
EXPOSE 8080
COPY app.js ./
CMD ["node", "app.js"]
