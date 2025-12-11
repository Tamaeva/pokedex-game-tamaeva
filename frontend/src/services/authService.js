import Api from "./api";

const AuthService = {
  register: async (Username, Password) => {
    const Response = Api.post("/users/register", {
      username: Username,
      password: Password,
    });
    return (await Response).data;
  },
  login: async (Username, Password) => {
    const Response = Api.post("/user/login", {
      username: Username,
      password: Password,
    });
    return (await Response).data;
  },
  logout: async () => {
    const Response = Api.post("/user/lout");
    return (await Response).data;
  },
};

export default AuthService;
