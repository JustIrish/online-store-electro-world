const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

const { validateBody } = require("../../middlewares/validateBody");

const { addSchema } = require("../../models/user");

router.post("/", validateBody(addSchema), ctrl.addUser); // за запитом post відбувається валідація у міделварі та викликається контроллер addUser
router.get("/", ctrl.getUsers); // за запитом post викликається контроллер getUsers

module.exports = router;
