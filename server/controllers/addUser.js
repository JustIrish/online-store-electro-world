const { User } = require("../models/user");

const { HttpError, ctrlWrapper } = require("../helpers");

const addUser = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    const newUser = await User.create({ ...req.body });
    res.status(201).json(newUser);
  } else {
    throw HttpError(401, "A user with the same email address already exists");
  }
};

module.exports = {
  addUser: ctrlWrapper(addUser),
};
