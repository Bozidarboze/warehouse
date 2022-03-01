import { Op } from "sequelize";
import Product from "../db/models/product.model.js";
import Shop from "../db/models/shop.model.js";
import Warehouse from "../db/models/warehouse.model.js";

const search = async (req, res) => {
  const searchFor = req.query.for;
  let query = req.query.query;

  if (searchFor === "shops") {
    try {
      const shops = await Shop.findAll({
        where: {
          location: { [Op.substring]: query },
        },
      });
      return res.json(shops);
    } catch (err) {
      return res.status(400).json([]);
    }
  }

  if (searchFor === "products") {
    const location = req.query.location;

    if (location === "Warehouse") {
      try {
        const warehouse = await Warehouse.findOne({
          where: { name: location },
          include: [
            {
              model: Product,
              as: "products",
              where: {
                name: { [Op.substring]: query },
              },
              through: {
                attributes: ["quantity"],
              },
            },
          ],
        });

        if (!warehouse) return res.json({});

        return res.json(warehouse);
      } catch (err) {
        return res.status(400).json({});
      }
    }

    try {
      const shop = await Shop.findOne({
        where: { location },
        include: [
          {
            model: Product,
            as: "products",
            where: {
              name: { [Op.substring]: query },
            },
            through: {
              attributes: ["quantity"],
            },
          },
        ],
      });
      if (!shop) return res.json({});

      return res.json(shop);
    } catch (err) {
      return res.status(400).json({});
    }
  }

  return res.status(400).json({});
};

export default search;
