import React, { useState, useEffect } from "react";



export default function SearchForm(props) {
  console.log("this is from searchform", props)
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect((props) => {
    const results = props.results.name.filter(character => 
      character.toLowerCase().includes(searchTerm));
      setSearchResults(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 
  return (
    <section className="search-form">
     <form>
       <label htmlFor="name">Search: </label>
       <input id="id"
              type="text"
              name="textfield"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange} />
     </form>
     <div>
       <ul>
         {searchResults.map(character => (
           <li>{character}</li>
         ))}
       </ul>
     </div>
    </section>
  );
}
