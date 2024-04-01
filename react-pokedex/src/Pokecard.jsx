/** Info about a pokemon */
import "./Pokecard.css"

const POKE_API_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

/**
 * Component for one pokecard
 * Parents: App > Pokedex
 * Children: None
 */
function Pokecard({id, name, type, base_experience}) {
    return (
        <div className="Pokecard">
            <h5 className="Pokecard-name">{name}</h5>
            <img src={`${POKE_API_URL}/${id}.png`} alt={`picture of ${name}`} />
            <p className="Pokecard-type">Type: {type}</p>
            <p className="Pokecard-exp">EXP: {base_experience}</p>
        </div>
    )
}

export default Pokecard;