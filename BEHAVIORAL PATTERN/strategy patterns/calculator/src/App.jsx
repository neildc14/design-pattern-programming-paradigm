import "./App.css";
import { useState } from "react";
import {
  Strategy,
  Addition,
  Subtraction,
  Multiplication,
  Division,
} from "./utils/operators";

function App() {
  const multiKeyArr = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    ["C", 0, ","],
  ];

  const [input, setInput] = useState("");

  const handleNumberClick = (e) => {
    setInput(input + e.target.value);

    if (e.target.value.localeCompare("C") === 0) {
      setInput("");
    }
  };

  const performAddition = () => {
    const strategy = new Strategy();
    const addition = new Addition();
    strategy.setStrategy(addition);
    setInput(strategy.operator(input));
  };

  const performSubtraction = () => {
    const strategy = new Strategy();
    const subtraction = new Subtraction();
    strategy.setStrategy(subtraction);
    setInput(strategy.operator(input));
  };

  const performMultiplication = () => {
    const strategy = new Strategy();
    const multiplication = new Multiplication();
    strategy.setStrategy(multiplication);
    setInput(strategy.operator(input));
  };

  const performDivision = () => {
    const strategy = new Strategy();
    const division = new Division();
    strategy.setStrategy(division);
    setInput(strategy.operator(input));
  };

  const solveEquation = () => {
    setInput(eval(input));
  };

  return (
    <div className="App">
      <div>
        <h2 className="number__screen">{input}</h2>
        <div className="buttons">
          <div className="numbers">
            {multiKeyArr.map((key_arr, i) => (
              <div className="row" key={i}>
                {key_arr.map((key) => (
                  <input
                    type="button"
                    value={key}
                    key={key}
                    onClick={handleNumberClick}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="operator">
            <button onClick={performDivision}>/</button>
            <button onClick={performMultiplication}>*</button>
            <button onClick={performSubtraction}>-</button>
            <button onClick={performAddition}>+</button>
            <button onClick={solveEquation}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
