require("../../public/javascripts/api");
const axios = require("axios");
const { wallet, walletBTC, walletETH, walletADA, walletLTC, walletBNB,walletALICE, walletBADGER, walletALPHA, walletCHZ, walletDOT } = require("../../public/javascripts/carteira");


module.exports = function (app) {

  (async function () {
    var moeda = await wallet()
    var btc = await walletBTC();
    var moedaBTC = btc[0].free;
    var eth = await walletETH();
    var moedaETH = eth[0].free;
    var ada = await walletADA();
    var moedaADA = ada[0].free;
    var ltc = await walletLTC();
    var moedaLTC = ltc[0].free;
    var bnb = await walletBNB();
    var moedaBNB = bnb[0].free;
    var alice = await walletALICE();
    var moedaAlice = alice[0].free;
    var badger = await walletBADGER();
    var moedaBadger = badger[0].free;
    var alpha = await walletALPHA();
    var moedaAlpha = alpha[0].free;
    var dot = await walletDOT();
    var moedaDot = dot[0].free;
    var chz = await walletCHZ();
    var moedaChz = chz[0].free;
    app.get('/', function (req, res) {
      res.render("index", { value: moeda, btcValue: moedaBTC, ethValue: moedaETH
      , adaValue: moedaADA, ltcValue: moedaLTC, bnbValue: moedaBNB, aliceValue: moedaAlice, badgerValue: moedaBadger
      , alphaValue: moedaAlpha, dotValue: moedaDot, chzValue: moedaChz  });
    });
  })()
}