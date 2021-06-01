import React from "react";
import styled from "styled-components";

const Char = styled.div`
  padding: 0.25em 2em;
  margin: 1em auto;
  width: 33%;
  text-align: center;
  border: 4px solid orange;
  background-color: #debd9288;
`;

const Character = (props) => {
  const { char } = props;

  return (
    <Char>
      <h1>{char.name}</h1>
    </Char>
  );
};

export default Character;