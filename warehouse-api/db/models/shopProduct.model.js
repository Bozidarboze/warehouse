import { Sequelize } from "sequelize";
import db from "../db.config.js";
import Product from "./product.model.js";
import Shop from "./shop.model.js";

const { DataTypes } = Sequelize;

const ShopProduct = db.define(
  "shopProducts",
  {
    shopProductId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    shopId: {
      type: DataTypes.INTEGER,
      references: {
        model: Shop,
        key: "shopId",
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

export default ShopProduct;
