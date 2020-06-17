const should = require('should');
const findPokemons = require('../findPokemons');

describe('find pokemons', () => {

    it('add pokemons', () => {
        findPokemons.addPokemon(2, 3).should.be.equal(5)
    })

    it('must add 2 pokemon and return 30', () => {
        findPokemons.addPokemon(10, 20).should.be.equal(30)
    })

    it('Add a name to the list and must return a message saying not founded', () => {
        findPokemons.findPokemon('Pikachu').should.be.equal('Pokemon not founded')
    })

    it('Message that name is required', () => {
        findPokemons.findPokemon().should.be.equal('Name is required')
    })

    it('Message that the type is invalid', () => {
        findPokemons.findPokemon(123).should.be.equal('Invalid type')
    })

    it('Return a name of the list', () => {
        findPokemons.findPokemon('Bulbasaur').should.be.equal('Bulbasaur')
    })
})