import { useContext } from "react";
import AuthDataContext from "../context/AuthContext";

const Home = () => {
  const { logout, user } = useContext(AuthDataContext);
  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <h1 className="heading">Welcome to the Home Page</h1>
      <h2 className="text-4xl text-accent font-bold my-4"> {user ? user.name : "Guest"} 👋</h2>
      {user && (
        <button className="buttonStyles" onClick={() => logout()}>
          logout
        </button>
      )}
    </div>
  );
};

export default Home;
