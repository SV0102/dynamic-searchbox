import React from "react";
import { Button } from "@rmwc/button";
import "./App.css";
import "@material/button/dist/mdc.button.css";

function Header() {
  return <header className={"header"}>
    <span>Drunk finder</span>
    <Button>All</Button>
    <Button>Contacts</Button>
    <Button>Clauses</Button>
  </header>
  }

export default Header;