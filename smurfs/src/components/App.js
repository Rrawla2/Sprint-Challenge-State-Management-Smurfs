import React, { useState, useEffect } from "react";
import "./App.css";
import { SmurfContext } from "../context/SmurfContext";
import axios from "axios";
import SmurfList from "../components/SmurfList";
import SmurfForm from "../components/SmurfForm";

function App() {
  const [addSmurf, setAddSmurf] = useState([]);
  useEffect(() => {
    axios
      .get("//localhost:3333/smurfs")
      .then(response => {
        console.log(response);
        setAddSmurf(response.data);
      });
  },[]);
  return (
    <div className="App-header">
      <SmurfContext.Provider value={{ addSmurf, setAddSmurf }}>
      <h1>Smurfs!</h1>
        <SmurfForm/>  
        <SmurfList />
      </SmurfContext.Provider>
      
    </div>
  )
}

export default App;
