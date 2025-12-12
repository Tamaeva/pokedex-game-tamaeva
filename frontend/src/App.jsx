import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Landing from "./pages/Landing/LandingPage";
import StarterChoice from "./components/Starter/StarterChoice";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />

        {/* Page d'accueil - Choix du starter */}
        <Route path="/" element={<StarterChoice />} />
        <Route path="/starter" element={<StarterChoice />} />
      </Routes>
    </Layout>
  );
}

export default App;
