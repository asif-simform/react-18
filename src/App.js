import {
  lazy,
  Suspense,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import AnimatedNumbers from "react-animated-numbers";
import { clearInterval, setInterval } from "worker-timers";

import { AppContext } from "./context/Provider";
// import Actions from "./components/Actions";
// import Counter from "./components/Counter";
// import Toast from "./components/Toast";
// import NewApp from "./containers/NewApp";
// import ItemsList from "./containers/ItemsList";
// import TodoList from "./containers/TodoList";
// import RoutingNumber from "./components/RoutingNumber/index";
// import isMobileDeviceDetect from "./utils/deviceDetect";
// import { fullDate } from "./utils/dateFormat";
// import { sum } from "app-18-demo/src/components/Button/index";
import RouteApp from "./RouteApp";
import "./App.css";
import axios from "axios";

// const Greed = lazy(() =>
//   import(/* webpackChunkName: "Greed" */ "./containers/Greed")
// );

const ToastContainer = lazy(() =>
  import(/* webpackChunkName: "ToastContainer" */ "./containers/ToastContainer")
);

function App() {
  const [num, setNum] = useState(3539.55);
  const [, setAppVisibility] = useState(false);
  const [count, setCount] = useState(0);
  const interval = useRef(null);

  const clearIntervalTimer = useCallback(() => {
    console.log(`0007 clearIntervalTimer Called`);

    if (interval.current) {
      console.log(`0007 clearIntervalTimer Called inside if con`);
      try {
        // NOTE: this is not window.clearTimeout, this is from the worker-timers package
        // worker-timers version can throw if the id is invalid
        clearInterval(interval.current);
        interval.current = null;
      } catch (e) {
        // ignore
        console.log(`clearInterval error :: ${e}`);
      }
    }
  }, []);

  useEffect(() => {
    const callback = () => {
      setCount((count) => {
        console.log(`Count is :: ${count + 1}`);
        return count + 1;
      });
    };

    interval.current = setInterval(callback, 1000);

    return () => {
      clearIntervalTimer();
    };
  }, []);

  // const isMobile = isMobileDeviceDetect();
  // sum(100, 200);

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

  const callAPI = () => {
    const url = "http://localhost:8888/api.harboursquare/V1/rider/route_runs";

    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log("response", response?.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error?.response?.data);
      });
  };

  const onVisibilityChange = useCallback(() => {
    if (document.hidden) {
      setAppVisibility(true);
    } else {
      setAppVisibility(false);
    }
    console.log(`App Visibility Changed :: ${document.hidden}`);
  }, [setAppVisibility]);

  useEffect(() => {
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [onVisibilityChange]);

  return (
    <AppContext>
      <button onClick={export2csv}>Export array to csv file</button>
      <br />
      <br />
      <a
        download="SupportUs_user_import.csv"
        // target='_blank'
        href="https://tagb-data-staging.s3.amazonaws.com/reservations1669706171681.csv?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA54DFYIQ7MXV5OQ5J%2F20221129%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221129T071611Z&X-Amz-Expires=7200&X-Amz-Signature=2d68aa0213b57d151bf93eef1f8e7ac637cd7a9062e37da121230491e65735b4&X-Amz-SignedHeaders=host"
        rel="noreferrer"
        type="text/csv"
      >
        Download CSV template
      </a>
      <br />
      <br />
      <br />
      <RouteApp />
      <div
        className="container"
        style={{
          display: "none",
        }}
      >
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

      <button onClick={callAPI}>Call API</button>

      <hr />

      <h1>Timer</h1>

      <div
        style={{
          textAlign: "center",
          fontSize: "60px",
        }}
      >
        <h5>{count}</h5>

        <button onClick={clearIntervalTimer}>clearIntervalTimer</button>
      </div>
    </AppContext>
  );
}

export default App;
