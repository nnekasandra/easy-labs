import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import Practical from "./pages/practical";
import { PracticalTwo } from "./pages/practical2";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";
import Start from "./pages/start";
const App = () => { 
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="get-started">
          <Route index element={<SignUp />} />
          <Route path="practical-1" element={<Practical />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="practical-2" element={<PracticalTwo />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
