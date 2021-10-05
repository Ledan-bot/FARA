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
      <section >
        <h3>Balance Sheet</h3>
        <p>Cash and Cash equivalents: ${formatter.format(recentBalanceSheet.cashAndCashEquivalents)}</p>
        <p>Cash and Short Term Investments: ${formatter.format(recentBalanceSheet.cashAndShortTermInvestments)}</p>
        <p>Total Current Assets: ${formatter.format(recentBalanceSheet.totalCurrentAssets)}</p>
        <p>Total Non-Current Assets: ${formatter.format(recentBalanceSheet.totalNonCurrentAssets)}</p>
        <p>Intangible Assets: ${formatter.format(recentBalanceSheet.intangibleAssets)}</p>
        <p>Inventory: {formatter.format(recentBalanceSheet.inventory)}</p>
        <p>Account Payable: ${formatter.format(recentBalanceSheet.accountPayables)}</p>
        <p>Tax Payables: ${formatter.format(recentBalanceSheet.deferredRevenue)}</p>
        <p>Common Stock: {formatter.format(recentBalanceSheet.commonStock)}</p>
        <p>Short Term Debt: ${formatter.format(recentBalanceSheet.shortTermDebt)}</p>
        <p>Long Term Debt: ${formatter.format(recentBalanceSheet.longTermDebt)}</p>
        <p>Total Debt: ${formatter.format(recentBalanceSheet.totalDebt)}</p>
        <p>Net Debt: ${formatter.format(recentBalanceSheet.netDebt)}</p>
      </section>
    )
  }
}