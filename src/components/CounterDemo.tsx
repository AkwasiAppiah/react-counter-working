import { useState } from "react";

function CounterDemo(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState(0);

  const handleAddOne = () => {
    queueRerenderWithNewCounterValue(previousValue => previousValue + 1);
  };
  
  const handleSubOne = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender - 1);
  };

  const handleAddFive = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 5);
  };
  
  const handleSubFive = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender - 5);
  };

  const handleReset = () => {
    // TODO reset counter to 0 here
    const reset = 0
    queueRerenderWithNewCounterValue(reset)
  }

  return (
    <>
      <h1>Counter Demo</h1>
      <p>Current value: {counterValueFromCurrentRender}</p>
      <button onClick={handleAddOne}>+1</button>
      <button onClick={handleSubOne}>-1</button>
      <button onClick={handleAddFive}>+5</button>
      <button onClick={handleSubFive}>-5</button>
      <hr />
      <button onClick={handleReset}>Reset counter</button>
    </>
  );
}

export default CounterDemo;
