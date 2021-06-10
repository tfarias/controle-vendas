FROM node:14.16.0-alpine

RUN apk add --no-cache bash
WORKDIR /home/node/app
ENV PATH /home/node/app/node_modules/.bin:$PATH
COPY ./package.json /home/node/app/package.json
RUN npm install

EXPOSE 5000

CMD ["npm", "run", "dev"]



