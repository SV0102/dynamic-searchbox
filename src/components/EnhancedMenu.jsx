import React, { useState } from "react";
import "./App.css";

import { MenuSurface, MenuSurfaceAnchor } from "rmwc";
import { TextField } from "@rmwc/textfield";
import { Button } from "@rmwc/button";
import {Select} from "@rmwc/select";
import "@material/select/dist/mdc.select.css";

import "@material/textfield/dist/mdc.textfield.css";
import "@material/button/dist/mdc.button.css";
import "@material/menu/dist/mdc.menu.css";
import "@material/menu-surface/dist/mdc.menu-surface.css";
import "@material/list/dist/mdc.list.css";

function EnhancedMenu(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MenuSurfaceAnchor>
        <MenuSurface open={isOpen} fixed={false}>
          <TextField placeholder={"Enter a reason, why?"} />
          <Select enhanced label={"Choose your age"}
                  options={["<18", "18<21", ">21"]}
          />
          <br />
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </MenuSurface>
        <Button raised onClick={() => setIsOpen(!isOpen)}>
          I need more than five beer
        </Button>
      </MenuSurfaceAnchor>
    </>
  );
}

export default EnhancedMenu;
