const { Router } = require("express");
const router = Router();

const {getChars, createChar, getChar, deleteChar, updateChar} = require("../controllers/char.controller");
router.route("/")
    .get(getChars)
    .post(createChar)
router.route("/:id")
    .get(getChar)
    .delete(deleteChar)
    .put(updateChar)
module.exports = router;