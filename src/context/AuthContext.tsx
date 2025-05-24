import { createContext, useContext, useState, ReactNode } from "react";
import { ACCESS_CODE, STORAGE_KEY } from "../constants/auth";

type AuthContextType = {
  isAuthed: boolean;
  login: (code: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthed, setIsAuthed] = useState(() => {
    const savedCode = localStorage.getItem(STORAGE_KEY);
    return savedCode === ACCESS_CODE;
  });

  const login = (code: string) => {
    if (code === ACCESS_CODE) {
      localStorage.setItem(STORAGE_KEY, code);
      setIsAuthed(true);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthed, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
