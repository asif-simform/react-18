import { lazy, Suspense } from "react";
import { AppContext } from "./context/Provider";
// import Actions from "./components/Actions";
// import Counter from "./components/Counter";
import Toast from "./components/Toast";
import NewApp from './containers/NewApp';
// import TodoList from "./containers/TodoList";
import isMobileDeviceDetect from "./utils/deviceDetect";
import { fullDate } from "./utils/dateFormat";

import "./App.css";

// const Greed = lazy(() =>
//   import(/* webpackChunkName: "Greed" */ "./containers/Greed")
// );

const ToastContainer = lazy(() =>
  import(/* webpackChunkName: "ToastContainer" */ "./containers/ToastContainer")
);

function App() {
  const isMobile = isMobileDeviceDetect();
  console.log({ isMobile });
  console.log({ fullDate });

  return (
    <>
      <AppContext>
        <div className="App">
          <header className="App-header">
            Hey,
            <h1>{JSON.stringify({ isMobile })}</h1>
            <h1>{JSON.stringify({ fullDate })}</h1>
            <Toast />
            {/* <Counter />
            <Actions />
            <TodoList /> */}
          </header>
          {/* <Suspense fallback={<div>Loading...</div>}>
            <Greed />
          </Suspense> */}
          <NewApp />
        </div>
        <Suspense>
          <ToastContainer />
        </Suspense>
      </AppContext>
    </>
  );
}

export default App;
