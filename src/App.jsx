import RootClientWrapper from "./components/RootClientWrapper";
import "./App.css";
import ServicesSection from "./components/servicePage/ServiceSection";
import LandingSection from "./components/landingPage/LandingSection";
import CompanyProfile from "./components/company/CompanyProfile";
import ScrollToHash from "./components/ScrollToHash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <RootClientWrapper>
              <LandingSection />
              <ServicesSection />
              <CompanyProfile />
            </RootClientWrapper>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
