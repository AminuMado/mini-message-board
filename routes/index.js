var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando Armadillo",
    added: new Date(),
  },
  {
    text: "Post any Message... don't worry, I dont keep receipts",
    user: "Charles Xavier",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});
router.get("/new", (req, res) => {
  res.render("form", { title: "Mini Message Board", messages: messages });
});
router.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
});
module.exports = router;
