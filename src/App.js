import { AppContext } from "./context/Provider";
// import Actions from "./components/Actions";
// import Counter from "./components/Counter";
// import Toast from "./components/Toast";
import ToastContainer from "./containers/ToastContainer";
// import TodoList from "./containers/TodoList";
import Greed from "./containers/Greed";
// import logo from "./logo.svg";
import isMobileDeviceDetect from "./utils/deviceDetect";

import "./App.css";

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
          <Greed />
        </div>
        <ToastContainer />
      </AppContext>
    </>
  );
}

export default App;
