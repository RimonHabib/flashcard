import { DataSource } from "typeorm";
import { join } from "path";

const db = new DataSource({
  type: "better-sqlite3",
  database: join(__dirname, "../../../database/data.sqlite"),
  entities: [join(__dirname, "../", "**/*.entity.ts")],
  synchronize: true,
});

export default db;
