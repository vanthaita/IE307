// Tên: Tạ Văn Thái
// MSSV: 22521377
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextProps {
  email: string;
  password: string;
  isAuthenticated: boolean;
  login: (inputEmail: string, inputPassword: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (inputEmail: string, inputPassword: string): boolean => {
    const studentEmail = '22521377@gm.uit.edu.vn';
    const correctPassword = 'tavanthai';
    if (inputEmail === studentEmail && inputPassword === correctPassword) {
      setEmail(inputEmail);
      setPassword(inputPassword);
      setIsAuthenticated(true);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setEmail('');
    setPassword('');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ email, password, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
