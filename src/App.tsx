import ErrorPage from "./components/404";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CoursePage } from "./components/Module";
import LoginPage from "./components/login";
import AboutUs from "./components/about-us";
import Contact from "./components/contact";
import CourseDetails from "./components/course-details";
import Courses from "./components/courses";
import Faq from "./components/Faq";
import Onepage from "./components/index-onepage";
import HostPage from "./components";
import LiveIndustrialCourses from "./components/live-industrial-courses";
import { PricingTable } from "./components/pricing-table";
import { PrivacyPolicy } from "./components/privacy-policy";
import { Profile } from "./components/profile";
import { RefundPolicy } from "./components/refund-policy";
import { Register } from "./components/register";
import { TeachersDetails } from "./components/teachers-details";
import { Teachers } from "./components/teachers";
import { TermsandCondition } from "./components/terms-and-conditions";
import { EnrolledCountSection } from "./atoms/EnrolledSection";
import { PromiseCardsSection } from "./Organisms/PromiseCardsSection";
import CertifiedCourses from "./components/CertifiedCourses";
import { SeoakExtrasPage } from "./components/SeoakExtras";

function App() {
  return (
    <Router>
      {/* <ThemeProvider theme={}> */}
      <Routes>
        <Route path="/" element={<HostPage />} />
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/Seoak-extras" element={<SeoakExtrasPage />} />
        <Route path="/live-chat-gpt" element={<CoursePage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/advanced-ai" element={<CoursePage />} />
        <Route path="/c-language" element={<CoursePage />} />
        <Route path="/cpp-language" element={<CoursePage />} />
        <Route path="/seoak-basics" element={<CertifiedCourses />} />
        <Route path="/cloud-computing" element={<CoursePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/chat-gpt" element={<CoursePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/cyber-security" element={<CoursePage />} />
        <Route path="/data-science" element={<CoursePage />} />
        <Route path="/dsa" element={<CoursePage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/index-onepage" element={<Onepage />} />
        <Route path="/full-stack-development" element={<CoursePage />} />
        <Route path="/java-programming" element={<CoursePage />} />
        <Route path="/live-advanced-ai" element={<CoursePage />} />
        <Route path="/live-cloud-computing" element={<CoursePage />} />
        <Route path="/live-cyber-security" element={<CoursePage />} />
        <Route path="/live-data-science" element={<CoursePage />} />
        <Route path="/live-fullstack-development" element={<CoursePage />} />
        <Route
          path="/live-industrial-courses"
          element={<LiveIndustrialCourses />}
        />
        <Route path="/powerbi" element={<CoursePage />} />
        <Route path="/pricing-table" element={<PricingTable />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/python" element={<CoursePage />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teachers-details" element={<TeachersDetails />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/terms-and-conditions" element={<TermsandCondition />} />
        <Route path="/autoincrement" element={<EnrolledCountSection />} />
        <Route path="/Promisecardsection" element={<PromiseCardsSection />} />
        {/* use below route to all course pages */}
        <Route path="/CoursePage" element={<CoursePage />} />
      </Routes>
      {/* </ThemeProvider> */}
    </Router>
  );
}
export default App;
