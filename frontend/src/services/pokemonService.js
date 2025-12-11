import Api from "./api";

const PokemonService = {
  getAllPokemon: async () => {
    const Response = Api.get("/pokemons/allPokemons");
    return Response.data.pokemons;
  },
  getPokemonById: async (Id) => {
    const Response = Api.get(`pokemons/${Id}`);
    return (await Response).data;
  },
  getRandomPokemon: async () => {
    const Response = Api.get("/pokemons/randomPokemon");
    return (await Response).data;
  },
  getPokemonsByType: async (Type) => {
    const Response = Api.get(`/pokemons/type/${Type}`);
    return (await Response).data;
  },
};

export default PokemonService;
