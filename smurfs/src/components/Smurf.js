import React, { useContext } from "react";
import axios from "axios";
import { SmurfContext } from "../context/SmurfContext";

const Smurf = ({ smurf }) => {
  const { addSmurf, setAddSmurf } = useContext(SmurfContext);
  const handleDelete = id => {
    axios.delete(`//localhost:3333/smurfs/${id}`)
      .then(response => setAddSmurf(addSmurf.filter(smurf=> smurf.id !== id)))
  };
  return (
    <div className="card">
      <div className="row">
        <div className="column">
          <p>{smurf.name}</p>
          <p>{smurf.age}</p>
          <p>{smurf.height}</p>
      <button onClick={() => handleDelete(smurf.id)}>Delete this Smurf!</button>
        </div>
      </div>
    </div>
  );
};

export default Smurf;