import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initial: 10,
    trade: 5,
    expectedProfit: 80,
    duration: 5,
  });

  const hasInput = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!hasInput ? (
        <p className="center">Enter a duration.</p>
      ) : (
        <Results input={userInput} />
      )}
    </>
  );
}

export default App;
