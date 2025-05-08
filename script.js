async function searchPokemon() {
    const input = document.getElementById("pokemonInput").value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${input}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      document.getElementById("pokemonImage").src = data.sprites.front_default;
      document.getElementById("pokemonName").textContent = data.name.toUpperCase();
      document.getElementById("pokemonNumber").textContent = `#${data.id}`;
      document.getElementById("pokemonType").textContent =
        "Tipo: " + data.types.map(t => t.type.name).join(", ");
    } catch (error) {
      alert("Pokémon não encontrado!");
    }
  }
  