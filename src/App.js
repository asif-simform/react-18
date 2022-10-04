import { lazy, Suspense } from "react";
import { AppContext } from "./context/Provider";
// import Actions from "./components/Actions";
// import Counter from "./components/Counter";
// import Toast from "./components/Toast";
// import TodoList from "./containers/TodoList";
// import logo from "./logo.svg";
import isMobileDeviceDetect from "./utils/deviceDetect";

import "./App.css";

const Greed = lazy(() =>
  import(/* webpackChunkName: "Greed" */ "./containers/Greed")
);

const ToastContainer = lazy(() =>
  import(/* webpackChunkName: "ToastContainer" */ "./containers/ToastContainer")
);

function App() {
  const isMobile = isMobileDeviceDetect();
  console.log({ isMobile });

  return (
    <>
      <AppContext>
        <div className="App">
          <header className="App-header">
            Hey,
            <h1>{JSON.stringify({ isMobile })}</h1>
            {/* <Toast /> */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <Counter />
            <Actions /> */}
            {/* <TodoList /> */}
          </header>
          <Suspense fallback={<div>Loading...</div>}>
            <Greed />
          </Suspense>
        </div>
        <Suspense>
          <ToastContainer />
        </Suspense>
      </AppContext>
    </>
  );
}

export default App;
