import express from "express";
import config from "./config";
import sequelize from "./db-connection";
import { expressSetup } from "./utils";

(async () => {
  await sequelize; // Establishes connection to the database
  await sequelize.sync();
})();

const app = express();
expressSetup(app);
// Start the server and listen on the specified port
app.listen(config.port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${config.port}`);
});

export default app;
