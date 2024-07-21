

FROM node:18.17.0 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object

COPY . .
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
