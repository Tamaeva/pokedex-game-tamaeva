import { Form, Button } from "react-bootstrap";
import { useState } from "react";

import AuthService from "../../services/authService";
import { useNavigate } from "react-router-dom";

function SignInForm(data) {
  const genre = data.genre;
  const starter = data.starter;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState(""); // Confirmation
  const [error, setError] = useState(""); // Message d'erreur
  const [loading, setLoading] = useState(false); // État de chargement

  const navigate = useNavigate(); // Hook de navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!username || !password || !confirmPassword) {
      setError("Tous les champs sont requis");
      return;
    }

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères");
      return;
    }
    if (username.length < 3 || username.length > 20) {
      setError("Le nom d'utilisateur doit contenir entre 3 et 20 caractères");
      return;
    }

    setLoading(true);

    try {
      const response = await AuthService.register(
        username,
        password,
        starter,
        genre
      );
      console.log("inscription réussie ", response);

      navigate("/profile", { state: { username, genre, starter } });
    } catch (error) {
      console.error(error);

      const errorMessage =
        error.response?.data?.message || "Erreur lors de l'inscription";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  console.log(data);
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center ">
      <div className=" text-decoration-underline">
        <h1>SIGN IN</h1>
      </div>

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
          {/* Password */}
          <Form.Group className="mb-3 w-75 d-flex flex-row align-items-center ">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Entrez votre mot de passe"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 w-75 d-flex flex-row align-items-center">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirmez votre mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={loading}
            />
          </Form.Group>
          <p>
            by creating an account you confirm your consent to the{" "}
            <a href="/terms">terms & conditions</a>{" "}
          </p>

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

export default SignInForm;
