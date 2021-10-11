import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VscLoading } from 'react-icons/vsc';

export default function KeyMetrics({ticker}) {
  let [metrics, updateMetrics] = useState('')
  // let [ticker, updateTicker] = useState('MU')
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
      <section className="m-4 flex flex-row py-5">
        <section className="w-1/4 flex flex-col justify-center items-center place-content-around space-y-5 ">
          <h1 className="text-3xl">Key Metrics</h1>
          <ul className="flex flex-col justify-center items-center place-content-around space-y-6">
            <li>Revenue Per Share: ${formatter.format(recentMetrics.revenuePerShare)}</li>
            <li>Net Income Per Share: ${formatter.format(recentMetrics.netIncomePerShare)}</li>
            <li>Cash Per Share: ${formatter.format(recentMetrics.cashPerShare)}</li>
            <li>Operating Cash Flow Per Share: ${formatter.format(recentMetrics.operatingCashFlowPerShare)}</li>
            <li>Price to Earnings Ratio: ${formatter.format(recentMetrics.peRatio)}</li>
            <li>Price to Book Ratio: ${formatter.format(recentMetrics.pbRatio)}</li>
            <li>Price to Sales Ratio: ${formatter.format(recentMetrics.priceToSalesRatio)}</li>
            <li>Enterprise Value to Sales Ratio: ${formatter.format(recentMetrics.evToSales)}</li>
            <li>Market Cap: ${formatter.format(recentMetrics.marketCap)}</li>
            <li>Debt to Equity Ratio: {formatter.format(recentMetrics.debtToEquity)}</li>
            <li>Debt to Assets Ratio: {formatter.format(recentMetrics.debtToAssets)}</li>
          </ul>
        </section>
        <section className="w-3/4">

        </section>
      </section>
    )
  }
}
{/* <h3 className="text-gray-300">Key Metrics</h3>
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
<p className="text-gray-300">Debt to Assets Ratio: {formatter.format(recentMetrics.debtToAssets)}</p> */}