// This function expects a JS object as an argument
// The object should contain the following properties
// - startingBalance: The starting balance available for trading
// - tradeAmount: The amount traded in each transaction
// - expectedProfitPercent: The expected profit percentage per trade
// - duration: The trading duration in years

export function calculateTradingResults({
  startingBalance,
  tradeAmount,
  expectedProfitPercent,
  duration,
}) {
  const annualData = [];
  let balance = startingBalance;

  for (let year = 0; year < duration; year++) {
    const profitPerTrade = (tradeAmount * expectedProfitPercent) / 100;
    const tradesPerYear = Math.floor(balance / tradeAmount); // how many trades can be made with the current balance
    const totalProfit = tradesPerYear * profitPerTrade;

    balance += totalProfit; // update balance after profit

    annualData.push({
      year: year + 1,
      tradesMade: tradesPerYear,
      profit: totalProfit,
      balanceEndOfYear: balance,
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
