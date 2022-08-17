import { AppContext } from "./context/Provider";
// import Actions from "./components/Actions";
// import Counter from "./components/Counter";
import Toast from "./components/Toast";
import ToastContainer from "./containers/ToastContainer";
// import logo from "./logo.svg";
import  isMobileDeviceDetect from './utils/isMobileDeviceDetect'

import "./App.css";

function App() {
  const isMobile = isMobileDeviceDetect();
  console.log({ isMobile })

  return (
    <>
      <AppContext>
        <div className="App">
          <header className="App-header">
            <h1>{JSON.stringify({ isMobile })}</h1>
            <Toast />
            {/* <img src={logo} className="App-logo" alt="logo" />
            <Counter />
            <Actions /> */}
          </header>
        </div>
        <ToastContainer />
      </AppContext>
    </>
  );
}

export default App;
