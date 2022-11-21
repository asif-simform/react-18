import { useState, useCallback } from "react";

import AnimatedNumber from "../components/AnimatedNumber";

const random = (max, min) => Math.floor(Math.random() * (max - min)) + min;

export const AnimatedNumbersContainer = () => {
  const [number, setNumber] = useState(random(0, 10));
  const [hasComma] = useState(true);
  const [size] = useState(28);
  const [duration] = useState(200);
  const [order] = useState("asc");

  const increaseNumber = useCallback(() => {
    setNumber((number) => number + random(0, 10));
  }, []);

  const decreaseNumber = useCallback(() => {
    setNumber((number) => number - random(0, 10));
  }, []);

  return (
    <div>
      <AnimatedNumber
        value={number}
        hasComma={hasComma}
        size={size}
        duration={duration}
        order={order}
      />
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      </div>
      <div>
        <button onClick={increaseNumber}>Increase</button>
        <button onClick={decreaseNumber}>Decrease</button>
      </div>
    </div>
  );
};
