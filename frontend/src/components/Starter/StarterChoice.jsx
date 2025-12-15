import { Row, Col, Container, Spinner, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import StarterCard from "./StarterCard";
import StarterProfile from "./StarterProfile";
import "./StarterChoice.css";
import pokemonService from "../../services/pokemonService";

function StarterChoice() {
  // Données des 3 starters
  const [starters, setStarters] = useState(null);
  const [selectedStarter, setSelectedStarter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    loadStarters();
  }, []);

  const loadStarters = async () => {
    try {
      setLoading(true);
      setErrors(null);
      const data = [
        await pokemonService.getPokemonById(1),
        await pokemonService.getPokemonById(4),
        await pokemonService.getPokemonById(7),
      ];
      setStarters(data);
    } catch (error) {
      console.error(error.message);
      setErrors(
        "Impossible de charger les starters. Erreur Serveur : " + error.message
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" role="status"></Spinner>
        <p className="mt-3">Chargement du starter...</p>
      </Container>
    );
  }

  if (errors) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="danger">
          <Alert.Heading>Erreur</Alert.Heading>
          <p className="mt-3">{errors}</p>
          <button className="btn btn-secondary" onClick={() => loadStarters()}>
            Réessayer
          </button>
        </Alert>
      </Container>
    );
  }
  // Fonction appelée quand on clique sur un starter
  const handleSelectStarter = (starter) => {
    setSelectedStarter(starter);
  };
  return (
    <div className="starter-choice-page">
      <h2 className="d-flex justify-content-center text-decoration-underline pt-5">
        CHOIX DU STARTER
      </h2>
      <div className="trait"></div>
      <Container className="py-3 ">
        <Row className="justify-content-center g-0">
          {starters.map((starter) => (
            <Col xs={6} sm={6} md={4} key={starter.pokedexId}>
              <StarterCard pokemon={starter} onSelect={handleSelectStarter} />
            </Col>
          ))}
        </Row>
      </Container>
      <div className="trait"></div>
      {selectedStarter && (
        <StarterProfile starter={selectedStarter}></StarterProfile>
      )}
    </div>
  );
}

export default StarterChoice;
