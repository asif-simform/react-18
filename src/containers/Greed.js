import React, { useMemo } from "react";
import "./Greed.css";

const GREEDS = Array(45).fill("");

function* chunks(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

function Greed() {
  const greedsList = useMemo(() => {
    return [...chunks(GREEDS, 9)];
  }, [GREEDS]);

  console.log(greedsList);

  return (
    <div className="wrapper">
      <table border="1" align="center" cellPadding="10" >
        {greedsList.map((items) => {
          return (
            <tr>
              {items.map((item) => {
                return <td class="column">{item}</td>;
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Greed;
