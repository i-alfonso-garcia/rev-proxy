FROM node:14

WORKDIR /app2

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 80
CMD ["node", "index.js"]

