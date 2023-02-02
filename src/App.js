import { lazy, Suspense, useState } from "react";
import AnimatedNumbers from "react-animated-numbers";

import { AppContext } from "./context/Provider";
// import Actions from "./components/Actions";
// import Counter from "./components/Counter";
// import Toast from "./components/Toast";
import NewApp from "./containers/NewApp";
import ItemsList from "./containers/ItemsList";
// import TodoList from "./containers/TodoList";
import RoutingNumber from "./components/RoutingNumber/index";
// import isMobileDeviceDetect from "./utils/deviceDetect";
// import { fullDate } from "./utils/dateFormat";
import { sum } from "app-18-demo/src/components/Button/index";
import RouteApp from "./RouteApp";
import "./App.css";

// const Greed = lazy(() =>
//   import(/* webpackChunkName: "Greed" */ "./containers/Greed")
// );

const ToastContainer = lazy(() =>
  import(/* webpackChunkName: "ToastContainer" */ "./containers/ToastContainer")
);

function App() {
  const [num, setNum] = useState(3539.55);

  // const isMobile = isMobileDeviceDetect();
  sum(100, 200);

  const export2csv = async () => {
    // let data = "";
    // const tableData = [];
    // const rows = [
    //   ['111', '222', '333'],
    //   ['aaa', 'bbb', 'ccc'],
    //   ['AAA', 'BBB', 'CCC']
    // ];
    // for (const row of rows) {
    //   const rowData = [];
    //   for (const column of row) {
    //     rowData.push(column);
    //   }
    //   tableData.push(rowData.join(","));
    // }
    // data += tableData.join("\n");

    const data = await fetch(
      "https://tagb-data-staging.s3.amazonaws.com/reservations1669706171681.csv?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA54DFYIQ7MXV5OQ5J%2F20221129%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221129T071611Z&X-Amz-Expires=7200&X-Amz-Signature=2d68aa0213b57d151bf93eef1f8e7ac637cd7a9062e37da121230491e65735b4&X-Amz-SignedHeaders=host"
    );
    const data1 = await data.blob();

    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([data1], { type: "text/csv" }));

    // a.href = 'https://tagb-data-staging.s3.amazonaws.com/reservations1669706171681.csv?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA54DFYIQ7MXV5OQ5J%2F20221129%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221129T071611Z&X-Amz-Expires=7200&X-Amz-Signature=2d68aa0213b57d151bf93eef1f8e7ac637cd7a9062e37da121230491e65735b4&X-Amz-SignedHeaders=host';
    a.setAttribute("download", "data1as.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // if(true){
  //   return <ItemsList />
  // }

  return (
    <AppContext>
      <button onClick={export2csv}>Export array to csv file</button>

      <a
        download="SupportUs_user_import.csv"
        // target='_blank'
        href="https://tagb-data-staging.s3.amazonaws.com/reservations1669706171681.csv?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA54DFYIQ7MXV5OQ5J%2F20221129%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221129T071611Z&X-Amz-Expires=7200&X-Amz-Signature=2d68aa0213b57d151bf93eef1f8e7ac637cd7a9062e37da121230491e65735b4&X-Amz-SignedHeaders=host"
        rel="noreferrer"
        type="text/csv"
      >
        download CSV template
      </a>
      <br />
      <RouteApp />
      <div className="container">
      <AnimatedNumbers
        includeComma
        animateToNumber={num}
        fontStyle={{ fontSize: 40 }}
        configs={[
          { mass: 1, tension: 220, friction: 100 },
          { mass: 1, tension: 180, friction: 130 },
          { mass: 1, tension: 280, friction: 90 },
          { mass: 1, tension: 180, friction: 135 },
          { mass: 1, tension: 260, friction: 100 },
          { mass: 1, tension: 210, friction: 180 },
        ]}
      ></AnimatedNumbers>
      <div>
        <button onClick={() => setNum((state) => state + 31234)}>+</button>
        <button onClick={() => setNum((state) => state - 31234)}>-</button>
      </div>
    </div>
      <div>
        {/* <h1>{JSON.stringify({ isMobile })}</h1>
          <h1>{JSON.stringify({ fullDate })}</h1>
            <Toast />*/}
        {/* <Counter />
            <Actions />
            <TodoList /> */}
      </div>
      {/* <Suspense fallback={<div>Loading...</div>}>
            <Greed />
          </Suspense> */}
      {/*<NewApp />*/}
      <Suspense>
        <ToastContainer />
      </Suspense>
      <p>Commit-2</p>
      <p>Commit-3</p>
      <p>Commit-4</p>
      <p>finale</p>
    </AppContext>
  );
}

export default App;
