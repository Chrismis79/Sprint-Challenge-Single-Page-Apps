import React from "react";

export default function CharacterCard(props) {
  return (
  <div>
    <p>{props.name}</p>
    <p>{props.name} is curently {props.status} and is of the {props.species} species.</p>
  </div>
   );
}
