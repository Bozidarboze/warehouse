import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Login from "../db/models/login.model.js";

const auth = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const { authorization } = req.headers;

  if (authorization === "null" && (email === "" || password === "")) return res.status(400).json("Wrong email or password");

  const logins = await Login.findAll();
  const adminExists = logins.length === 0 ? false : true;

  if (!adminExists) {
    try {
      const email = "admin@gmail.com";
      const hash = "$2b$04$eo94XXP9CQblkaAHH5taG.9k9P84Z0osdiyeasQ6xhe6ygd3/e7IG";
      await Login.create({ email, hash });
      const admin = await Login.findOne({ where: { email } });
      const token = jwt.sign({ loginId: admin.loginId }, "JWT_SECRET");
      return res.json({ success: true, token, email });
    } catch (err) {
      return res.status(400).json("Unable to sign in");
    }
  }

  if (authorization !== "null") {
    try {
      const { loginId } = jwt.verify(authorization, "JWT_SECRET");
      const { email } = await Login.findByPk(loginId);
      return res.json({ success: true, email });
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  try {
    const admin = await Login.findOne({ where: { email } });
    if (!admin) return res.status(400).json("Wrong email or password");

    bcrypt.compare(password, admin.hash, function (err, result) {
      if (err) return res.status(400).json("Unable to sign in");
      if (result) {
        const token = jwt.sign({ loginId: admin.loginId }, "JWT_SECRET");
        return res.json({ success: true, token, email });
      } else {
        return res.status(400).json("Wrong email or password");
      }
    });
  } catch (err) {
    return res.status(400).json("Unable to sign in");
  }
};

export default auth;
