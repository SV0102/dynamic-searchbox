import React,{useState} from "react";
import "./App.css";

import { Button } from "@rmwc/button";
import { TextField } from "@rmwc/textfield";


import "@material/button/dist/mdc.button.css";

import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";

function NavBar(props) {
  const[searchFieldVal, setSearchFieldVal] = useState();
  const {searchRequest, setSearchRequest} = props;
  // console.log(searchRequest);
  // function saveInfo() {
  //   setSearchRequest(searchFieldVal);
  // }

  return <>
      <nav className={"navy_nav"}>
      <TextField
        placeholder="Enter your question"
        style={{
          width: "35rem",
          background: "white",
          margin: 15,
        }}
        onKeyPress={event => {
          if (event.key === "Enter"){
            setSearchRequest(searchFieldVal)
          }
        }}
        onChange={(event) => setSearchFieldVal(event.target.value)}

      />
      <Button raised onClick={() => setSearchRequest(searchFieldVal)}>Search</Button>
    </nav>
    </>
}

export default NavBar;