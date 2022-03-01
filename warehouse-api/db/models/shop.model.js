import { Sequelize } from "sequelize";
import db from "../db.config.js";
import Warehouse from "./warehouse.model.js";

const { DataTypes } = Sequelize;

const Shop = db.define(
  "shops",
  {
    shopId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    warehouseId: {
      type: DataTypes.INTEGER,
      references: {
        model: Warehouse,
        key: "warehouseId",
      },
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Shop;
