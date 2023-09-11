const mongoose = require("mongoose"); // підключення mongoose

const app = require("./app"); // app - веб сервер
const { PORT = 8000, DB_HOST } = process.env; // деструктуризую з файла .env номер порту та ключ до бази даних

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST) // підключення до бази даних
  .then(() => {
    app.listen(PORT); // запускаю сервер
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
