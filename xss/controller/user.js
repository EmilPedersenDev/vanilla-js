const db = require("../models");
const User = db.users;

module.exports = (app) => {
  app.post("/user", async (req, res) => {
    const { name } = req.body;

    if (!name) {
      throw new Error("No name provided");
    }

    let user = new User({
      name: name,
    });

    const data = await user.save();

    return res.json({ _id: data._id, name: data.name });
  });

  app.get("/user/:_id", async (req, res) => {
    const { _id } = req.params;

    if (!_id) {
      throw new Error("No _id provided.");
    }

    const user = await User.findOne({ _id: _id });

    if (!user) {
      throw new Error("Could not find a person with that name.");
    }

    res.json({ _id: user._id, name: user.name });
  });
};
