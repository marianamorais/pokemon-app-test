const pokemonList = [
    "Bulbasaur",
    "Butterfree",
    "Pidgey",
    "Vulpix"
]

const addPokemon = (n1, n2) => n1 + n2;

const findPokemon = name => {
    try {
        validation(name)
        const pokemonFounded = pokemonList.find(pokemon => pokemon === name)
        return pokemonFounded ? pokemonFounded : 'Pokemon not founded'
    } catch (error) {
        return error
    }
}

const validation = name => {
    if (!name) throw 'Name is required'
    if (typeof name !== 'string') throw 'Invalid type'
}

module.exports = {
    addPokemon,
    findPokemon
};