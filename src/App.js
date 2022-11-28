import { lazy, Suspense } from "react";
import { AppContext } from "./context/Provider";
// import Actions from "./components/Actions";
// import Counter from "./components/Counter";
// import Toast from "./components/Toast";
import NewApp from "./containers/NewApp";
// import TodoList from "./containers/TodoList";
import RoutingNumber from "./components/RoutingNumber/index";
// import isMobileDeviceDetect from "./utils/deviceDetect";
// import { fullDate } from "./utils/dateFormat";
import { sum } from 'app-18-demo/src/components/Button/index'
import RouteApp from './RouteApp'
import "./App.css";

// const Greed = lazy(() =>
//   import(/* webpackChunkName: "Greed" */ "./containers/Greed")
// );

const ToastContainer = lazy(() =>
  import(/* webpackChunkName: "ToastContainer" */ "./containers/ToastContainer")
);

function App() {
  // const isMobile = isMobileDeviceDetect();
  sum(100,200);
  
  return (
    <AppContext>
    <RouteApp />
      <div className="container">
        <RoutingNumber />
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
        <NewApp />
      <Suspense>
        <ToastContainer />
      </Suspense>
    </AppContext>
  );
}

export default App;
