import React from "react";
import "./App.css";

import { Grid } from "@rmwc/grid";
import { GridCell } from "@rmwc/grid";

import { Select } from "@rmwc/select";

import "@material/select/dist/mdc.select.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";
import "@material/list/dist/mdc.list.css";
import "@material/menu/dist/mdc.menu.css";
import "@material/menu-surface/dist/mdc.menu-surface.css";

import "@material/layout-grid/dist/mdc.layout-grid.css";

function MainArea() {
  return<>
    <Grid>
      <GridCell span={3}>
        <p className={"filters"}>Filters(All)</p>
        <Select
          enhanced
          options={["Europe", "Asia", "North America", "South America",
            "Australia"]}
          placeholder={"Choose region"}
          style={{ margin: "10px" }}
        />
        <Select
          enhanced
          options={["country1", "country2", "country3"]}
          placeholder={"Choose country"}
        />
        <Select
          enhanced
          options={["region1", "region2", "region3"]}
          placeholder={"Choose region"}
          style={{ margin: "10px" }}
        />
        <Select
          enhanced
          options={["city1", "city2", "city3"]}
          placeholder={"Choose city"}
          style={{ margin: "10px" }}
        />
        <br />
      </GridCell>
      <GridCell span={8}>
        <main>
          Here will be some applied filters
          <br />
          -------------------------
          <br />
          Results
        </main>
      </GridCell>
    </Grid>
  </>
}

export default MainArea;


