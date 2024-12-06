FROM mcr.microsoft.com/devcontainers/typescript-node:20-bullseye
ENV NODE_ENV=development
WORKDIR /home/node/dynamic-programming
COPY ./package.json ./package.json
COPY ./jest.config.js ./jest.config.js
RUN npm install
ENTRYPOINT  [ "bash" ]