FROM node
WORKDIR /rackabecix
RUN useradd -m rackabecix
COPY src/package*.json .
RUN npm install
RUN chown -R rackabecix:rackabecix /rackabecix
COPY src .
USER rackabecix
CMD ["node", "index.js"]