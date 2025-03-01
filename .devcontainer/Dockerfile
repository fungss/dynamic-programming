FROM mcr.microsoft.com/devcontainers/typescript-node:20-bullseye
ENV NODE_ENV=development
WORKDIR /home/node/dynamic-programming
COPY /package.json ./package.json
COPY /package-lock.json ./package-lock.json
COPY /jest.config.js ./jest.config.js
COPY /tsconfig.json ./tsconfig.json
COPY /.vscode ./.vscode
RUN npm install
ENTRYPOINT  [ "bash" ]