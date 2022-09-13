import { useState } from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className={classes.button}>
      <h1>{counter}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Counter;
