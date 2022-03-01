import Product from "../db/models/product.model.js";
import Shop from "../db/models/shop.model.js";
import Warehouse from "../db/models/warehouse.model.js";
import ShopProduct from "../db/models/shopProduct.model.js";
import WarehouseProduct from "../db/models/warehouseProduct.model.js";

const deleteProduct = async (req, res) => {
  const name = req.query.name;

  try {
    const { warehouseId } = await Warehouse.findOne({ where: { name: "Warehouse" } });

    const shops = await Shop.findAll();

    const product = await Product.findOne({ where: { name } });

    let warehouseProduct = await WarehouseProduct.findOne({ where: { productId: product.productId, warehouseId } });

    await Promise.all(
      shops.map(async ({ shopId }) => {
        let shopProduct = await ShopProduct.findOne({ where: { shopId, productId: product.productId } });
        await shopProduct.destroy();
      })
    );

    await warehouseProduct.destroy();
    await product.destroy();

    res.status(200).json("Product successfully deleted!");
  } catch (error) {
    res.status(400).json("Failed to delete product!");
  }
};

export default deleteProduct;
