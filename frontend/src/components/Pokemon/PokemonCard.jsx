import { Card } from "react-bootstrap";
import "./PokemonCard.css";
import { getTypeColors } from "../../utils/typeColors";

function PokemonCard({ pokemon }) {
  const imageUrl = pokemon.sprites.front_default;
  console.log(pokemon);
  return (
    <Card className="h-100 pokemon-card ">
      <Card.Img claasName="card-img-top" src={imageUrl} />
      <Card.Body className="card-body text-center">
        <div>#{pokemon.pokedexId.toString().padStart(3, "0")}</div>
        <Card.Title className="fw-bold">{pokemon.name}</Card.Title>
        <div className="d-flex justify-content-center gap-2 mb-2">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className="type-pill type"
              style={{ background: getTypeColors(type) }}
            >
              {type}
            </span>
          ))}
        </div>
        <Card.Body className="">
          <p>Hp {pokemon.stats.hp}</p>
          <p>Atk {pokemon.stats.attack}</p>
          <p>Def {pokemon.stats.defense}</p>
          <p>SpA {pokemon.stats.spAtk}</p>
          <p>SpD {pokemon.stats.spDef}</p>
          <p>Speed {pokemon.stats.speed}</p>
        </Card.Body>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
