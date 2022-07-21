import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  const onCallAPI = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      first_name: "hardik",
      last_name: "shakya",
      email: "JDsasa8008@mail.com",
      password: "Qwe@1234",
      phone_number: "+1 856-856-5897",
      profile_picture: "asdsfdffrfs",
      user_type: "Students",
      purpose_of_use: "created first user",
      device_token: "sdashdajsd233",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      // redirect: 'follow'
    };

    fetch(
      "http://876b-14-99-102-226.ngrok.io/api/v1/user/signup",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Helmet>
        <title> {"React 18 example app"}</title>
      </Helmet>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={onCallAPI}>Call API For check</button>
        </header>
      </div>
    </>
  );
}

export default App;
