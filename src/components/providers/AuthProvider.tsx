import { api } from "@/api";
import { User } from "@/types/user";
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

type AuthContextType = {
  user: User | null | undefined;
  setUser: (user: User | null) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  setUser: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    getInitialUser();
  }, []);

  async function getInitialUser() {
    setUser(await api.auth.getUser());
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser: (user: User | null) => setUser(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
