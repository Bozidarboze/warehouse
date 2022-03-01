import Log from "../db/models/log.model.js";

const getLogs = async (req, res) => {
  try {
    const logs = await Log.findAll({ order: [["createdAt", "DESC"]] });

    return res.status(200).json(logs);
  } catch (err) {
    return res.status(400).json([]);
  }
};

export default getLogs;
