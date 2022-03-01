import Shop from "../db/models/shop.model.js";
import ShopProduct from "../db/models/shopProduct.model.js";
import Product from "../db/models/product.model.js";
import Warehouse from "../db/models/warehouse.model.js";

const addShop = async (req, res) => {
  const location = req.body.location;

  if (location === "") return res.status(400).json("Please insert a shop location!");

  try {
    const { warehouseId } = await Warehouse.findOne({ where: { name: "Warehouse" } });
    const shopExists = await Shop.findOne({ where: { location } });
    if (!shopExists) {
      await Shop.create({ location, warehouseId });
      const { shopId } = await Shop.findOne({ where: { location } });

      const products = await Product.findAll();
      products.forEach(({ productId }) => ShopProduct.create({ shopId, productId }));

      res.status(200).json("Shop successfully added!");
    } else {
      res.status(409).json("Shop already exists!");
    }
  } catch (error) {
    res.status(400).json("Failed to add shop!");
  }
};

export default addShop;
