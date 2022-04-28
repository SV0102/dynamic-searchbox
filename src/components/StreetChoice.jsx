import React, { useState } from "react";
import "./App.css";

import {TextField} from "@rmwc/textfield";
import "@material/textfield/dist/mdc.textfield.css";



function StreetChoice({setStreetChoiceTrans}){
  const [street, setStreet] = useState(undefined);

  return <TextField
    placeholder={"Enter the street"}
    onChange={(evt) => setStreet(evt.target.value)}
    onKeyPress={(evt) =>
      evt.key === "Enter"
        ? setStreetChoiceTrans(street)
        : setStreetChoiceTrans(undefined)
    }
  />
}

export default StreetChoice;
