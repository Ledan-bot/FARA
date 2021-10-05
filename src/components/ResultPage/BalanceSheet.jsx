import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { VscLoading } from 'react-icons/vsc';

export default function BalanceSheet() {
  let [balanceSheet, updateBalanceSheet] = useState('')
  let [ticker, updateTicker] = useState('MU')
  let recentBalanceSheet = balanceSheet[0]

  const formatter = new Intl.NumberFormat('en-US', {
    styles: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  useEffect(() => {
    axios.get('/api/search/:ticker/balance-sheet', {params: {ticker: ticker}})
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
    return (
      <section className="m-4 w-60 bg-indigo-800 border-2 border-solid border-indigo-800 border-opacity-70 rounded">
        <h3 className="text-gray-300">Balance Sheet</h3>
        <p className="text-gray-300">Cash and Cash equivalents: ${formatter.format(recentBalanceSheet.cashAndCashEquivalents)}</p>
        <p className="text-gray-300">Cash and Short Term Investments: ${formatter.format(recentBalanceSheet.cashAndShortTermInvestments)}</p>
        <p className="text-gray-300">Total Current Assets: ${formatter.format(recentBalanceSheet.totalCurrentAssets)}</p>
        <p className="text-gray-300">Total Non-Current Assets: ${formatter.format(recentBalanceSheet.totalNonCurrentAssets)}</p>
        <p className="text-gray-300">Intangible Assets: ${formatter.format(recentBalanceSheet.intangibleAssets)}</p>
        <p className="text-gray-300">Inventory: {formatter.format(recentBalanceSheet.inventory)}</p>
        <p className="text-gray-300">Account Payable: ${formatter.format(recentBalanceSheet.accountPayables)}</p>
        <p className="text-gray-300">Tax Payables: ${formatter.format(recentBalanceSheet.deferredRevenue)}</p>
        <p className="text-gray-300">Common Stock: {formatter.format(recentBalanceSheet.commonStock)}</p>
        <p className="text-gray-300">Short Term Debt: ${formatter.format(recentBalanceSheet.shortTermDebt)}</p>
        <p className="text-gray-300">Long Term Debt: ${formatter.format(recentBalanceSheet.longTermDebt)}</p>
        <p className="text-gray-300">Total Debt: ${formatter.format(recentBalanceSheet.totalDebt)}</p>
        <p className="text-gray-300">Net Debt: ${formatter.format(recentBalanceSheet.netDebt)}</p>
      </section>
    )
  }
}