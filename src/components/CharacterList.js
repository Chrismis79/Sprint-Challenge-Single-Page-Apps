import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";
// import SearchForm from "./SearchForm";

function CharacterList(props) {


  // TODO: Add useState to track data from useEffect
   const [characters, setCharacters] = useState([props]);


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
        .then(response => {
          console.log("This is response", response);
          const chara = response.data.results;
          setCharacters(chara)
          console.log(chara);
        })
        .catch(err => console.log("There was a problem with requesting data.", err))
  }, []);

  return (
    <section className="character-list">
      {/* <SearchForm/> */}
      <div>
      {characters.map(item => {
        return <CharacterCard key={item.id} name={item.name} status={item.status} species={item.species}/>
      })}
      </div>
    </section>
  );
}

export default CharacterList;
