import React, { useState } from "react";
import "./App.css";
import { Slider } from "@rmwc/slider";
import "@material/slider/dist/mdc.slider.css";

function BeerSlider({ setBeerAmount }) {
  return (
    <Slider
      discrete
      min={1}
      max={5}
      step={1}
      onChange={(element) => setBeerAmount(element.target.value)}
    />
  );
}

export default BeerSlider;
