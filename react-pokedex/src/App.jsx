/** Main component for Pokedex */

import Pokegame from "./Pokegame";
import pokeData from "./pokemon";
import "./App.css"


/**
 * Main component for Pokedex
 * Children: Pokegame
 */

function App() {
    return (
        <div className="App">
            <h1>Pokegame</h1>
            <Pokegame />
        </div>
    );
}

export default App;