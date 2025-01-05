export default function UserInput({ onChange, userInput }) {
  let { startingBalance, tradeAmount, expectedProfitPercent, duration } =
    userInput;

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Starting Balance</label>
          <input
            name="startingBalance"
            type="number"
            required
            value={startingBalance}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </p>
        <p>
          <label>Trade Amount</label>
          <input
            name="tradeAmount"
            type="number"
            required
            value={tradeAmount}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Profit (%)</label>
          <input
            name="expectedProfitPercent"
            type="number"
            required
            value={expectedProfitPercent}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </p>
        <p>
          <label>Duration (Years)</label>
          <input
            name="duration"
            type="number"
            required
            value={duration}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
