import React, { createContext, useContext, useState } from "react";
import { UserProps } from "../global/models/user";

interface AuthContextData {
  user: UserProps | null;
  setUser: (user: UserProps | null) => void;
}

type Props = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserProps | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
