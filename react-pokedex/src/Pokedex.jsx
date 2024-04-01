import pokeData from "./pokemon";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex({ pokemon = pokeData }) {

    return (
        <div className="Pokedex">
            {pokemon.map(p => <div><Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} /></div>)}
        </div>
    );
}


export default Pokedex;