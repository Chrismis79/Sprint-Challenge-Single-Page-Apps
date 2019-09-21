import React, {useState} from "react";
import Header from "./components/Header.js";
import {Route, Link} from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";


export default function App() {
  const [people] = useState()
  return (
    <main>
      <Header />
      <div>
        <nav>
          <Link exact to="/">Home</Link>
          <Link exact to="/character-list">Characters</Link>
          <Link exact to ="/search-form">Search Characters</Link>
        </nav>

        <Route exact path="/" component={WelcomePage}/>
        <Route exact path="/character-list" render={props => (
          <CharacterList
          {...props}
          items={people} />
        )} />
        <Route exact path="/search-form" render={props => (
          <SearchForm/>
        )}/>

      </div>
      
    </main>
  );
}
