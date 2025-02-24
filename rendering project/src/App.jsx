import { useState } from "react";
import "./App.css";
import logo from "./assets/th.jpeg";

function App() {
  const [login, setLogin] = useState(true);

  function sign_up(){
    setLogin(!login)  
  }

  return (
    <div id="Container">
      <div id="user">
        <img src={logo} alt="" />
        <input
          hidden={login}
          type="text"
          name=""
          placeholder="Mobile Number or Email"
          id=""
        />
        <input
          hidden={login}
          type="text"
          name=""
          placeholder="Full Name"
          id=""
        />
        <input
          type="email"
          name=""
          id=""
          placeholder="Phone number, username, or email"
        />
        <input type="text" name="" id="" placeholder="Password" />
        <button>{login ? "Sign in" : "Sign up"}</button>
        {/* <div id="footer">
          {login ? "Don't have account?" : "have an account?"}{" "}
          <span onClick={loginSwitch}>{login ? "Sign up" : "Log in"}</span>
        </div> */}
        <div id="footer">
          {login ? "create account" : "have an account"} {""} 
          <span onClick={sign_up}>{login? "sign up" : "log in"}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
