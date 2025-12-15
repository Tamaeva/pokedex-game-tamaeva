import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Layout.css";
function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100 min-vw-100 customBackground customText">
      <NavBar />

      <main className="flex-grow-1 " style={{ marginTop: "70px" }}>
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
