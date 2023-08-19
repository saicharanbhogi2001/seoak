import ErrorPage from "./components/404";
import LiveChatGpt from "./components/line-chat-gpt";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/login";
import AboutUs from "./components/about-us";
import AdvancedAI from "./components/advanced-ai";
import CLanguage from "./components/c-language";
import CppLanguage from "./components/cpp-language";
import CertifiedCourses from "./components/certified-courses";
import CloudComputing from "./components/cloud-computing";
import Contact from "./components/contact";
import CourseDetails from "./components/course-details";
import { PricingTable } from "./components/pricing-table";
import { PrivacyPolicy } from "./components/privacy-policy";
import { Profile } from "./components/profile";
import { Python } from "./components/python";
import { RefundPolicy } from "./components/refund-policy";
import { Register } from "./components/register";
import { TeachersDetails } from "./components/teachers-details";
import { Teachers } from "./components/teachers";
import { TermsandCondition } from "./components/terms-and-conditions";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/live-chat-gpt" element={<LiveChatGpt />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/advanced-ai" element={<AdvancedAI />} />
        <Route path="/c-language" element={<CLanguage />} />
        <Route path="/cpp-language" element={<CppLanguage />} />
        <Route path="/certified-courses" element={<CertifiedCourses />} />
        <Route path="/cloud-computing" element={<CloudComputing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/pricing-table" element={<PricingTable />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/python" element={<Python />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teachers-details" element={<TeachersDetails />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/terms-and-conditions" element={<TermsandCondition />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
