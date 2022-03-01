import Log from "../db/models/log.model.js";

const addLog = async (req, res) => {
  const location = req.body.location;
  const message = req.body.message;

  try {
    await Log.create({ location, message });

    return res.json("Successfully saved log!");
  } catch (err) {
    return res.status(400).json("Failed to save log!");
  }
};

export default addLog;
