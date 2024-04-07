import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import { sequelize } from "./persintence/database/database.js";
import { insertarData } from "./persintence/database/insertData.js";

async function main() {
  await sequelize.sync({ force: false });
  await insertarData();
  const ip = process.env.IP || "localhost";
  const port = process.env.PORT || 4000;

  app.listen(port, ip, () => {
    console.log(`Server is running on http://${ip}:${port}`);
  });
}

main();
