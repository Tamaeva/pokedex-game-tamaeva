import { Form, Row, Col, Container, Spinner, Alert } from "react-bootstrap";
import pokemonService from "../../services/pokemonService";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

function Pokédex() {
  const [pokemons, setPokemons] = useState(null);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    try {
      setLoading(true);
      setErrors(null);

      const data = await pokemonService.getAllPokemon();
      setPokemons(data);
    } catch (error) {
      console.log(error);
      setErrors("Impossible de charger les pokémons du pokédex");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" role="status"></Spinner>
        <p className="mt-3">Chargement du pokemon...</p>
      </Container>
    );
  }
  if (errors) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="danger">
          <Alert.Heading>Erreur</Alert.Heading>
          <p className="mt-3">{errors}</p>
          <button className="btn btn-secondary" onClick={() => loadPokemons()}>
            Réessayer
          </button>
        </Alert>
      </Container>
    );
  }

  return (
    <div className="container">
      <div className="container">
        <Form.Control
          className="mt-3"
          type="search"
          placeholder="Rechercher un Pokémon"
        />

        <Row>
          {pokemons.map((pokemon) => (
            <Col xs={3} sm={3} md={2} key={pokemon.pokedexId} className="m-3">
              <PokemonCard pokemon={pokemon} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Pokédex;
