import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VscLoading } from 'react-icons/vsc';
import { Bar } from 'react-chartjs-2'

export default function KeyMetrics({ticker}) {
  let [metrics, updateMetrics] = useState('')
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
    const data = {
      labels: ['Revenue Per Share', 'Net Income Per Share', 'Cash Per Share', 'Price to Earnings Ratio', 'Price to Book Ratio', 'Price to Sales Ratio', 'Enterprise Value to Sales ratio'],
      datasets: [
        {
          label: 'Metrics',
          data: [recentMetrics.revenuePerShare, recentMetrics.netIncomePerShare, recentMetrics.cashPerShare, recentMetrics.peRatio, recentMetrics.pbRatio, recentMetrics.priceToSalesRatio, recentMetrics.evToSales],
          backgroundColor: [
            '#53b18c'
          ],
          borderColor: [
            '#53b18c'
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      maintainAspectRatio: false
    };
    return (
      <section className="m-4 flex flex-row py-5 filter drop-shadow-lg shadow-lg">
        <section className="filter drop-shadow-lg shadow-lg w-1/4 flex flex-col justify-center items-center place-content-around space-y-5 ">
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
          <Bar data={data} options={options} height={600}/>
        </section>
      </section>
    )
  }
}
