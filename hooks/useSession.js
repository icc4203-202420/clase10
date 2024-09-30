import { useContext, createContext, useState } from 'react';

const AuthContext = createContext();

export const useSession = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const login = (email) => setSession({ email });
  const logout = () => setSession(null);

  return (
    <AuthContext.Provider value={{ login, logout, session }}>
      {children}
    </AuthContext.Provider>
  );
};
