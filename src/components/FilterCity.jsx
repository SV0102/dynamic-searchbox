import {Select} from "@rmwc/select";
import React, { useState } from "react";
import "./App.css";

import "@material/select/dist/mdc.select.css";


function FilterCity({setCityChoice}){
  return <Select
    enhanced
    options={["city1", "city2", "city3"]}
    placeholder={"Choose city"}
    onChange={(evt) => setCityChoice(evt.detail.value)}
  />
}

export default FilterCity;

