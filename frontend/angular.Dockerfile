FROM node:18

WORKDIR /app

COPY package*.json ./

EXPOSE 4200

CMD ["npm", "start"]
