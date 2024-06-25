# Base image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN rm -rf node_modules

# Install app dependencies
RUN npm install --loglevel=warn;

# Bundle app source
COPY . .

RUN npm install -g @nestjs/cli

RUN chmod +x /usr/local/bin/nest

RUN chmod +x ./node_modules/.bin/jest

RUN npm run test

# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
