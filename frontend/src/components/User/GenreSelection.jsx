import "./GenreSelection.css";
import Red from "../../assets/Ressources/Red.svg";
import Leaf from "../../assets/Ressources/Leaf.svg";
import { THEME_COLORS } from "../../utils/constant";
import { Card, Container, Col, Row } from "react-bootstrap";
import { useState } from "react";
import SignIn from "./SignIn";

function GenreSelection(starter) {
  const leafUrl = Leaf;
  const redUrl = Red;

  const [selectedGenre, setSelectedGenre] = useState(null);
  return (
    <div className="container">
      <div className="container flex-column d-flex justify-content-left dialogBox">
        <p>Oh ! tu as choisi {starter.selected} ? Excellent choix !</p>
        <p>
          Ce Pokémon est courageux et fidèle, il saura t’accompagner dans ton
          aventure !
        </p>
        <p>
          Mais d’ailleurs, excuse mes mauvaises manières, tu es un garçon ou une
          fille ?
        </p>
      </div>
      <div className="mt-3 trait"></div>
      <Container className="pb-0">
        <Row className="g-0">
          <Col
            xs={6}
            sm={6}
            md={6}
            key={1}
            className={`genre-col ${
              selectedGenre === "fille" ? "selected" : ""
            } ${selectedGenre === "garçon" ? "hidden" : ""}`}
          >
            <Card
              className="h-100"
              style={{ background: THEME_COLORS.genreFillGreen }}
              onClick={() => setSelectedGenre("fille")}
            >
              <Card.Img
                className={`h-100 p-5 genre-card ${
                  selectedGenre === "fille" ? "selected" : ""
                } `}
                src={leafUrl}
              />
            </Card>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={6}
            key={2}
            className={`genre-col ${
              selectedGenre === "garçon" ? "selected" : ""
            } ${selectedGenre === "fille" ? "hidden" : ""}`}
          >
            <Card
              className="h-100"
              style={{ background: THEME_COLORS.genreFillRed }}
              onClick={() => setSelectedGenre("garçon")}
            >
              <Card.Img
                className={`h-100 p-5 genre-card ${
                  selectedGenre === "garçon" ? "selected" : ""
                } `}
                src={redUrl}
              />
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="trait"></div>
      {selectedGenre && (
        <SignIn starter={starter} genre={selectedGenre}></SignIn>
      )}
    </div>
  );
}

export default GenreSelection;
