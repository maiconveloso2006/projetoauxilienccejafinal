# Dockerfile para Backend (Node.js no Alpine)
FROM node:24-alpine


WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4102

CMD ["npm", "run", "dev"]