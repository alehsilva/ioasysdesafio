import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from 'services/api';

interface User {
  name: string;
  email: string;
  birthdate: string;
  gender: string;
  id: string;
}

interface AuthContextData {
  user: User | null;
  signInUrl: string;
  signOut: () => void;
  setUser: any;
  tokenAuth: any;
}

interface AuthProvider {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: AuthProvider): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [tokenAuth, setTokenAuth] = useState<string | null>();

  const signInUrl = `/auth/sign-in`;

  function signOut(): void {
    setUser(null);
    localStorage.removeItem('aut.user');
  }

  useEffect(() => {
    const token = localStorage.getItem('aut.user');
    setTokenAuth(token);
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signInUrl, user, setUser, signOut, tokenAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
}
