import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  return (
    <AuthContext>
      <div className="min-h-screen bg-background transition-colors duration-500">
        <Navbar />
        <main className="min-h-[calc(100vh-80px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </AuthContext>
  );
};

export default App;
