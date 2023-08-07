import { useState } from "react";
import "./App.css";
import Home from "./components/home";
import { Router, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </>
  );
}

export default App;
