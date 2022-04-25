import React, { useState } from "react";
import "./App.css";

import { Grid } from "@rmwc/grid";
import { GridCell } from "@rmwc/grid";
import { Slider } from "@rmwc/slider";
import { Select } from "@rmwc/select";
import "@material/slider/dist/mdc.slider.css";
import { TextField } from "@rmwc/textfield";

import "@material/select/dist/mdc.select.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";
import "@material/list/dist/mdc.list.css";
import "@material/menu/dist/mdc.menu.css";
import "@material/menu-surface/dist/mdc.menu-surface.css";

import "@material/layout-grid/dist/mdc.layout-grid.css";

import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";
import { Button } from "@rmwc/button";

function SearchRequest({renderedInfo1}) {
  return (
    <ul>
      {renderedInfo1.length === 0 ? (
        <>
          <li>Here will be some applied filters</li>
          <li>-------------------------</li>
          <li>Results</li>
        </>
      ) : (
        <>
          Search criteria:
          {renderedInfo1.map((element) => (
            <li key={element}>{element}</li>
          ))}
        </>
      )}
    </ul>
  );
}

function MainArea(props) {
  const { tabs, activeTabIndex, searchRequest } = props;
  const [regionChoice, setRegionChoice] = useState(undefined);
  const [cityChoice, setCityChoice] = useState(undefined);
  const [streetChoice, setStreetChoice] = useState(undefined);
  const [streetChoiceTrans, setStreetChoiceTrans] = useState(undefined);
  const [beerAmount, setBeerAmount] = useState(undefined);
  let renderedObject = {
    request: searchRequest,
    region: regionChoice,
    city: cityChoice,
    street: streetChoiceTrans,
    beer_quantity: beerAmount,
  }
  let renderedInfo = [renderedObject.request, renderedObject.region,
    renderedObject.city, renderedObject.street, renderedObject.beer_quantity];
  let renderedInfo1 = renderedInfo.filter(
    (element) => element !== undefined && element.length !== 0
  );

  function clearFilters(){
    setRegionChoice(undefined);
    setCityChoice(undefined);
    setStreetChoice(undefined);
    setStreetChoiceTrans(undefined);
  }

  function saveRequest() {
    let resultedText;
    if (renderedInfo1 === undefined || renderedInfo1.length !== 0){
      resultedText =
        renderedInfo1
          .map((element) => element)
          .toString()
          .replace(/,/g, "\n");}
    else{
      resultedText = "Empty request"
    }
    // console.log(this.state.items.length);
    let blob = new Blob([resultedText], { type: "text/plain;charset=utf-8" });
    const element = document.createElement("a");
    element.href = URL.createObjectURL(blob);
    element.download = `Search_request.txt`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  function requestDemonstration(){
    return JSON.stringify(renderedObject, undefined, "\n")
  }

  return (
    <>
      <Grid>
        <GridCell span={3} className={"filtersMarkUp"}>
          <p className={"filters"}>Filters ({tabs[activeTabIndex]})</p>
          <Select
            onChange={(evt) => setRegionChoice(evt.detail.value)}
            enhanced
            options={[
              "Prague",
              "Brno",
              "Olomouc",
            ]}
            placeholder={"Choose region"}
            style={{ margin: 10, width: "35rem" }}
          />
          <Select
            enhanced
            options={["city1", "city2", "city3"]}
            placeholder={"Choose city"}
            onChange={(evt) => setCityChoice(evt.detail.value)}
          />
          <br />
          <TextField placeholder={"Enter the street"}
          onChange={evt => setStreetChoice(evt.target.value)}
          onKeyPress={evt => evt.key === 'Enter'?
          setStreetChoiceTrans(streetChoice) : setStreetChoiceTrans(undefined)}
          />
          <br />
          <br/>
          How much beer would you like to have?
          <Slider discrete min={1} max={5} step={1}
          onChange={element => setBeerAmount(element.target.value)}/>
          <br/>
          <Button>I want more than five beer</Button>
          <br/>
          <Button onClick={() => clearFilters()}>Clear filters</Button>
        </GridCell>
        <GridCell span={8}>
          <main>
            <SearchRequest
              renderedInfo1={renderedInfo1}
            />
            <Button
              onClick={() => {
                console.log(JSON.stringify(renderedObject, undefined, "\n"));
              }
            }
            >Push the search request</Button>
            <br/>
            <Button
              onClick={() => {
                saveRequest()
                alert('Search request was sent')
              }
            }
            >Save the search request</Button>
          </main>
        </GridCell>
      </Grid>
    </>
  );
}

export default MainArea;
