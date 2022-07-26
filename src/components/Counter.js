import { useEffect, useState } from "react";
import { useMyContext } from "../hooks/useAppContext";

const Counter = () => {
  const store = useMyContext();
  const {
    count: { observable, counter, getCount },
  } = store;

  console.log({ store });

  const [state, setState] = useState(counter);

  useEffect(() => {
    observable.subscribe(handleChange);

    return () => {
      observable.unsubscribe(handleChange);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = () => {
    setState(getCount());
  };
  
  return (
    <div>
      <p>{state}</p>
      <br />
    </div>
  );
};

export default Counter;
