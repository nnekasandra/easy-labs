import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SelectBtn from "./components/button";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import Practical from "./pages/practical";
import Start from "./pages/start";
const App = () => { 
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started">
          <Route index element={<Start />} />
          <Route path="practical" element={<Practical />} />
          <Route path=":id" element={<Practical />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
