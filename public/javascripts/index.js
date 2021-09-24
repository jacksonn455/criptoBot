require('dotenv').config()
const api = require("./api");
const symbol = process.env.SYMBOL;
const profitability = parseFloat(process.env.PROFITABILITY);
const coin = process.env.COIN;
const goodBuy = process.env.GOOD_BUY

setInterval(async () => {

  let buy = 0, sell = 0;
  const result = await api.depth(symbol);

  if (result.bids && result.bids.length) {
    console.log(`Highest buy: ${result.bids[0][0]}`);
    const buy = parseFloat(result.bids[0][0]);
  }

  if (result.asks && result.asks.length) {
    console.log(`Lowest buy: ${result.asks[0][0]}`);
    const sell = parseFloat(result.asks[0][0]);
  }

  const account = await api.accountInfo();
  const coins = account.balances.filter(b => symbol.indexOf(b.asset) !== -1);
  let typeSymbol = coins.map((e,index)=> coins[index][Object.keys(e)[0]]);
  let valueCoin = coins.map((e,index)=> coins[index][Object.keys(e)[1]]);
  var subCoin = valueCoin[2].substr(0, 6);
  console.log('Valores na carteira: R$ ' + subCoin + " " + typeSymbol[2]);

  if (sell && sell < goodBuy) {
    console.log("Hora de comprar!!!");
    console.log("Verificar se tem o valor para comprar");
    const walletCoin = parseFloat(coins.find(c => c.asset === coin).free);
    if (sell <= walletCoin) {
      const buyOrder = await api.newOrder(symbol, 1);
      console.log("orderId: " + buyOrder.orderId);
      console.log("status: " + buyOrder.status);

      if (buyOrder.status == 'FILLED') {
        const price = parseFloat(sell * profitability).toFixed(8);
        console.log("price: " + price);
        const sellOrder = await api.newOrder(symbol, 1, price, 'SELL', 'LIMIT');
        console.log(sellOrder);
        console.log(`orderId: ${sellOrder.orderId}`);
        console.log(`status: ${sellOrder.status}`);
      }
    }
  } else {
    console.log("Esperando o mercado!");
  }
}, process.env.CRAWLER_INTERVAL);