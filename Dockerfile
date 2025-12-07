FROM node:25-alpine

WORKDIR /app

COPY server/server.ts .
COPY server/package.json .
COPY server/tsconfig.json .
COPY front/dist ./dist

RUN npm install
RUN npm run build

ENV DIST_PATH=/app/dist

EXPOSE 3000

CMD ["npm", "start"]
