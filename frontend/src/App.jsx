import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Landing from "./pages/Landing/LandingPage";
import LogIn from "./components/User/LogInForm";
import Profile from "./components/User/Profile";
import { AuthProvider } from "./context/AuthContext";
import Erreur404 from "./pages/Auth/Erreur404";
import Pokédex from "./components/Pokemon/Pokédex";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="pokedex" element={<Pokédex />} />
          <Route path="*" element={<Erreur404 />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
