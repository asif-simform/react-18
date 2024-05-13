import {
  lazy,
  Suspense,
  // useState,
  // useCallback,
  // useEffect,
  // useRef,
} from "react";
// import AnimatedNumbers from "react-animated-numbers";
// import { clearInterval, setInterval } from "worker-timers";

import { AppContext } from "./context/Provider";
// import Actions from "./components/Actions";
// import Counter from "./components/Counter";
// import Toast from "./components/Toast";
// import NewApp from "./containers/NewApp";
// import {Graphs} from "./containers/Graphs";
import ImageUplaod from "./containers/ImageUplaod";
// import ItemsList from "./containers/ItemsList";
// import TodoList from "./containers/TodoList";
// import RoutingNumber from "./components/RoutingNumber/index";
// import isMobileDeviceDetect from "./utils/deviceDetect";
// import { fullDate } from "./utils/dateFormat";
// import { sum } from "app-18-demo/src/components/Button/index";
// import RouteApp from "./RouteApp";
import "./App.css";

// const Greed = lazy(() =>
//   import(/* webpackChunkName: "Greed" */ "./containers/Greed")
// );

const ToastContainer = lazy(() =>
  import(/* webpackChunkName: "ToastContainer" */ "./containers/ToastContainer")
);

function App() {
  // const [num, setNum] = useState(3539.55);
  // const [, setAppVisibility] = useState(false);
  // const [count, setCount] = useState(0);
  // const interval = useRef(null);

  // const clearIntervalTimer = useCallback(() => {
  //   console.log(`0007 clearIntervalTimer Called`);

  //   if (interval.current) {
  //     console.log(`0007 clearIntervalTimer Called inside if con`);
  //     try {
  //       // NOTE: this is not window.clearTimeout, this is from the worker-timers package
  //       // worker-timers version can throw if the id is invalid
  //       clearInterval(interval.current);
  //       interval.current = null;
  //     } catch (e) {
  //       // ignore
  //       console.log(`clearInterval error :: ${e}`);
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   const callback = () => {
  //     setCount((count) => {
  //       console.log(`Count is :: ${count + 1}`);
  //       return count + 1;
  //     });
  //   };

  //   interval.current = setInterval(callback, 1000);

  //   return () => {
  //     clearIntervalTimer();
  //   };
  // }, []);

  // sum(100, 200);

  // if(true){
  //   return <ItemsList />
  // }

  // const onVisibilityChange = useCallback(() => {
  //   if (document.hidden) {
  //     setAppVisibility(true);
  //   } else {
  //     setAppVisibility(false);
  //   }
  //   console.log(`App Visibility Changed :: ${document.hidden}`);
  // }, [setAppVisibility]);

  // useEffect(() => {
  //   document.addEventListener("visibilitychange", onVisibilityChange);
  //   return () => {
  //     document.removeEventListener("visibilitychange", onVisibilityChange);
  //   };
  // }, [onVisibilityChange]);

  return (
    <AppContext>
     {
      //  <RouteApp />
      // <div
      //   className="container"
      //   style={{
      //     display: "none",
      //   }}
      // >
      //   <AnimatedNumbers
      //     includeComma
      //     animateToNumber={num}
      //     fontStyle={{ fontSize: 40 }}
      //     configs={[
      //       { mass: 1, tension: 220, friction: 100 },
      //       { mass: 1, tension: 180, friction: 130 },
      //       { mass: 1, tension: 280, friction: 90 },
      //       { mass: 1, tension: 180, friction: 135 },
      //       { mass: 1, tension: 260, friction: 100 },
      //       { mass: 1, tension: 210, friction: 180 },
      //     ]}
      //   ></AnimatedNumbers>
      //   <div>
      //     <button onClick={() => setNum((state) => state + 31234)}>+</button>
      //     <button onClick={() => setNum((state) => state - 31234)}>-</button>
      //   </div>
      // </div>
    }
      <ImageUplaod />
      <div>
        {/* 
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
      <hr />
     {/** <md-outlined-button>Back</md-outlined-button>
      <br />
      <br />
      <md-filled-button>Next</md-filled-button>
      <br />
        <br /> **/}
      {/** 
        <div
        style={{
          textAlign: "center",
          fontSize: "60px",
        }}
      >
        <h5>{count}</h5>
        <button onClick={clearIntervalTimer}>clearIntervalTimer</button>
      </div> 
    
   <Graphs />
  */}
    <span>Version: 1.0.1</span>
    </AppContext>
  );
}

export default App;
