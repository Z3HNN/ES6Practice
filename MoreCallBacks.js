const firstNames = ['aataly', 'jess', 'lily', 'devy']
firstNames.forEach((name) => console.log(name))

const loadPokemonData = (id, cb) => {
    fetch(`https:/pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
          cb(data)
    })
}

loadPokemonData(24, (pokemon) => {
    console.log(pokemon)
})