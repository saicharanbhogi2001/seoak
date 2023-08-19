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
import Courses from "./components/courses";
import CyberSecurity from "./components/cyber-security";
import DataScience from "./components/data-science";
import Dsa from "./components/dsa";
import Faq from "./components/Faq";
import FullStackDevelopemnt from "./components/Full-stack-development";
import ChatGpt from "./components/chat-gpt";
import Onepage from "./components/index-onepage";
import HostPage from "./components";
import JavaProgramming from "./components/java-programming";
import LiveAdvancedAi from "./components/live-advanced-ai";
import LiveCloudComputing from "./components/live-cloud-computing";
import LiveCyberSecurity from "./components/live-cyber-security";
import LiveDataScience from "./components/live-data-science";
import LiveFullStackDevelopment from "./components/live-full-stack-development";
import LiveIndustrialCourses from "./components/live-industrial-courses";
import PowerBI from "./components/power-bi";
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
        <Route path="/" element={<HostPage />} />
        <Route path="/sign-in" element={<LoginPage />} />
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
        <Route path="/chat-gpt" element={<ChatGpt />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/dsa" element={<Dsa />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/index-onepage" element={<Onepage />} />
        <Route
          path="/full-stack-develepment"
          element={<FullStackDevelopemnt />}
        />
        <Route path="/java-programming" element={<JavaProgramming />} />
        <Route path="/live-advanced-ai" element={<LiveAdvancedAi />} />
        <Route path="/live-cloud-computing" element={<LiveCloudComputing />} />
        <Route path="/live-cyber-security" element={<LiveCyberSecurity />} />
        <Route path="/live-data-science" element={<LiveDataScience />} />
        <Route
          path="/live-fullstack-development"
          element={<LiveFullStackDevelopment />}
        />
        <Route
          path="/live-industrial-courses"
          element={<LiveIndustrialCourses />}
        />
        <Route path="/powerbi" element={<PowerBI />} />
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
