import { Sequelize } from "sequelize";
import 'dotenv/config';

export const sequelize = new Sequelize(
   process.env.DB_DATABASE,
   process.env.DB_USER,
   process.env.DB_PASSWORD,
   {
      host: process.env.DB_HOST,
      dialect: 'postgres',
      logging: console.log,
      dialectOptions: {
         ssl: {
            require: true,
            rejectUnauthorized: false
         }
      }
   }
)