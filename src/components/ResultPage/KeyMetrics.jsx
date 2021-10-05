import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VscLoading } from 'react-icons/vsc';

export default function KeyMetrics() {
  let [metrics, updateMetrics] = useState('')
  let [ticker, updateTicker] = useState('MU')
  let recentMetrics = metrics[0]

  const formatter = new Intl.NumberFormat('en-US', {
    styles: 'currency',
    currency: 'USD',
    minimumFractionDigits: 1
  })

  useEffect(() => {
    axios.get('/api/search/:ticker/key-metrics', { params: { ticker: ticker } })
      .then(res => {
        updateMetrics(res.data)
      })
      .catch(err => {
        alert(err)
      })
  }, [])

  if (!metrics) {
    return (
      <>
        <VscLoading />
      </>
    )
  } else {
    return (
      <section className="m-4 w-60 bg-indigo-800 border-2 border-solid border-indigo-800 border-opacity-70 rounded">
        <h3 className="text-gray-300">Key Metrics</h3>
        <p className="text-gray-300">Revenue Per Share: ${formatter.format(recentMetrics.revenuePerShare)}</p>
        <p className="text-gray-300">Net Income Per Share: ${formatter.format(recentMetrics.netIncomePerShare)}</p>
        <p className="text-gray-300">Operating Cash Flow Per Share: ${formatter.format(recentMetrics.operatingCashFlowPerShare)}</p>
        <p className="text-gray-300">Cash Per Share: ${formatter.format(recentMetrics.cashPerShare)}</p>
        <p className="text-gray-300">Tangible Book Value Per Share ${formatter.format(recentMetrics.tangibleBookValuePerShare)}</p>
        <p className="text-gray-300">Price to Earnings Ratio: ${formatter.format(recentMetrics.peRatio)}</p>
        <p className="text-gray-300">Price to Book Ratio: ${formatter.format(recentMetrics.pbRatio)}</p>
        <p className="text-gray-300">Price to Sales Ratio: ${formatter.format(recentMetrics.priceToSalesRatio)}</p>
        <p className="text-gray-300">Enterprise Value to Sales Ratio: ${formatter.format(recentMetrics.evToSales)}</p>
        <p className="text-gray-300">Market Cap: ${formatter.format(recentMetrics.marketCap)}</p>
        <p className="text-gray-300">Debt to Equity Ratio: {formatter.format(recentMetrics.debtToEquity)}</p>
        <p className="text-gray-300">Debt to Assets Ratio: {formatter.format(recentMetrics.debtToAssets)}</p>
      </section>
    )
  }
}