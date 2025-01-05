export default function UserInput({ onChange, userInput }) {
  let { initial, trade, expectedProfit, duration } = userInput;

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Starting Balance</label>
          <input
            name="initial"
            type="number"
            required
            value={initial}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </p>
        <p>
          <label>Trade Amount</label>
          <input
            name="trade"
            type="number"
            required
            value={trade}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Profit (%)</label>
          <input
            name="expectedProfit"
            type="number"
            required
            value={expectedProfit}
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
