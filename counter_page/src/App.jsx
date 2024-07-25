import { useState } from "react";
import "./App.css";
import Btn from "./component/button.jsx";

function App() {
  const [count, setCount] = useState(0);
  const addValue = () => {
    setCount(count + 1);
  };
  const removeValue = () => {
    setCount(count - 1);
  };
  return (
    <div className="main_container">
      <span>{count}</span>
      <div className="button">
        <Btn params={addValue} name="increment" />
        <Btn params={removeValue} name="decrements" />
      </div>
    </div>
  );
}

export default App;
