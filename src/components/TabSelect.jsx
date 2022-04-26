import React from "react";

import { Tab, TabBar } from "@rmwc/tabs";
import { Grid, GridCell } from "@rmwc/grid";

import "./App.css";

import "@material/layout-grid/dist/mdc.layout-grid.css";

import "@material/tab-bar/dist/mdc.tab-bar.css";
import "@material/tab/dist/mdc.tab.css";
import "@material/tab-scroller/dist/mdc.tab-scroller.css";
import "@material/tab-indicator/dist/mdc.tab-indicator.css";

function TabSelect(props) {
  const { tabs, setActiveTabIndex } = props;
  return (
    <>
      <Grid>
        <GridCell span={6}>
          <TabBar onActivate={(event) => setActiveTabIndex(event.detail.index)}>
            {tabs.map((tab) => (
              <Tab key={tab}>{tab}</Tab>
            ))}
          </TabBar>
        </GridCell>
        <GridCell></GridCell>
      </Grid>
    </>
  );
}

export default TabSelect;
