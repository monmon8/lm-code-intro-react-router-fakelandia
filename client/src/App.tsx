import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Misdemeanour from "./components/Misdemeanour";
import Confessions from "./components/ Confessions";
import { NotFound } from "./components/Not_found";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        <Route path="confessions" element={<Confessions />} />
        <Route path="misdemeanour" element={<Misdemeanour />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
