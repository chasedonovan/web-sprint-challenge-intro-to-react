
// export default App;
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Charater from "./components/Character";
import styled from "styled-components"

const Headr = styled.h1`
  font-size: 56px;
  `;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  console.log(characters);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // sync up with, if any.

  return (
    <div className="App">
      <Headr className="Header">Characters</Headr>
      {characters.map((char, i) => {
        return <Charater key={i} char={char} />;
      })}
    </div>
  );
}

export default App;

