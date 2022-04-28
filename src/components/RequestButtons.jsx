import React, { useState } from "react";
import "./App.css";
import { Button } from "@rmwc/button";

function RequestButtons({ renderedInfo1, renderedObject }) {
  function saveRequest() {
    let resultedText;
    if (renderedInfo1 === undefined || renderedInfo1.length !== 0) {
      resultedText = renderedInfo1
        .map((element) => element)
        .toString()
        .replace(/,/g, "\n");
    } else {
      resultedText = "Empty request";
    }
    let blob = new Blob([resultedText], { type: "text/plain;charset=utf-8" });
    const element = document.createElement("a");
    element.href = URL.createObjectURL(blob);
    element.download = `Search_request.txt`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  return (
    <>
      <Button
        onClick={() => {
          console.log(JSON.stringify(renderedObject, undefined, "\n"));
        }}
      >
        Push the search request
      </Button>
      <br />
      <Button
        onClick={() => {
          saveRequest();
          alert("Search request was sent");
        }}
      >
        Save the search request
      </Button>
    </>
  );
}

export default RequestButtons;
