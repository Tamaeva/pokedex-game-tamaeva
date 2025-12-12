import ProfesseurIcon from "./Landing Professor.svg";

export default function App() {
  return (
    <img
      src={ProfesseurIcon}
      alt="Professeur"
      width="700"
      height="700"
      style={{ position: "relative", zIndex: 1000 }}
    />
  );
}
