const { User } = require("../models/user");

const { HttpError, ctrlWrapper } = require("../helpers");

const addUser = async (req, res) => {
  const { email } = req.body; // деструктуризую  з request.body email

  const user = await User.findOne({ email }); // шукаю користувача з таким email
  if (!user) {
    // якщо коритувача з таким email нема додаю нового користувача в базу
    const newUser = await User.create({ ...req.body });
    res.status(201).json(newUser); // віддаю у відповіді у форматі json дані нового користувача
  } else {
    // в іншому випадку викликаю функцію, що створює помилку і прокидує виконання далі
    throw HttpError(401, "A user with the same email address already exists");
  }
};

module.exports = {
  addUser: ctrlWrapper(addUser),
};
