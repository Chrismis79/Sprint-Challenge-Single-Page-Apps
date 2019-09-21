import React from "react";
import styled from "styled-components";

const CharaCardDiv = styled.div`
  border: 1px solid black;
  background: grey;
  width: 50%;
  color: white;
  margin: 1% 0
`;
const CharacterCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export default function CharacterCard(props) {
  return (
    <CharacterCardContainer> 
      <CharaCardDiv>
        <p>{props.name}</p>
        <p>{props.name} is curently {props.status} and is of the {props.species} species.</p>
      </CharaCardDiv>
    </CharacterCardContainer>
   );
}
