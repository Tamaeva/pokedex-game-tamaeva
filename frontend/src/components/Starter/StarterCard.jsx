import { Card, Button } from "react-bootstrap";
import "./StarterCard.css";
import pokeball from "../../assets/Ressources/pokeball.svg";

function StarterCard({ pokemon, onSelect }) {
  const imageUrl = pokeball;
  return (
    <Card className="h-100 starter-card " onClick={() => onSelect(pokemon)}>
      <Card.Img className="card-img-top" src={imageUrl} />

      <Card.Body className="card-body text-center">
        <div>#{pokemon.pokedexId.toString().padStart(3, "0")}</div>

        <Card.Title className="card-title fw-bold">{pokemon.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default StarterCard;
