import { Sequelize } from "sequelize";
import db from "../db.config.js";

const { DataTypes } = Sequelize;

const Log = db.define(
  "logs",
  {
    logId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Log;
