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
      <section >
        <h3 className="key-metrics-title">Key Metrics</h3>
        <p>Revenue Per Share: ${formatter.format(recentMetrics.revenuePerShare)}</p>
        <p>Net Income Per Share: ${formatter.format(recentMetrics.netIncomePerShare)}</p>
        <p>Operating Cash Flow Per Share: ${formatter.format(recentMetrics.operatingCashFlowPerShare)}</p>
        <p>Cash Per Share: ${formatter.format(recentMetrics.cashPerShare)}</p>
        <p>Tangible Book Value Per Share ${formatter.format(recentMetrics.tangibleBookValuePerShare)}</p>
        <p>Price to Earnings Ratio: ${formatter.format(recentMetrics.peRatio)}</p>
        <p>Price to Book Ratio: ${formatter.format(recentMetrics.pbRatio)}</p>
        <p>Price to Sales Ratio: ${formatter.format(recentMetrics.priceToSalesRatio)}</p>
        <p>Enterprise Value to Sales Ratio: ${formatter.format(recentMetrics.evToSales)}</p>
        <p>Market Cap: ${formatter.format(recentMetrics.marketCap)}</p>
        <p>Debt to Equity Ratio: {formatter.format(recentMetrics.debtToEquity)}</p>
        <p>Debt to Assets Ratio: {formatter.format(recentMetrics.debtToAssets)}</p>
      </section>
    )
  }
}