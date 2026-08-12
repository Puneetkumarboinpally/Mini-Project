import { Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage.tsx";
import SecondPage from "./pages/SecondPage.tsx";
import ThirdPage from "./pages/ThirdPage.tsx";
import FifthPage from "./pages/FifthPage.tsx";
import FourthPage from "./pages/FourthPage.tsx";
import SixthPage from "./pages/SixthPage.tsx";
import SeventhPage from "./pages/SeventhPage.tsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/secondPage" element={<SecondPage />} />
        <Route path="/thirdPage" element={<ThirdPage />} />
        <Route path="/fourthPage" element={<FourthPage />} />
        <Route path="/fifthPage" element={<FifthPage />} />
        <Route path="/sixthPage" element={<SixthPage />} />
        <Route path="/seventhPage" element={<SeventhPage />} />
      </Routes>
    </div>
  );
};

export default App;
