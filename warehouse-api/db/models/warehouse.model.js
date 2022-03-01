import { Sequelize } from "sequelize";
import db from "../db.config.js";

const { DataTypes } = Sequelize;

const Warehouse = db.define(
  "warehouses",
  {
    warehouseId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Warehouse;
