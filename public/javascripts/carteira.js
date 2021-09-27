require('dotenv-extended').load();
const axios = require('axios');
const api = require("./api");
const symbol = process.env.SYMBOL;

async function wallet() {
  try {
    const account = await api.accountInfo();
    const coins = account.balances.filter(b => symbol.indexOf(b.asset) !== -1);
    let typeSymbol = coins.map((e, index) => coins[index][Object.keys(e)[0]]);
    let valueCoin = coins.map((e, index) => coins[index][Object.keys(e)[1]]);
    var subCoin = valueCoin[2].substr(0, 6);
    var moeda = subCoin + " " + typeSymbol[2];
    return await moeda
  } catch (error) {
    console.log("Error", error)
    throw error
  }
}

async function walletBTC() {
  try {
    const carteira = await api.accountInfo();
    const coins = carteira.balances.filter(b => b.asset === 'BTC')
    return coins
  } catch (error) {
    console.log("Error", error)
    throw error
  }
}

async function walletETH() {
  try {
    const carteira = await api.accountInfo();
    const coins = carteira.balances.filter(b => b.asset === 'ETH')
    return coins
  } catch (error) {
    console.log("Error", error)
    throw error
  }
}

async function walletADA() {
  try {
    const carteira = await api.accountInfo();
    const coins = carteira.balances.filter(b => b.asset === 'ADA')
    return coins
  } catch (error) {
    console.log("Error", error)
    throw error
  }
}

async function walletLTC() {
  try {
    const carteira = await api.accountInfo();
    const coins = carteira.balances.filter(b => b.asset === 'LTC')
    return coins
  } catch (error) {
    console.log("Error", error)
    throw error
  }
}

async function walletBNB() {
  try {
    const carteira = await api.accountInfo();
    const coins = carteira.balances.filter(b => b.asset === 'BNB')
    return coins
  } catch (error) {
    console.log("Error", error)
    throw error
  }
}

async function walletALICE() {
  try {
    const carteira = await api.accountInfo();
    const coins = carteira.balances.filter(b => b.asset === 'ALICE')
    return coins
  } catch (error) {
    console.log("Error", error)
    throw error
  }
}

async function walletBADGER() {
  try {
    const carteira = await api.accountInfo();
    const coins = carteira.balances.filter(b => b.asset === 'BADGER')
    return coins
  } catch (error) {
    console.log("Error", error)
    throw error
  }
}

async function walletALPHA() {
  try {
    const carteira = await api.accountInfo();
    const coins = carteira.balances.filter(b => b.asset === 'ALPHA')
    return coins
  } catch (error) {
    console.log("Error", error)
    throw error
  }
}

async function walletDOT() {
  try {
    const carteira = await api.accountInfo();
    const coins = carteira.balances.filter(b => b.asset === 'DOT')
    return coins
  } catch (error) {
    console.log("Error", error)
    throw error
  }
}

async function walletCHZ() {
  try {
    const carteira = await api.accountInfo();
    const coins = carteira.balances.filter(b => b.asset === 'CHZ')
    return coins
  } catch (error) {
    console.log("Error", error)
    throw error
  }
}

module.exports = {
  wallet, walletBTC, walletETH, walletADA, walletLTC, walletBNB, walletALICE, walletBADGER, walletALPHA, walletCHZ, walletDOT
}
