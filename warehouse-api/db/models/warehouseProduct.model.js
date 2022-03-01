import { Sequelize } from "sequelize";
import db from "../db.config.js";
import Product from "./product.model.js";
import Warehouse from "./warehouse.model.js";

const { DataTypes } = Sequelize;

const WarehouseProduct = db.define(
  "warehouseProducts",
  {
    warehouseProductId: {
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
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: "productId",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
  }
);

export default WarehouseProduct;
