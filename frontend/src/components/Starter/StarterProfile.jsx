import "./StarterProfile.css";
import { STARTER } from "../../utils/constant";

function StarterProfile({ starter }) {
  const img_source = starter.sprites.front_default;
  let colors;
  for (let i = 0; i < 3; i++) {
    if (STARTER[i].name == starter.name) {
      colors = STARTER[i].color;
    }
  }

  const colorsBorderBlock = colors.starterBorderBlock;
  const colorsBorderFill = colors.starterFillBlock;
  const colorsFillButton = colors.starterFillButton;

  console.log(starter);

  return (
    <div
      className="container-fluid d-flex rounded-3"
      style={{ background: colorsBorderBlock }}
    >
      <div
        className="container-fluid m-3 rounded-3"
        style={{ background: colorsBorderFill }}
      >
        <div className="d-flex flex-column align-items-center justify-content-center">
          <img src={img_source} alt={starter.name} className="img_pokemon" />
          <h1 className="brand-name ">{starter.name}</h1>
          <div className="fs-3 d-flex flex-column description-pokemon">
            <h2>Type : {starter.types.map((type) => type + " ")} </h2>
            <p className="">hp : {starter.stats.hp}</p>
            <p className="">attack : {starter.stats.attack}</p>
            <p className="">defense : {starter.stats.defense}</p>
            <p className="">spAtk : {starter.stats.spAtk}</p>
            <p className="">spDef : {starter.stats.spDef}</p>
            <p className="">speed : {starter.stats.speed}</p>
          </div>
          <button className="m-3 w-25" style={{ background: colorsFillButton }}>
            Choisir ce starter
          </button>
        </div>
      </div>
    </div>
  );
}

export default StarterProfile;
