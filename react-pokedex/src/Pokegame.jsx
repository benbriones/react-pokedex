import _ from "lodash"
import pokeData from "./pokemon";
import Pokedex from "./Pokedex";

function addExperience(pokes) {
    return pokes.reduce((acc, curr) => {
        acc += curr.base_experience
        return acc;
    }, 0);
}

function Pokegame({pokemon = pokeData}) {
    const shuffledPokemon = _.shuffle(pokemon);

    const hand1 = shuffledPokemon.slice(0,4);
    const hand2 = shuffledPokemon.slice(4);

    const hand1Exp = addExperience(hand1);
    const hand2Exp = addExperience(hand2);



    return (
        <div>
            <h2>Hand 1</h2>
            <Pokedex pokemon = {hand1} teamExp = {hand1Exp} isWinner = {hand1Exp > hand2Exp} />
            <h2>Hand 2</h2>
            <Pokedex pokemon = {hand2} teamExp = {hand2Exp} isWinner = {hand1Exp < hand2Exp} />
        </div>
    )
}

export default Pokegame;