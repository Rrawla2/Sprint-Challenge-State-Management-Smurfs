import React, { useState, useContext } from "react";
import axios from "axios";
import { SmurfContext } from "../context/SmurfContext";

const SmurfForm = () => {
    const {addSmurf,setAddSmurf}=useContext(SmurfContext)
    const [smurfForm, setSmurfForm] = useState({
    name: "",
    age: "",
    height: ""
  });
  
  const handleChange= event =>{
    event.preventDefault();
    setSmurfForm({...smurfForm, [event.target.name]:event.target.value})
  }

  const handleSubmit= event =>{
    event.preventDefault();
    axios
      .post("//localhost:3333/smurfs" , smurfForm)
      .then(response =>{
        setSmurfForm({
            name: "",
            age: "",
            height: ""
        })
        setAddSmurf(response.data)
        console.log(response)
      })
   }
  
  return (
    <form className="card" onSubmit={handleSubmit}>
       <input
            type="text"
            name="name"
            placeholder="add Smurf Name"
            value={smurfForm.name}
            onChange={handleChange}
        />
        <input
            type="text"
            name="age"
            placeholder="add Age"
            value={smurfForm.age}
            onChange={handleChange}
        />

        <input
            type="text"
            name="height"
            placeholder="add Height in cm"
            value={smurfForm.height}
            onChange={handleChange}
        />  

      <button type="submit">Add New Smurf!</button>
    </form>
  );
};

export default SmurfForm;