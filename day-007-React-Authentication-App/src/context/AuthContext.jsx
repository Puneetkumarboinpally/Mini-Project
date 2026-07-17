import { createContext, useState } from "react";

const AuthDataContext = createContext(null);

export const AuthContext = ({ children }) => {
  const CurrentUserName = localStorage.getItem("CurrentUserName");
  const [user, setUser] = useState(
    CurrentUserName ? { name: CurrentUserName } : null,
  );

  const signUp = (email, password, name, number) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const oldUser = users.find((user) => user.email === email);

    if (oldUser) {
      return {
        success: false,
        message: "Email already exists",
      };
    }
    const newUser = {
      email,
      password,
      name,
      number,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("CurrentUserName", name);

    setUser(newUser);

    return { success: true };
  };

  const login = () => {
    console.log("login");
  };
  const logout = () => {
    localStorage.removeItem("CurrentUserName");
    setUser(null);
  };

  return (
    <AuthDataContext.Provider
      value={{
        user,
        signUp,
        login,
        logout,
      }}
    >
      {children}
    </AuthDataContext.Provider>
  );
};

export default AuthDataContext;
