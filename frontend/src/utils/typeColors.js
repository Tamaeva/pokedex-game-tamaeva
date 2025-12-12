export const typeColors = {
  fighting: "#E63131", // Rose/Magenta
  psychic: "#F57C9C", // Rose clair
  poison: "#B76BA3", // Violet/Mauve
  dragon: "#1E90FF", // Bleu
  ghost: "#7B68B6", // Violet bleu
  dark: "#5A5A5A", // Gris foncé
  ground: "#D2854E", // Orange/Marron
  fire: "#FF7F27", // Orange vif
  fairy: "#FF69B4", // Rose/Magenta clair
  water: "#4DB8FF", // Bleu clair
  flying: "#87CEEB", // Bleu pâle
  normal: "#C0C0C0", // Gris clair
  rock: "#C9B37B", // Beige/Tan
  electric: "#FFD700", // Jaune
  bug: "#98D822", // Vert lime
  grass: "#78C850", // Vert
  ice: "#98D8D8", // Cyan clair
  steel: "#608594", // Bleu gris
};

export const getTypeColors = (type) => {
  return typeColors[type.toLowerCase()] || "#777";
};
