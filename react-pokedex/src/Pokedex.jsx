import pokeData from "./pokemon";
import Pokecard from "./Pokecard";
import "./Pokedex.css";


/**
 *
 * Pokedex display area
 * Parent: App
 * Children: Pokecard
 *
 */

function Pokedex({ pokemon = pokeData, teamExp, isWinner=false }) {

    return (
        <div className="Pokedex">
            <div>
                Team Exp = {teamExp}
            </div>
            {pokemon.map(p => <div><Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} /></div>)}
            <div>
                {isWinner ? "THIS HAND WINS!" : ""}
            </div>
        </div>
    );
}


export default Pokedex;