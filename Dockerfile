# [Choice] Node.js version: 16, 14, 12
FROM node:16

# init for VS Code
RUN mkdir -p /root/workspace /root/.vscode-server/extensions 

COPY ./ /root/worskpace/app

# Install eslint typescript expo
RUN npm install -g npm@latest
RUN npm install -g eslint typescript expo-cli @expo/ngrok@^4.1.0
RUN node --version && npm --version

CMD /bin/sh -c "while sleep 86000; do :; done"