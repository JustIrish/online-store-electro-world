const express = require("express");
const logger = require("morgan"); // підключення бібліотек
const cors = require("cors");
require("dotenv").config();

const userRouter = require("./routes/api/user");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger)); // міделвара виводить в консоль інформацію про запит
app.use(cors()); // міделвара дозволяє крос-доменні запити
app.use(express.json()); // міделвара для обробки JSON-запитів від користувачів

app.use("/api/user", userRouter); // за вказаним шляхом контролери у файлі userRouter

app.use((req, res) => {
  // якщо запит за іншою адресою ця міделвара повертає відповідь у форматі json сповіщення Not found
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  // відправляє помилки з іншими статусами
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
