import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verificar se o usuário está autenticado
  const checkAuth = async () => {
    try {
      const token = await AsyncStorage.getItem('token'); 
      if (token) {
          setIsAuthenticated(true); 
      } else {
          setIsAuthenticated(false);
      }
  } catch (error) {
      console.error("Erro ao verificar autenticação:", error);
      setIsAuthenticated(false);
  }
  };

  const login = async (token) => {
    await AsyncStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await AsyncStorage.clear();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, checkAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
