const Sequelize = require("sequelize");
const sequelize = new Sequelize("rackabecix", "_", "_", {
  host: "localhost",
  dialect: "sqlite",
  logging: false,
  storage: "db/storage/database.sqlite",
});
const force = process.argv.includes("--force") || process.argv.includes("-f");

console.log("[INFO] Syncing database...");
if (force) console.log("[INFO] Force enabled, dropping tables...");
sequelize
  .sync({ force })
  .then(async () => {
    console.log("[INFO] Succesfully synced database!");
    sequelize.close();
  })
  .catch(console.error);
