import { Sequelize } from "sequelize";

const db = new Sequelize(process.env.CLEARDB_DATABASE_URL);

// const db = new Sequelize('DB_NAME', 'DB_USERNAME', 'DB_PASSWORD', {
//   host: 'localhost',
//   dialect: "mysql"
// });

export default db;
