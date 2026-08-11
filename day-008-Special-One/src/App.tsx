import { Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage.tsx";
import SecondPage from "./pages/SecondPage.tsx";
import ThirdPage from "./pages/ThirdPage.tsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/secondPage" element={<SecondPage />} />
        <Route path="/thirdPage" element={<ThirdPage />} />
      </Routes>
    </div>
  );
};

export default App;
