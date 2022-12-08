import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import FirstPractical from "./pages/FirstPractical";
import { SecondPractical } from "./pages/SecondPractical";
import LoginButton from "./components/LoginButton";
import Auth0ProviderWithHistory from "./auth/Auth0ProviderWithHistory";
import PageNotFound from "./pages/PageNotFound";
import PracticalsLandingPage from "./pages/PracticalsLandingPage";
import ProtectedRoute from "./components/ProtectedRoute";
import DrugDoseResponse from "./pages/DrugDoseResponse";
const App = () => { 
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practicals">
            <Route index element={<PracticalsLandingPage />} />
            <Route path="dose-response">
              <Route index element={<DrugDoseResponse/>}/>
              <Route path="record" element="record and tabulate" />
            </Route>
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="admin" element="you must be an admin" />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
};

export default App;
