import React from "react";
import "./components/App.css";

import { Button } from "@rmwc/button";
import { TextField } from "@rmwc/textfield";
import { TabBar } from "@rmwc/tabs";
import { Tab } from "@rmwc/tabs";
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

import "@material/button/dist/mdc.button.css";

import "@material/layout-grid/dist/mdc.layout-grid.css";

import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";

import "@material/tab-bar/dist/mdc.tab-bar.css";
import "@material/tab/dist/mdc.tab.css";
import "@material/tab-scroller/dist/mdc.tab-scroller.css";
import "@material/tab-indicator/dist/mdc.tab-indicator.css";

function App() {
  return (
    <>
      <header className={"header"}>
        <span>Drunk finder</span>
        <Button>All</Button>
        <Button>Contacts</Button>
        <Button>Clauses</Button>
      </header>
      <nav className={"navy_nav"}>
        <TextField
          placeholder="Enter your question"
          style={{
            width: "35rem",
            background: "white",
            margin: 15,
          }}
        />
        <Button raised>Search</Button>
      </nav>
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
  );
}

export default App;
