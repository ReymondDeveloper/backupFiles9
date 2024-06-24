import React, { useState } from "react"
import "./Sample.css" 

function Sample (){
  
  const [fruits,setFruits] = useState(["Apple","Strawberry","Mango","Orange"]);

  return(
    <div className="Fr">
        <h1>Fruits : {fruits} </h1>
    </div>
  );
}  
export default Sample