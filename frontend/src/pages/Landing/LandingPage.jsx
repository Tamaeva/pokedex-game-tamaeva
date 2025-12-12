import ProfesseurIcon from "../../assets/Ressources/ProfesseurChen";
import "./Landing.css";

function Landing() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center d-block">
      <ProfesseurIcon class="Image"></ProfesseurIcon>
      <div className="textBox">
        <p>
          Bonjour ! Ravi de te rencontrer ! Bienvenue dans le monde des Pokémon
          ! Je m’appelle Chen. Les gens m’appellent affectueusement le
          Professeur Pokémon. Ce monde… est habité de toutes parts par des
          créatures appelées Pokémon.
        </p>
        <p>
          Pour certains, les Pokémon sont des animaux de compagnie. D’autres les
          utilisent pour combattre. Quant à moi… j’étudie les Pokémon comme
          profession.
        </p>
        <p>
          Il y a 3 Pokémon ici ! Haha ! Ils sont dans ces Poké Balls. Quand
          j’étais jeune, j’étais un dresseur sérieux ! À mon âge, il ne m’en
          reste que 3, mais tu peux en prendre un ! Choisis !
        </p>
      </div>
      <h2 className="choixStarter">CHOIX DU STARTER</h2>
    </div>
  );
}

export default Landing;
