import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VscLoading } from 'react-icons/vsc';
import { Bar } from 'react-chartjs-2';

export default function BalanceSheet({ ticker }) {
  let [balanceSheet, updateBalanceSheet] = useState('')
  let recentBalanceSheet = balanceSheet[0]

  const formatter = new Intl.NumberFormat('en-US', {
    styles: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  useEffect(() => {
    axios.get('/api/search/:ticker/balance-sheet', { params: { ticker: ticker } })
      .then(res => {
        updateBalanceSheet(res.data)
      })
      .catch(err => {
        alert(err)
      })
  }, [])

  if (!balanceSheet) {
    return (
      <>
        <VscLoading />
      </>
    )
  } else {
    const { cashAndCashEquivalents, cashAndShortTermInvestments, totalCurrentAssets, totalNonCurrentAssets, intangibleAssets, inventory, accountPayables, deferredRevenue, commonStock, shortTermDebt, longTermDebt, totalDebt, netDebt } = recentBalanceSheet
    const data = {
      labels: ['Cash & Equivalents', 'Total Current Assets', 'Total Non-Current Assets', 'Inventory', 'Account Payables', 'Short Term Debt', 'Long Term Debt', 'Total Debt'],
      datasets: [
        {
          data: [cashAndCashEquivalents, totalCurrentAssets, totalNonCurrentAssets, inventory, accountPayables, shortTermDebt, longTermDebt, totalDebt],
          backgroundColor: [
            '#53b18c'
          ],
          borderColor: [
            '#53b18c'
          ],
          borderWidth: 2,
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


    const quarters = []
    balanceSheet.forEach((quarter, index) => {
      quarters.push(
        <option key={index}>
          {quarter.fillingDate.slice(0, 4) + ' ' + quarter.period}
        </option>
      )
    })
    return (
      <>
        <section>
          <select>
            {quarters}
          </select>
        </section>
        <section className="m-4 flex flex-row py-5 filter drop-shadow-lg shadow-lg">
          <section className="filter drop-shadow-lg shadow-lg w-1/4 flex flex-col justify-center items-center place-content-around space-y-5 ">
            <h1 className="text-3xl">Balance Sheet</h1>
            <ul className="flex flex-col justify-center items-center place-content-around space-y-6">
              <li>Cash and Cash equivalents: ${formatter.format(cashAndCashEquivalents)}</li>
              <li>Cash and Short Term Investments: ${formatter.format(cashAndShortTermInvestments)}</li>
              <li>Total Current Assets: ${formatter.format(totalCurrentAssets)}</li>
              <li>Total Non-Current Assets: ${formatter.format(totalNonCurrentAssets)}</li>
              <li>Intangible Assets: ${formatter.format(intangibleAssets)}</li>
              <li>Inventory: {formatter.format(inventory)}</li>
              <li>Account payable: ${formatter.format(accountPayables)}</li>
              <li>Tax payables: ${formatter.format(deferredRevenue)}</li>
              <li>Common Stock: {formatter.format(commonStock)}</li>
              <li>Short Term Debt: ${formatter.format(shortTermDebt)}</li>
              <li>Long Term Debt: ${formatter.format(longTermDebt)}</li>
              <li>Total Debt: ${formatter.format(totalDebt)}</li>
              <li>Net Debt: ${formatter.format(netDebt)}</li>
            </ul>
          </section>
          <section className="w-3/4 ">
            <Bar data={data} options={options} height={700} />
          </section>
        </section>
      </>
    )
  }
}
