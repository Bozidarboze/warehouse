import Product from "./models/product.model.js";
import Shop from "./models/shop.model.js";
import Warehouse from "./models/warehouse.model.js";
import Log from "./models/log.model.js";
import Login from "./models/login.model.js";
import ShopProduct from "./models/shopProduct.model.js";
import WarehouseProduct from "./models/warehouseProduct.model.js";

const initializeDB = async () => {
  Warehouse.belongsToMany(Product, {
    through: "warehouseProducts",
    as: "products",
    foreignKey: "warehouseId",
  });

  Shop.belongsToMany(Product, {
    through: "shopProducts",
    as: "products",
    foreignKey: "shopId",
  });

  Product.belongsToMany(Shop, {
    through: "shopProducts",
    as: "shops",
    foreignKey: "productId",
  });

  Product.belongsToMany(Warehouse, {
    through: "warehouseProducts",
    as: "warehouses",
    foreignKey: "productId",
  });
  await Log.sync();
  await Login.sync();
  await Warehouse.sync();
  await Shop.sync();
  await Product.sync();
  await ShopProduct.sync();
  await WarehouseProduct.sync();
};

export default initializeDB;
