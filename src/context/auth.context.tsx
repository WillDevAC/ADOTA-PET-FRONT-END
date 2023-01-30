import { createContext, useEffect, useState } from "react";

import { api } from "../services/api";

import { TUser } from "../@types/user.type";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type SignInCredentials = {
  username: string;
  password: string;
};

type AuthContextType = {
  authenticated: boolean;
  user: TUser | null;
  signIn: (data: SignInCredentials) => Promise<void>;
  Logout: () => void;
};

type AuthProviderProps = {
  children?: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<TUser | null>(null);
  const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();

  const userRecoveryInformations = async (userId: number) => {
    const response = await api.get(`/config/user/${userId}`);
    return response;
  };

  useEffect(() => {
    const token = localStorage.getItem("@auth.token");
    const userId = localStorage.getItem("@auth.user-id");

    if (token) {
      //token found user is authenticated.
      userRecoveryInformations(Number(userId)).then((response) => {
        setUser(response.data);
      });
      setAuthenticated(true);
    }
  }, []);

  async function signIn({ username, password }: SignInCredentials) {
    const response = await api.post("/api/auth/signin", {
      username,
      password,
    });

    if (response.status !== Number(200) || response.data.role !== "ROLE_USER") {
      throw new Error("email or password is incorrect");
    } else {
      localStorage.setItem("@auth.token", response.data.accessToken);
      localStorage.setItem("@auth.refresh-token", response.data.refreshToken);
      localStorage.setItem("@auth.user-id", response.data.id);

      setUser(response.data.user);
      setAuthenticated(true);
      navigate("/");
    }
  }

  async function Logout() {
    localStorage.removeItem("@auth.token");
    localStorage.removeItem("@auth.refresh-token");
    localStorage.removeItem("@auth.user-id");

    setUser(null);
    setAuthenticated(false);
    navigate("/");
    toast.warn('Você foi desconectado.')
  }	

  return (
    <AuthContext.Provider value={{ authenticated, signIn, user, Logout }}>
      {children}
    </AuthContext.Provider>
  );
}
