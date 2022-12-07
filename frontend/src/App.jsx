import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
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
const App = () => { 
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="get-started" element={<LoginButton />} />
          <Route element={<ProtectedRoute />}>
            <Route path="admin" element="you must be an admin" />
            <Route path="/practicals">
              <Route index element={<PracticalsLandingPage />} />
              <Route path="practical-1" element="practical 1" />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
};

export default App;
