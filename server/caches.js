const redis = require('redis');
const REDISPORT = process.env.PORT || 6379
const client = redis.createClient(REDISPORT);


function redisCache(req, res, next) {
  const url = 'https://mboum-finance.p.rapidapi.com/ne/news'

  client.get(url, (err, data) => {
    if (err) throw err;
    if (data !== null) {
      let parsed = JSON.parse(data)
      res.send(parsed)
    } else {
      next();
    }
  })
}

function redisKeyMetrics({query}, res, next) {
  const {ticker} = query

  client.get(ticker, (err, data) => {
    if (err) throw err;
    if (data !== null) {
      let parsed = JSON.parse(data)
      res.send(parsed)
    } else {
      next();
    }
  })
}

function redisBalanceSheet({query}, res, next) {
  const { ticker } = query
  const str = ticker + 'BS'

  client.get(str, (err, data) => {
    if (err) throw err;
    if (data !== null) {
      let parsed = JSON.parse(data)
      res.send(parsed)
    } else {
      next();
    }
  })
}

function redisGeneralInfo({query}, res, next) {
  const { ticker } = query
  const str = ticker + 'GI'

  client.get(str, (err, data) => {
    if (err) throw err;
    if (data !== null) {
      let parsed = JSON.parse(data)
      res.send(parsed)
    } else {
      next();
    }
  })
}


module.exports = {
  redisCache,
  redisGeneralInfo,
  redisBalanceSheet,
  redisKeyMetrics
}