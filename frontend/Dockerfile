FROM node:16 as builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY cn-locale-example-package ./cn-locale-example-package

RUN npm i

COPY . ./

ARG PUBLIC_URL

ENV PUBLIC_URL $PUBLIC_URL

RUN npm run build


FROM nginx:1.15-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html
