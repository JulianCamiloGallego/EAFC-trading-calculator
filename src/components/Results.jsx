import { calculateTradingResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const resultsData = calculateTradingResults(input);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Balance End of Year</th>
          <th>Profit from Trades</th>
          <th>Total Profit</th>
          <th>Total Capital Invested</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalProfit = yearData.profit; // Profit made in that year
          const totalAmountInvested = input.tradeAmount * yearData.tradesMade;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.balanceEndOfYear)}</td>
              <td>{formatter.format(yearData.profit)}</td>
              <td>{formatter.format(totalProfit)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
