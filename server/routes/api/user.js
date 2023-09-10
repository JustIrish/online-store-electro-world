const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

const { validateBody } = require("../../middlewares/validateBody");

const { addSchema } = require("../../models/user");

router.post("/", validateBody(addSchema), ctrl.addUser);
router.get("/", ctrl.getUsers);

module.exports = router;
