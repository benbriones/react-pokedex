/** Main component for Pokedex */

import Pokedex from "./Pokedex";
import pokeData from "./pokemon";
import "./App.css"


/**
 * Main component for Pokedex
 * Children: Pokedex
 */

function App() {
    return (
        <div className="App">
            <h1>Pokedex</h1>
            <Pokedex />
        </div>
    );
}

export default App;