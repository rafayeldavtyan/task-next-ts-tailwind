import React, { createContext, useState } from 'react';

interface AuthContextData {
  authorized: Boolean;
  setAuthorized: (data?: string) => void;
}
interface Props {
    children?: React.ReactNode;
};

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default function AuthContextProvider({ children }: Props) {
    // const token = localStorage.getItem('token');
    const [authorized, setAuthorized] = useState<boolean>(/*Boolean(token*/ false);

    const authorizationHandler = (token = 'asdgasgasdg') => {
        // localStorage.setItem('token', token);
        setAuthorized(true);
    }

    return (
        <AuthContext.Provider value={{ 
            authorized,
            setAuthorized: authorizationHandler,
        }}>
          {children}
        </AuthContext.Provider>
      );
};