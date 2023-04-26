import "./App.css";
import axios from "axios";

import React, { useEffect, useState } from "react";
import FreeBoard from "./components/FreeBoard";

function App() {
  const [myresult, setMyresult] = useState("");
  const [resText, setResText] = useState("없음");
  useEffect(() => {
    axios
      .get(`http://localhost:10000${myresult}`)
      .then((result) => setResText(result.data));
  }, [myresult]);
  return (
    <div className="App">
      <FreeBoard/>
      <h1>Test</h1>
      <h2>{myresult}</h2>
      <h2>통신결과 {resText}</h2>
      <button onClick={ ()=>{setMyresult("/")} }>/경로</button>
      <button onClick={ ()=>{setMyresult("/json")} }>/json경로</button>
    </div>
  );
}

export default App;
