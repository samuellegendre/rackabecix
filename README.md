# Rackabecix

![Docker Image Version (latest semver)](https://img.shields.io/docker/v/samuellegendre/rackabecix)

Rackabecix is a simple Discord bot built with [Discord.js](https://discord.js.org/). It offers features such as a quoting system and realtime subreddit feeds.

## Deployment

This section provides a guide for deploying the bot using Docker Compose. The bot consists of two services: the main Rackabecix bot and the Watchtower service for automatically updating the bot's Docker image.

### Prerequisites

Before deploying the Rackabecix bot, ensure you meet the following prerequisites:

- **Docker** and **Docker Compose** (latest versions)
- **Bot Application in Discord's Developer Portal**: You must have a bot application set up in the [Discord Developer Portal](https://discord.com/developers/applications). This is where you'll obtain the `TOKEN` and `CLIENT_ID` needed for the bot's configuration.
  - Make sure to give your bot the necessary permissions such as `bot` and `application.commands` for its intended functionality.

### Instructions

1. **Copy the docker-compose.yml file**: Navigate to the `deployment` directory and copy the `docker-compose.yml` file on your local machine.

2. **Configure Environment Variables**: Edit the `docker-compose.yml` file to include your bot's `TOKEN` and `CLIENT_ID`. Replace `<TOKEN>` and `<CLIENT_ID>` with your bot's token and client ID, respectively.

- The `DEPLOY_COMMANDS` environnement variable is optional and set to `true` by default. It enables the deployment of global commands.

- The `FORCE_INITIALIZE_DATABASE` variable is also optional and set to `false` by default. It force the initialization of the database on startup creating a fresh database and resetting the existing one.

4. **Start the Services**: Use the command `docker-compose up -d` to start both the Rackabecix bot and Watchtower services. The bot service is configured to restart automatically and will persist across reboots with a mounted volumes for database storage.

To stop the services, you can run the command `docker-compose down` from the same directory.

If you need to update the bot's configuration, simply edit the `docker-compose.yml` file and restart the services using `docker-compose down` followed by `docker-compose up -d`.

## Usage

TODO

## Acknowledgements

- [Discord.js Guide](https://discordjs.guide)
- [Discord.js Discord server](https://discord.com/invite/djs)
