import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";

import AuthService from "../../services/authService";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

function LogIn() {
  const { login } = useAuth();

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!username | !password) {
      setError("Tous les champs sont requis.");
      return;
    }

    try {
      await login(username, password);
      navigate("/profile", { state: username });
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response?.data?.message || "Erreur lors de l'inscription";
      setError(errorMessage);
    } finally {
      console.log("connexion en cours");
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <h1 className="text-decoration-underline">LOG IN </h1>

      <div className="dialogBox w-75">
        <Form
          className="d-flex flex-column justify-content-center align-items-center"
          onSubmit={handleSubmit}
        >
          {error && (
            <Alert
              variant="danger"
              className="w-75"
              dismissible
              onClose={() => setError("")}
            >
              {error}
            </Alert>
          )}
          <Form.Group className="mb-3 w-75 d-flex flex-row align-items-center">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre pseudo"
              value={username}
              className=""
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 w-75 d-flex flex-row align-items-center ">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Entrez votre mot de passe"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            type="submit"
            style={{
              background: "var(--buttonFill)",
              border: "2px solid var(--buttonBorder)",
              color: "var(--buttonTextColor)",
            }}
          >
            Confirm
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default LogIn;
