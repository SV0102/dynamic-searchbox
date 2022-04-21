import React from "react";

import { TabBar } from "@rmwc/tabs";
import { Tab } from "@rmwc/tabs";
import { Grid } from "@rmwc/grid";
import { GridCell } from "@rmwc/grid";

import "./App.css";

import "@material/layout-grid/dist/mdc.layout-grid.css";

import "@material/tab-bar/dist/mdc.tab-bar.css";
import "@material/tab/dist/mdc.tab.css";
import "@material/tab-scroller/dist/mdc.tab-scroller.css";
import "@material/tab-indicator/dist/mdc.tab-indicator.css";

function TabSelect() {
  return <>
    <Grid>
      <GridCell span={6}>
        <TabBar>
          <Tab>All</Tab>
          <Tab>Contacts</Tab>
          <Tab>Clauses</Tab>
          <Tab>Areas</Tab>
        </TabBar>
      </GridCell>
      <GridCell></GridCell>
    </Grid>
  </>
}

export default TabSelect;