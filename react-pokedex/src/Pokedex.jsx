import pokeData from "./pokemon";
import Pokecard from "./Pokecard";

function Pokedex({ pokemon = pokeData }) {

    return (
        <div>
            <ul>
                {pokemon.map(p => <li><Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} /></li>)}
            </ul>
        </div>
    );
}


export default Pokedex;