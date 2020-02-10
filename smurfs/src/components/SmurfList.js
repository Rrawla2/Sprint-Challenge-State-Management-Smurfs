import React, { useContext } from "react";
import { SmurfContext } from "../context/SmurfContext";
import  Smurf  from "../components/Smurf";

const SmurfList = () => {
  const { addSmurf } = useContext(SmurfContext);

  return (
    <div>
      {addSmurf.map(smurf => {
        console.log("smurf: ", smurf)
        return <Smurf key={smurf.id} smurf={smurf} />;
      })}
    </div>
  );
};

export default SmurfList;