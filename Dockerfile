# Use official Node image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package manifests and install deps first for better caching
COPY package*.json ./
RUN npm ci --production

# Copy app source
COPY . ./

# Build the site
RUN npm run build

# Expose port
EXPOSE 3000

# Start the server
CMD [ "node", "server.js" ]
