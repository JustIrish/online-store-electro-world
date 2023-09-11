const { User } = require("../models/user");

const { HttpError, ctrlWrapper } = require("../helpers");

const getUsers = async (req, res) => {
  const users = await User.find(); // шукаю всіх користувачів
  if (users.length === 0) {
    // якщо масив пустий викликаю функцію, що створює помилку і прокидує виконання далі
    throw HttpError(404, "Database is empty");
  } else {
    // в іншому випадку повертаю у відповідь у форматі json масив користувачів
    res.status(201).json(users);
  }
};

module.exports = {
  getUsers: ctrlWrapper(getUsers),
};
