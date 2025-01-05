// - initial: The starting balance available for trading
// - trade: The amount traded in each transaction
// - expectedProfit: The expected profit percentage per trade
// - duration: The trading duration in years
export function calculateTradingResults({
  initial,
  trade,
  expectedProfit,
  duration,
}) {
  const annualData = [];
  let balance = initial;

  for (let year = 0; year < duration; year++) {
    const profitPerTrade = (trade * expectedProfit) / 100;
    const tradesPerYear = Math.floor(balance / trade);
    const totalProfit = tradesPerYear * profitPerTrade;

    balance += totalProfit;

    annualData.push({
      year: year + 1,
      tradesMade: tradesPerYear,
      profit: totalProfit,
      balanceEndOfYear: balance,
    });
  }

  return annualData;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
