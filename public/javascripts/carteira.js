require('dotenv-extended').load();
const axios = require('axios');
const api = require("./api");
const symbol = process.env.SYMBOL;

async function wallet() {
    try {
      const account = await api.accountInfo();
      const coins = account.balances.filter(b => symbol.indexOf(b.asset) !== -1);
      let typeSymbol = coins.map((e,index)=> coins[index][Object.keys(e)[0]]);
      let valueCoin = coins.map((e,index)=> coins[index][Object.keys(e)[1]]);
      var subCoin = valueCoin[2].substr(0, 6);
      var moeda = subCoin + " " + typeSymbol[2];
      return await moeda
    } catch (error) {
        console.log("Error", error)
        throw error
    }
}

module.exports = {
  wallet
}
