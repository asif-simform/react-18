import { AppContext } from "./context/Provider";
import Actions from "./components/Actions";
import Counter from "./components/Counter";

import logo from "./logo.svg";

import "./App.css";

function App() {

  return (
    <>
      <AppContext>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Counter />
            <Actions />
          </header>
        </div>
      </AppContext>
    </>
  );
}

export default App;
