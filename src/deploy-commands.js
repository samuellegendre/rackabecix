const { REST, Routes } = require("discord.js");
const { Console } = require("node:console");
const token = process.env.TOKEN;
const clientId = process.env.CLIENT_ID;
const fs = require("node:fs");
const path = require("node:path");
const commands = [];
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    if ("data" in command && "execute" in command) {
      commands.push(command.data.toJSON());
    } else {
      console.warn(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
      );
    }
  }
}

const rest = new REST().setToken(token);

(async () => {
  try {
    console.log(`[INFO] Refreshing ${commands.length} application commands...`);

    const data = await rest.put(Routes.applicationCommands(clientId), {
      body: commands,
    });

    console.log(
      `[INFO] Successfully reloaded ${data.length} application commands!`
    );
  } catch (error) {
    console.error(error);
  }
})();
