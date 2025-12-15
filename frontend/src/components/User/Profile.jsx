import { useAuth } from "../../context/AuthContext";
import { Button, Image } from "react-bootstrap";

import Red from "../../assets/Ressources/Red.svg";
import Leaf from "../../assets/Ressources/Leaf.svg";

function Profile() {
  const { user, logout, isAuthenticated } = useAuth();
  const leafUrl = Leaf;
  const redUrl = Red;

  if (!isAuthenticated) {
    return (
      <div>
        <h1>Vous êtes déconnecté ! </h1>
      </div>
    );
  }
  console.log(isAuthenticated, user);
  return (
    <div className="container mt-5 d-flex justify-content-center flex-column align-items-center">
      <div
        className=" container d-flex flex-column align-items-start rounded-5 w-50"
        style={{ background: "var(--profileFillBox)" }}
      >
        <div className="container d-flex ">
          <div
            className="container w-25 m-3 rounded-2 p-3 d-flex justify-content-center"
            style={{ background: "var(--avatarFillBox" }}
          >
            <Image src={`${user.genre === "garçon" ? redUrl : leafUrl}`} />
          </div>

          <div className="container">
            <h1>{user.username} Profile</h1>
            <p className="fs-1">Starter : {user.starter}</p>
          </div>
        </div>
        <p className="fs-3">WinRate : 0%</p>
        <p className="fs-3">Nombre de Combat Total : 0</p>
        <p className="fs-3">Équipe actuel : </p>
      </div>
      <div className="container mt-3 d-flex justify-content-center">
        <Button
          style={{
            background: "var(--buttonFill)",
            border: "2px solid var(--buttonBorder)",
            color: "var(--buttonTextColor)",
          }}
          onClick={logout}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
}

export default Profile;
