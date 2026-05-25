FROM node:20-alpine

WORKDIR /app
RUN apk add --no-cache openssl
RUN npm config set registry https://registry.npmjs.org/
RUN npm config set fetch-retries 5
RUN npm config set fetch-retry-factor 2
RUN npm config set fetch-retry-mintimeout 20000
RUN npm config set fetch-retry-maxtimeout 120000

COPY package*.json ./
COPY prisma ./prisma/
RUN npm ci

COPY . .
ENV DATABASE_URL="mysql://user:password@localhost:3306/dummy"
RUN npx prisma generate
RUN npm run build


EXPOSE 3000

CMD ["npm", "start"]