# Use the official Node.js image as the base
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY app/package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY app/ .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
