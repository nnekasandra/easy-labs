import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Auth0ProviderWithHistory from "./auth/Auth0ProviderWithHistory";
import PageNotFound from "./pages/PageNotFound";
import GetStarted from "./components/GetStarted";
import Welcome from "./pages/Welcome";
import PracticalsLandingPage from "./pages/PracticalsLandingPage";
import ProtectedRoute from "./components/ProtectedRoute";
import DrugDoseResponse from "./pages/DrugDoseResponse";
import DrugDoseResponseRecord from "./pages/DrugDoseResponseRecord";
const App = () => { 
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="welcome" element={<Welcome/>} />
          <Route path= "get-started" element={<GetStarted/>}/>
          <Route element={<ProtectedRoute />}>
            <Route path="admin" element="you must be an admin" />
            <Route path="/practicals">
              <Route index element={<PracticalsLandingPage />} />
              <Route path="dose-response">
                <Route index element={<DrugDoseResponse />} />
                <Route path="record" element={<DrugDoseResponseRecord />} />
              </Route>
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
