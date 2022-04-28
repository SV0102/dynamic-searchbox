import React, { useState } from "react";
import "./App.css";

import FilterRegion from "./FilterRegion";
import FilterCity from "./FilterCity";
import StreetChoice from "./StreetChoice";
import BeerSlider from "./BeerSlider";
import EnhancedMenu from "./EnhancedMenu";
import SearchRequest from "./SearchRequest";
import RequestButtons from "./RequestButtons";

import { Grid, GridCell } from "@rmwc/grid";
import { Button } from "@rmwc/button";

function MainArea(props) {
  const { tabs, activeTabIndex, searchRequest } = props;
  const [regionChoice, setRegionChoice] = useState(undefined);
  const [cityChoice, setCityChoice] = useState(undefined);
  const [streetChoice, setStreetChoice] = useState(undefined);
  const [streetChoiceTrans, setStreetChoiceTrans] = useState(undefined);
  const [beerAmount, setBeerAmount] = useState(undefined);
  const renderedObject = {
    request: searchRequest,
    region: regionChoice,
    city: cityChoice,
    street: streetChoiceTrans,
    beer_quantity: beerAmount,
  };
  const renderedInfo = [
    renderedObject.request,
    renderedObject.region,
    renderedObject.city,
    renderedObject.street,
    renderedObject.beer_quantity,
  ];
  let renderedInfo1 = renderedInfo.filter(
    (element) => element !== undefined && element.length !== 0
  );

  function clearFilters() {
    setRegionChoice(undefined);
    setCityChoice(undefined);
    setStreetChoice(undefined);
    setStreetChoiceTrans(undefined);
  }

  return (
    <>
      <Grid>
        <GridCell span={3} className={"filtersMarkUp"}>
          <p className={"filters"}>Filters ({tabs[activeTabIndex]})</p>
          <FilterRegion setRegionChoice={setRegionChoice}/>
          <FilterCity setCityChoice={setCityChoice}/>
          <StreetChoice setStreetChoiceTrans={setStreetChoiceTrans}/>
          <br/>
          How much beer would you like to have?
          <BeerSlider setBeerAmount={setBeerAmount}/>
          <EnhancedMenu />
          <Button onClick={() => clearFilters()}>Clear filters</Button>
        </GridCell>
        <GridCell span={8}>
          <main>
            <SearchRequest renderedInfo1={renderedInfo1} />
            Request buttons
            <br/>
            <RequestButtons renderedInfo1={renderedInfo1}
                            renderedObject={renderedObject}/>
          </main>
        </GridCell>
      </Grid>
    </>
  );
}

export default MainArea;
