import React, {useState} from "react";
import Header from "./components/Header.js";
import {Router, Route, Link} from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";


export default function App() {
  const [people] = useState()
  return (
    <main>
      <Header />
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/character-list">Characters</Link>
        </nav>

        <Route exact path="/" component={WelcomePage}/>
        <Route exact path="/character-list" render={props => (
          <CharacterList
          {...props}
          items={people} />

        )} />
      </div>
      
    </main>
  );
}
