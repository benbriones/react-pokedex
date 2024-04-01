/** Main component for Pokedex */

import Pokedex from "./Pokedex";
import pokeData from "./pokemon";


function App() {
    return (
        <div className="App">
            <h1>Pokedex</h1>
            <Pokedex />
        </div>
    );
}

export default App;