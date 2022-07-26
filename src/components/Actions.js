import React, { memo } from "react";
import { useMyContext } from "../hooks/useAppContext";

const Actions = memo(() => {
  const store = useMyContext();
  const { count : { incriment, decriment } } = store;

  return (
    <div>
      <button onClick={() => incriment()}>Incriment</button>
      <br />
      <button onClick={() => decriment()}>Decriment</button>
    </div>
  );
});

export default Actions;
