import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <div>
      <div className="flex justify-between items-center px-8 h-16">
        <h1 className="heading">My Auth App</h1>
        <div className="flex gap-6">
          <NavLink className="navlink" to={"/"}>
            Home
          </NavLink>
          <NavLink className="navlink" to={"/login"}>
            Login
          </NavLink>
          <NavLink className="navlink" to={"/signup"}>
            Signup
          </NavLink>
        </div>
        <button
          className="p-2 border rounded-full cursor-pointer justify-center items-center text-text transition-transform duration-500 active:rotate-180"
          onClick={() => setTheme((prev) => !prev)}
        >
          {theme ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
