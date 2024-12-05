FROM mcr.microsoft.com/devcontainers/typescript-node:20-bullseye
ENV NODE_ENV=development
WORKDIR /home/node/dynamic-programming
COPY ./package.json ./package.json
RUN npm install
ENTRYPOINT [ "bash" ]