import React from "react";
import "./App.css";
import { Button } from "@rmwc/button";
import { Grid } from "@rmwc/grid";

import { GridCell } from "@rmwc/grid";
import { TextField } from "@rmwc/textfield";

import "@material/button/dist/mdc.button.css";
import "@material/layout-grid/dist/mdc.layout-grid.css";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";

function App() {
  return (
    <>
      <header className={"header"}>
        <span>Drunk finder</span>
        <Button>All</Button>
        <Button>Contacts</Button>
        <Button>Clauses</Button>
        {/*<Grid align={'right'} fixedColumnWidth={undefined}>*/}
        {/*  <GridCell span={2} align={'middle'}>Drunk finder</GridCell>*/}
        {/*  <GridCell span={1}><Button>Ideas</Button></GridCell>*/}
        {/*  <GridCell span={1}><Button>Plans</Button></GridCell>*/}
        {/*  <GridCell span={2}><Button>Clauses</Button></GridCell>*/}
        {/*  <GridCell span={2}><Button>Click</Button></GridCell>*/}
        {/*</Grid>*/}
      </header>
      <nav className={"navy_nav"}>
        <span className={"text_field"}>
          <TextField outlined placeholder="Enter your question" />
        </span>
        <Button>Search</Button>
        <Grid>
          <GridCell span={8}>
            <TextField fullwidth={true} placeholder="Enter your question" />
          </GridCell>
          <GridCell>
            <Button>Search</Button>
          </GridCell>
        </Grid>
      </nav>
      <nav>
        <Button>All</Button>
        <Button>Contacts</Button>
        <Button>Clauses</Button>
        <Button>Areas</Button>
      </nav>
    </>
  );
}

export default App;
