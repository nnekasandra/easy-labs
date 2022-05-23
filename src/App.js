import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SelectBtn from "./components/button";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import Start from "./pages/start";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<Start/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
