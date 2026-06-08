import { config as envConfig } from "dotenv";

envConfig();

export const env = {
  port: parseInt(process.env.BACKEND_PORT ?? "3000"),
};
