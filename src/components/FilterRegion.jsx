import {Select} from "@rmwc/select";
import React, { useState } from "react";
import "./App.css";

import "@material/select/dist/mdc.select.css";

function FilterRegion({setRegionChoice}){
  return  <Select
    onChange={(evt) => setRegionChoice(evt.detail.value)}
    enhanced
    options={["Prague", "Brno", "Olomouc"]}
    placeholder={"Choose region"}
    style={{ margin: 10, width: "35rem" }}
  />
}

export default FilterRegion;
