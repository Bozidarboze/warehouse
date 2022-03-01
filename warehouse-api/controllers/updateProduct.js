import Product from "../db/models/product.model.js";
import Shop from "../db/models/shop.model.js";
import ShopProduct from "../db/models/shopProduct.model.js";
import WarehouseProduct from "../db/models/warehouseProduct.model.js";

const updateProduct = async (req, res) => {
  const name = req.body.name;
  let quantityToAdd = Number(req.body.quantity);
  const location = req.body.location;

  if (quantityToAdd === 0) {
    return res.status(400).json("Please insert quantity!");
  }

  if (location === "Warehouse") {
    try {
      const { productId } = await Product.findOne({ where: { name } });

      const warehouseProduct = await WarehouseProduct.findOne({ where: { productId } });
      const oldWarehouseQuantity = warehouseProduct.quantity;
      if (oldWarehouseQuantity + quantityToAdd < 0) quantityToAdd = oldWarehouseQuantity * -1;
      const newWarehouseQuantity = oldWarehouseQuantity + quantityToAdd;

      warehouseProduct.update({ quantity: newWarehouseQuantity });

      await warehouseProduct.save();

      return res.json("Product successfully updated!");
    } catch (err) {
      return res.status(400).json("Failed to process order!");
    }
  }

  try {
    const { shopId } = await Shop.findOne({ where: { location } });
    const { productId } = await Product.findOne({ where: { name } });

    const shopProduct = await ShopProduct.findOne({ where: { productId, shopId } });
    const oldProductQuantity = shopProduct.quantity;
    if (oldProductQuantity + quantityToAdd < 0) quantityToAdd = oldProductQuantity * -1;
    const newProductQuantity = oldProductQuantity + quantityToAdd;

    const warehouseProduct = await WarehouseProduct.findOne({ where: { productId } });
    const oldWarehouseQuantity = warehouseProduct.quantity;
    const newWarehouseQuantity = oldWarehouseQuantity - quantityToAdd;

    if (newWarehouseQuantity >= 0) {
      shopProduct.update({ quantity: newProductQuantity });
      if (quantityToAdd > 0) warehouseProduct.update({ quantity: newWarehouseQuantity });

      res.json("Product successfully updated!");
    } else {
      res.status(400).json(`Not enough quantity in warehouse! Available: ${oldWarehouseQuantity}`);
    }
  } catch (err) {
    res.status(400).json("Failed to process order!");
  }
};

export default updateProduct;
