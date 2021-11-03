const axios = require('axios').default;
const redis = require('redis');
const REDISPORT = process.env.PORT || 6379
const client = redis.createClient(REDISPORT);


async function getYahooNews(req, res, next) {
  try {
    var options = {
      method: 'GET',
      url: 'https://mboum-finance.p.rapidapi.com/ne/news',
      headers: {
        'x-rapidapi-host': 'mboum-finance.p.rapidapi.com',
        'x-rapidapi-key': apiKey
      }
    };
    const response = await axios.request(options)
    const { data } = response
    let dataString = JSON.stringify(data);

    client.setex(options.url, 86400, dataString)
    res.send(data)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

async function getKeyMetrics({query}, res, next) {
  const {ticker} = query
  console.log('TICKER: ', ticker)
  try {
    let options = {
      method: 'GET',
      url: `https://quantel-io.p.rapidapi.com/key-metrics/${ticker}`,
      params: {period: 'quarter'},
      headers: {
        'x-rapidapi-host': 'quantel-io.p.rapidapi.com',
        'x-rapidapi-key': apiKey
      }
    };
    const response = await axios.request(options)
    const { data } = response
    let dataString = JSON.stringify(data)

    client.setex(ticker, 86400, dataString)
    res.send(data)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}


async function getBlanceSheet({query}, res, next) {
  const { ticker } = query;
  try {
    let options = {
      method: 'GET',
      url: `https://quantel-io.p.rapidapi.com/balance-sheet-statement/${ticker}`,
      params: { period: 'quarter' },
      headers: {
        'x-rapidapi-host': 'quantel-io.p.rapidapi.com',
        'x-rapidapi-key': apiKey
      }
    };

    const response = await axios.request(options)
    const { data } = response
    let dataString = JSON.stringify(data)

    const str = ticker + 'BS'
    client.setex(str, 86400, dataString)
    res.send(data)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}


async function getGeneralInfo({query}, res, next) {
  const { ticker } = query;
  try {
    let options = {
      method: 'GET',
      url: `https://quantel-io.p.rapidapi.com/profile/${ticker}`,
      headers: {
        'x-rapidapi-host': 'quantel-io.p.rapidapi.com',
        'x-rapidapi-key': apiKey
      }
    };
    const response = await axios.request(options)
    const { data } = response
    let dataString = JSON.stringify(data)

    const str = ticker + 'GI'
    client.setex(str, 86400, dataString)
    res.send(data)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

module.exports = {
  getYahooNews,
  getBlanceSheet,
  getGeneralInfo,
  getKeyMetrics
}