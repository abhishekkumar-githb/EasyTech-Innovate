import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./Pages/Welcome/HomePage/Homes";
import AboutUsPage from "./Pages/Welcome/AboutUs/AboutUs";
import OurTeamPage from "./Pages/Welcome/OurTeam/OurTeam";
import ServicesPage from "./Pages/Welcome/Services/Services";
import PrivacyPolicy from "./Pages/Welcome/Policies/PrivacyPolicy";
import TermServices from "./Pages/Welcome/Policies/TermServices";
import ConnectWithUs from "./Pages/Welcome/Connectwith US/Connect";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Routes>
        {/* Welcome Page  */}
        <Route path="/" element={<HomePage />} />

        {/* Static Pages */}
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/ourteam" element={<OurTeamPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-services" element={<TermServices />} />
        <Route path="/ConnectWithUs" element={<ConnectWithUs />} />
      </Routes>
    </>
  );
};

export default App;
