import { createContext, useState } from "react";

const AuthDataContext = createContext(null);

export const AuthContext = ({ children }) => {
  const CurrentUserEmail = localStorage.getItem("CurrentUserEmail");
  const [user, setUser] = useState(
    CurrentUserEmail ? { email: CurrentUserEmail } : null,
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
    localStorage.setItem("CurrentUserEmail", email);

    setUser(newUser);

    return { success: true };
  };
  //   LOGIN FUNCTIONALITY

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.email === email);
    const oldUser = users.find(
      (user) => user.email === email && user.password === password,
    );
    if (!existingUser) {
      return {
        success: false,
        message: "email not found please signup...",
      };
    }
    if (!oldUser) {
      return {
        success: false,
        message: "Invalid Email or Password",
      };
    }

    localStorage.setItem("CurrentUserEmail", email);
    setUser(oldUser);
    return {
      success: true,
    };
  };
  //   LOGOUT FUNCTIONALITY

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
