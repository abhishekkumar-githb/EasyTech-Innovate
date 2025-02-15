import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import SignInPage from "./Pages/Authentication/SigninPage/SignInPage";
import SignUpPage from "./Pages/Authentication/SignupPage/SignUpPage";
import HomePage from "./Pages/Welcome/HomePage/Homes";
import AboutUsPage from "./Pages/Welcome/AboutUs/AboutUs";
import ContactUsPage from "./Pages/Welcome/ContactUs/ContactUs";
import ServicesPage from "./Pages/Welcome/Services/Services";
import PrivacyPolicy from "./Pages/Welcome/Policies/PrivacyPolicy";
import TermServices from "./Pages/Welcome/Policies/TermServices";
import SearchPage from "./Pages/Dashboard/Search/SearchPage";
import HomePages from "./Pages/Dashboard/HomePage/HomePage"
import DashboardLayout from './Pages/Dashboard/DashboardLayout';

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

        {/* Authentication Pages */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Dashboard Pages */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<HomePages />} />
          <Route path="search" element={<SearchPage />} />
        </Route>


        {/* Static Pages */}
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-services" element={<TermServices />} />
      </Routes>
    </>
  );
};

export default App;
