const { User } = require("../models/user");

const { HttpError, ctrlWrapper } = require("../helpers");

const getUsers = async (req, res) => {
  const users = await User.find();
  if (users.length === 0) {
    throw HttpError(404, "Database is empty");
  } else {
    res.status(201).json(users);
  }
};

module.exports = {
  getUsers: ctrlWrapper(getUsers),
};
