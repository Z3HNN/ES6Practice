const firstNames = ['nataly', 'jess', 'lily', 'sevy']
firstNames.forEach((name) => console.log(name))

const loadPokemon = (id, cb) => {
    fetch(`https:/pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
          cb(data)
    })
}

loadPokemon(24, (pokemon) => {
    console.log(pokemon)
})