import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Landing from "./pages/Landing/LandingPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Layout>
  );
}

export default App;
