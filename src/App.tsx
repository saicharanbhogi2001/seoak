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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
