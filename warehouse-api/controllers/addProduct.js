import Product from "../db/models/product.model.js";
import Shop from "../db/models/shop.model.js";
import Warehouse from "../db/models/warehouse.model.js";
import ShopProduct from "../db/models/shopProduct.model.js";
import WarehouseProduct from "../db/models/warehouseProduct.model.js";

const addProduct = async (req, res) => {
  const name = req.body.name;

  if (name === "") return res.status(400).json("Please insert a product name!");

  try {
    let warehouse = await Warehouse.findOne({ where: { name: "Warehouse" } });
    if (!warehouse) warehouse = await Warehouse.create({ name: "Warehouse" });

    const shops = await Shop.findAll();

    const { warehouseId } = warehouse;

    const productExist = await Product.findOne({ where: { name } });
    if (!productExist) {
      await Product.create({ name });
      const { productId } = await Product.findOne({ where: { name } });

      if (warehouseId && productId) await WarehouseProduct.create({ warehouseId, productId });

      shops.forEach(async ({ shopId }) => {
        if (shopId && productId) await ShopProduct.create({ shopId, productId });
      });

      res.status(200).json("Product successfully added!");
    } else {
      res.status(409).json("Product already exists!");
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

export default addProduct;
