export const API_BASE_URL = "http://localhost:5000/api";

export const POKEMON_TYPE = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

export const THEME_COLORS = {
  primary: "#1E1E1E",
  secondary: "#FFFFFF",
  fontColorBlock: "#000000",
  navBar: "#D13838",
  blockFill: "#F7E4E4",
  blockBorder: "#AC7373",
  starterBorderBlockGreen: "#207538",
  starterFillBlockGreen: "#299447",
  starterFillButtonGreen: "#3ED869",
  starterBorderBlockRed: "#752020",
  starterFillBlockRed: "#942929",
  starterFillButtonRed: "#D83E3E",
  starterBorderBlockBlue: "#202075",
  starterFillBlockBlue: "#452994",
  starterFillButtonBlue: "#643ED8",
  genreFillGreen: "#D6F0E8",
  genreFillRed: "#F0D6D6",
  searchBarFill: "#D9D9D9",
  searchBarBorder: "#5A5A5A",
  pokemonBox: "#D9D9D9",
};

export const STARTER = [
  {
    id: 1,
    name: "bulbasaur",
    type: ["grass", "poison"],
    description: "Un Pokémon Plante mystérieux avec une graine sur le dos",
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    color: {
      starterBorderBlock: "#207538",
      starterFillBlock: "#299447",
      starterFillButton: "#3ED869",
    },
  },
  {
    id: 4,
    name: "charmander",
    type: "fire",
    description: "La flamme sur sa queue indique sa santé et son humeur",
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",

    color: {
      starterBorderBlock: "#752020",
      starterFillBlock: "#942929",
      starterFillButton: "#D83E3E",
    },
  },
  {
    id: 7,
    name: "squirtle",
    type: "Eau",
    description: "Sa carapace le protège des attaques ennemies",
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    color: {
      starterBorderBlock: "#202075",
      starterFillBlock: "#452994",
      starterFillButton: "#643ED8",
    },
  },
];
