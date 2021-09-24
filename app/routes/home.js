require("../../public/javascripts/api");
const axios = require("axios");
const { wallet } = require("../../public/javascripts/carteira");


module.exports = function (app) {

  (async function () {
    var moeda = await wallet()
    app.get('/', function (req, res) {
      res.render("index", { value: moeda });
    });
  })()
}