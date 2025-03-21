FROM node:18

ENV NODE_ENV=production

WORKDIR /app

COPY . .
RUN npm ci

CMD [ "node", "index.js" ]
