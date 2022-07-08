var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando Armadillo",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles Xavier",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

module.exports = router;
