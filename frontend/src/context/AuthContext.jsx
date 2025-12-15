import { createContext, useContext, useState, useEffect } from "react";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth doit être utilisé dans un AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    try {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        console.log("Utilisateur récupéré depuis localStorage:", parsedUser);
      } else {
        console.log("Aucun utilisateur connecté");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du user:", error);
      localStorage.removeItem("user");
    } finally {
      setLoading(false);
    }
  };

  const login = async (username, password) => {
    try {
      console.log("Tentative de connexion:", username);

      const data = await authService.login(username, password);

      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));

      console.log("Connexion réussie:", data.user);

      return { success: true, data };
    } catch (error) {
      console.error("Erreur connexion:", error);

      const errorMessage =
        error.response?.data?.message || "Erreur lors de la connexion";

      return {
        success: false,
        error: errorMessage,
      };
    }
  };

  const logout = async () => {
    try {
      console.log("Déconnexion...");

      await authService.logout();

      setUser(null);
      localStorage.removeItem("user");

      console.log("Déconnexion réussie");
      return { success: true };
    } catch (error) {
      console.error("Erreur déconnexion:", error);

      setUser(null);
      localStorage.removeItem("user");

      return { success: false, error: error.message };
    }
  };

  const value = {
    login,
    logout,
    checkAuth,
    user,
    isAuthenticated: !!user,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
