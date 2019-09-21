import React, { useState, useEffect } from "react";
import axios from "axios";



export default function SearchForm() {
  
  const [chara, setChara] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    
    axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
        .then(response => {
          console.log("This is response from search form", response);
          const data = response.data.results;
          console.log("This is data from search", data);
          const results = data.filter(chara => 
            chara.name.toLowerCase().includes(query.toLowerCase())
            );
            setChara(results);
          // const chara = response.data.results;
          // setSearchResults(chara)
          // console.log(chara);
        })
        .catch(err => console.log("There was a problem with your search.", err))
  }, [query]);

  const handleChange = event => {
    setQuery(event.target.value);
  };
 
  return (
    <section className="search-form">
     <form>
       <label>Search: 
       <input person="person"
              type="text"
              name= "name"
              placeholder="Search"
              value={query}
              onChange={handleChange} />
              </label>
     </form>
     <div>
       <ul>
         {chara.map(character => {
           return (
            <li key={character.id}>{character.name}</li>
           )
         }
         )}  
         
       </ul>
     </div>
    </section>
  );
}
