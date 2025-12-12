import "./Footer.css";

function Footer() {
  return (
    <footer className="text-light py-4 mt-5 customFooter">
      <div className="container text-center customFooter">
        <p>
          © 2025 <strong>Pokédex Game</strong> by Tamaeva
        </p>
        <p className="small customFooter">
          Données via <a href="https://pokeapi.co">PokéAPI</a> • Pokémon ©
          Non-affilié avec Nintendo
        </p>
      </div>
    </footer>
  );
}

export default Footer;
