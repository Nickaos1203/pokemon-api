const apiUrl = "https://pokeapi.co/api/v2/pokemon/"
const outputPokemon = document.getElementById("detail-pokemon");

const displayResult = (data) => {
    outputPokemon.textContent = JSON.stringify(data, null, 2);
}

// refresh page
const refreshPage = document.getElementById("detail-pokemon").value = "";

// Permettre de chercher un pokémon via son nom
const getPokemonByName = async() => {
        const namePokemon = prompt("add the name of a pokemon :");
        if(namePokemon) {
            try {
                const response = await fetch(apiUrl + namePokemon);
                const data = await response.json();
                displayResult(data); 
            } catch(error) {
                displayResult({ error: `Erreur lors de la récupération du pokémon ${namePokemon}`});
            }
        }
}

// Permettre de chercher un pokémon via son numéro de pokédex national (son id)

const getPokemonById = async() => {
    const idPokemon = prompt("add the ID of a pokemon :");
    if(idPokemon) {
        try {
            const response = await fetch(apiUrl + idPokemon);
            const data = await response.json();
            displayResult(data); 
        } catch(error) {
            displayResult({ error: `Erreur lors de la récupération du pokémon avec l'ID ${idPokemon}`});
        }
    }
}


document.getElementById("search-pokemon").addEventListener("click", getPokemonByName);
document.getElementById("id-pokemon").addEventListener("click", getPokemonById);