import Shop from "../db/models/shop.model.js";
import ShopProduct from "../db/models/shopProduct.model.js";

const deleteShop = async (req, res) => {
  const location = req.query.location;

  try {
    const shop = await Shop.findOne({ where: { location } });

    const shopProducts = await ShopProduct.findAll({ where: { shopId: shop.shopId } });

    await Promise.all(
      shopProducts.map(async (shopProduct) => {
        await shopProduct.destroy();
      })
    );

    await shop.destroy();

    return res.json("Shop successfully deleted!");
  } catch (err) {
    return res.status(400).json("Failed to delete shop!");
  }
};

export default deleteShop;
