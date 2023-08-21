# Use the official Node.js image as the base image
FROM node

# Set the working directory to /rackabecix
WORKDIR /rackabecix

# Copy the package.json and package-lock.json files to the container
COPY src/package*.json .

# Install the dependencies specified in package.json
RUN npm install

# Copy the rest of the application code to the container
COPY src .

# Create the directory for the SQLite database
RUN mkdir -p /rackabecix/db/storage

# Copy the startup script to the container
COPY docker/startup.sh .

# Make the startup script executable
RUN chmod +x startup.sh

# Set the entrypoint for the container to the startup script
ENTRYPOINT [ "./startup.sh" ]