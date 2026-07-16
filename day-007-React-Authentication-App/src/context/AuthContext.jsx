import { createContext } from "react";

export const AuthDataContext = createContext(null);

export const AuthContext = ({ children }) => {
  const signup = (email, password, name, number) => {
    const user = [];

    const newUser = { email, password, name, number };
    return user.push(newUser);
  };
  const login = () => {};
  const logout = () => {};
  return (
    <div>
      <AuthDataContext.Provider value={{ signup, login, logout }}>
        {children}
      </AuthDataContext.Provider>
    </div>
  );
};

export default AuthContext;
