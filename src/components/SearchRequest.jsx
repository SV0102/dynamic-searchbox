import React, { useState } from "react";
import "./App.css";

function SearchRequest({ renderedInfo1 }) {
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

export default SearchRequest;
