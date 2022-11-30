import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import FirstPractical from "./pages/FirstPractical";
import { SignIn } from "./pages/SignIn";
// import LogoutButton from "./components/LogoutButton";
import LoginButton from "./components/LoginButton";
const App = () => { 
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="get-started" element={<LoginButton />} />
        <Route path="practicals" element={<FirstPractical />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
