import SignInForm from "./SignInForm";

function SignIn(data) {
  const starterName = data.starter.selected;
  const genreName = data.genre;
  console.log(data);
  return (
    <div className="container">
      <div className="container dialogBox ">
        <p>
          Bien, vous êtes donc {genreName === "fille" ? "une" : "un"}{" "}
          {genreName} et vous avez pris comme starter {starterName}.
        </p>
        <p>Comment vous appelez-vous ?</p>
      </div>
      <div className="mt-3 trait"></div>

      <div className="container"></div>
      <SignInForm starter={starterName} genre={genreName}></SignInForm>
    </div>
  );
}

export default SignIn;
