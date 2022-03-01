import { Sequelize } from "sequelize";
import db from "../db.config.js";

const { DataTypes } = Sequelize;

const Login = db.define(
  "logins",
  {
    loginId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Login;
