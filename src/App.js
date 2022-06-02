import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import Practical from "./pages/practical";
import { PracticalTwo } from "./pages/practical2";
import Start from "./pages/start";
const App = () => { 
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started">
          <Route index element={<Start />} />
          <Route path="practical-1" element={<Practical />} />
          <Route path="practical-2" element={<PracticalTwo />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
