import { Header } from "../atoms/HeaderNavbar";
import { CourseDescription } from "../atoms/CourseDescription";
import { RegistrationForm } from "../atoms/RegistrationForm";
import landingimage from "../assets/img/courses.jpg";
import PythonImage from "../assets/img/pythonprogramming.png";
import { useState } from "react";
import { CertifiedCourseSection } from "../atoms/CertifiedCourses";
import { PopularCourses } from "../atoms/PopularCourses";
import { EnrolledCountSection } from "../atoms/EnrolledSection";
import { FooterSection } from "../atoms/Footer";
interface CourseProps {
  coursetitle: string;
  imgtitle: any;
  courseDescriptionpara?: string;
}
export const Python = ({
  coursetitle,
  imgtitle,
  courseDescriptionpara,
}: CourseProps) => {
  const [togglestate, setToggleState] = useState(1);
  const title = "COURSE DESCRIPTION";
  const description =
    "Data Science is an interdisciplinary field that combines statistics, mathematics, programming, and domain expertise to extract valuable insights and knowledge from data. It involves analyzing and interpreting large volumes of data to make informed business decisions, solve complex problems, and drive innovation. Data Science has applications in various industries, including finance, healthcare, marketing, and technology. The Data Science Fundamentals course provides students with a comprehensive understanding of the core concepts and techniques used in data science.";
  return (
    <>
      <div className="top-bar-area address-two-lines bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-8 address-info">
              <div className="info box">
                <ul>
                  <li>
                    <span>
                      <i className="fas fa-map" /> Address
                    </span>
                    Madhapur, Telangana.
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-envelope-open" /> Email
                    </span>
                    support@seoak.in
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-phone" /> Contact
                    </span>
                    +91&nbsp;95025 49362
                  </li>
                </ul>
              </div>
            </div>
            <div className="user-login text-right col-md-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeM_1nUTx2DaBUxSR5xXgoTjKfE71wt0trYPAHYSf8t5QWB8g/viewform">
                <i className="fas fa-edit" /> Register
              </a>
              <a className="popup-with-form" href="#login-form">
                <i className="fas fa-user" /> Login
              </a>
            </div>
          </div>
        </div>
      </div>
      <Header />
      <div
        className="banner-area auto-height banner-box text-default text-light bg-gradient bg-fixed"
        style={{ backgroundImage: `url(${landingimage})` }}
      >
        <div className="item">
          <div className="box-table shadow dark">
            <div className="box-cell">
              <div className="container">
                <div className="row item-flex center">
                  <div className="col-md-5 thumb"></div>
                  <div className="col-md-7">
                    <div className="content">
                      <RegistrationForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Banner */}
      {/* Start Course Details 
      ============================================= */}
      <div className="course-details-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="course-details-info">
                <div className="top-info">
                  <div className="title">
                    <h2>{coursetitle}</h2>
                  </div>
                  <div className="thumb">
                    <img src={imgtitle} alt="Thumb" />
                  </div>
                  <div className="course-meta">
                    <div className="item category">
                      <h4>Category</h4>
                      <a href="#">Programming</a>
                    </div>
                    <div className="item rating">
                      <h4>Rating</h4>
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span>4.5 (16)</span>
                    </div>
                    <div className="item price">
                      <h4>Price</h4>
                      <span>5000₹</span>
                    </div>
                    <div className="align-right">
                      <a
                        className="btn btn-dark effect btn-sm"
                        href="https://wa.me/+917483758735"
                      >
                        <i className="fas fa-chart-bar" /> Enroll
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tab-info">
                  {/* Tab Nav */}
                  <ul className="nav nav-pills">
                    <li className={togglestate === 1 ? "active" : ""}>
                      <a
                        data-toggle="tab"
                        href="#tab1"
                        aria-expanded="true"
                        onClick={() => setToggleState(1)}
                      >
                        Overview
                      </a>
                    </li>
                    <li className={togglestate === 2 ? "active" : ""}>
                      <a
                        data-toggle="tab"
                        href="#tab2"
                        aria-expanded="false"
                        onClick={() => setToggleState(2)}
                      >
                        Curriculum
                      </a>
                    </li>
                    <li className={togglestate === 3 ? "active" : ""}>
                      <a
                        data-toggle="tab"
                        href="#tab4"
                        aria-expanded="false"
                        onClick={() => setToggleState(3)}
                      >
                        Reviews
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content tab-content-info">
                    <div
                      id="tab1"
                      className={
                        togglestate === 1
                          ? "tab-pane fade active in"
                          : "tab-pane fade"
                      }
                    >
                      <CourseDescription title={title} children={description} />
                      {/* {coursedescriptionprop should be used in above} */}
                    </div>
                    <div
                      id="tab2"
                      className={
                        togglestate === 2
                          ? "tab-pane fade active in"
                          : "tab-pane fade"
                      }
                    >
                      {/* <Curriculam title={""} videoTitles={""} /> */}
                      <div className="info title">
                        <p>
                          The Python Programming Fundamentals course is designed
                          to provide students with a solid foundation in Python
                          programming. This course is suitable for beginners who
                          have little to no prior programming experience.
                          Through hands-on exercises and coding projects,
                          students will gain practical experience in writing
                          Python programs and develop problem-solving skills.
                        </p>
                        <h4>List Of Courses</h4>
                        {/* Start Course List */}
                        <div className="course-list-items acd-items acd-arrow">
                          <div className="panel-group symb" id="accordion">
                            <div className="panel panel-default">
                              <div className="panel-heading">
                                <h4 className="panel-title">
                                  <a
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#ac1"
                                  >
                                    Python Programming
                                  </a>
                                </h4>
                              </div>
                              <div id="ac1" className="panel-collapse ">
                                <div className="panel-body">
                                  <ul>
                                    <li>
                                      <div className="item name">
                                        <i className="fas fa-play" />
                                        <span>Lecture 1.1</span>
                                      </div>
                                      <div className="item title">
                                        <h5>Introduction of Python</h5>
                                      </div>
                                      <div className="item info">
                                        <span>Duration: 1 hour</span>
                                        <a href="#">Preview</a>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="tab3"
                      className={
                        togglestate === 3
                          ? "tab-pane fade active in"
                          : "tab-pane fade"
                      }
                    >
                      <div className="info title">
                        <div className="advisor-list-items">
                          {/* Advisor Item */}
                          <div className="item">
                            <div className="thumb">
                              <img src="assets/img/800x800.png" alt="Thumb" />
                            </div>
                            <div className="info">
                              <h4>Devid Mark</h4>
                              <span>senior lecturer</span>
                              <p>
                                Several carried through an of up attempt
                                gravity. Situation to be at offending elsewhere
                                distrusts if. Particular use for considered
                                projection cultivated. Worth of do doubt shall
                              </p>
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-facebook-f" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-dribbble" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-youtube" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* End Advisor Item */}
                          {/* Advisor Item */}
                          <div className="item">
                            <div className="thumb">
                              <img src="assets/img/800x800.png" alt="Thumb" />
                            </div>
                            <div className="info">
                              <h4>Andolin Paul</h4>
                              <span>Java Developer</span>
                              <p>
                                Several carried through an of up attempt
                                gravity. Situation to be at offending elsewhere
                                distrusts if. Particular use for considered
                                projection cultivated. Worth of do doubt shall
                              </p>
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-facebook-f" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-dribbble" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-youtube" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* End Advisor Item */}
                        </div>
                      </div>
                    </div>
                    {/* End Single Tab */}
                    {/* Single Tab */}
                    <div id="tab4" className="tab-pane fade">
                      <div className="info title">
                        <div className="course-rating-list">
                          <h4>Average Rating</h4>
                          <div className="item rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>4.5 (16)</span>
                          </div>
                          <ul>
                            <li>
                              <span>5 Star</span>
                              <div className="rating-bar" />
                              <span>13</span>
                            </li>
                            <li>
                              <span>4 Star</span>
                              <div className="rating-bar" />
                              <span>1</span>
                            </li>
                            <li>
                              <span>3 Star</span>
                              <div className="rating-bar" />
                              <span>0</span>
                            </li>
                            <li>
                              <span>2 Star</span>
                              <div className="rating-bar" />
                              <span>1</span>
                            </li>
                            <li>
                              <span>1 Star</span>
                              <div className="rating-bar" />
                              <span>0</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Tab */}
                  </div>
                  {/* End Tab Content */}
                </div>
                {/* End Tab Info */}
              </div>
            </div>
            {/* Start Sidebar */}
            <div className="col-md-4">
              <div className="sidebar">
                <aside>
                  <CertifiedCourseSection title={"Certified Courses"} />
                  <PopularCourses />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EnrolledCountSection />
      <div
        id="top-categories"
        className="top-cat-area bg-gray default-padding bottom-less"
      >
        <div className="container">
          <div className="row">
            <div className="site-heading text-center">
              <div className="col-md-8 col-md-offset-2">
                <h2>Our Promise For You</h2>
                {/* <p>
                        Discourse assurance estimable applauded to so. Him everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated estimating excellence an to impression. 
                    </p> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="top-cat-items text-light inc-bg-color">
              <div className="col-md-3 col-sm-6 equal-height">
                <div className="item mariner">
                  <a href="#one-on-one" className="popup-with-form">
                    <i className="flaticon-feature" />
                    <div className="info">
                      <h4>One On One Interaction</h4>
                      <span />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div className="item java">
                  <a href="#real-time" className="popup-with-form">
                    <i className="flaticon-interaction" />
                    <div className="info">
                      <h4>Real Time Projects</h4>
                      <span />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div className="item malachite">
                  <a href="#lms-access" className="popup-with-form">
                    <i className="flaticon-conveyor" />
                    <div className="info">
                      <h4>LMS Access For All Courses</h4>
                      <span />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div className="item emerald">
                  <a href="#live-projects" className="popup-with-form">
                    <i className="flaticon-potential" />
                    <div className="info">
                      <h4>Live Projects</h4>
                      <span />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div className="item casablanca">
                  <a href="#scholarships" className="popup-with-form">
                    <i className="flaticon-education" />
                    <div className="info">
                      <h4>Scholarships</h4>
                      <span />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div className="item brilliantrose">
                  <a href="#updated-curriculam" className="popup-with-form">
                    <i className="flaticon-print" />
                    <div className="info">
                      <h4>Updated Curriculum </h4>
                      <span />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div className="item cinnabar">
                  <a href="#certified-mentors" className="popup-with-form">
                    <i className="flaticon-translate" />
                    <div className="info">
                      <h4>Certified Mentors</h4>
                      <span />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div className="item plum">
                  <a href="#paid-internships" className="popup-with-form">
                    <i className="flaticon-firewall" />
                    <div className="info">
                      <h4>Paid Internships</h4>
                      <span />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Top Categories */}
      {/* Start Our Features Latest Post
      ============================================= */}
      <div className="our-featues-area inc-trending-courses about-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8 our-feature-items">
              <div className="row">
                <div className="col-md-12 info less-bar">
                  <h5>Why Choose Us?</h5>
                  <h1>
                    Welcome to the biggest online learning source of Seoak
                  </h1>
                  <p>
                    Seoak, a leading IT software training company, has
                    established itself as a dominant force in a short span of
                    time. With efficient coordination, our well-planned
                    operations encompass planning, control, coordination, and
                    motivation. Our expert coordinators handle all subjects,
                    lectures, problems, and draw conclusive solutions, ensuring
                    a seamless learning experience.
                  </p>
                </div>
                {/* Start Fatures */}
                <div className="our-features">
                  <div className="col-md-6 col-sm-6">
                    <div className="item mariner">
                      <div className="icon">
                        <i className="flaticon-faculty-shield" />
                      </div>
                      <div className="info">
                        <h4>Expert faculty</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="item java">
                      <div className="icon">
                        <i className="flaticon-book-2" />
                      </div>
                      <div className="info">
                        <h4>Online Learning</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="item malachite">
                      <div className="icon">
                        <i className="flaticon-education" />
                      </div>
                      <div className="info">
                        <h4>Scholarship</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="item brilliantrose">
                      <div className="icon">
                        <i className="flaticon-university-campus" />
                      </div>
                      <div className="info">
                        <h4>Paid Internships</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Our Features */}
            {/* End Home Sidebar */}
            <div className="col-md-4 home-sidebar">
              {/* Start Latest Post */}
              <div className="sidebar-item latest-posts trending-courses-box">
                <h4>Popular Courses</h4>
                <div className="trending-courses-items">
                  <div className="item">
                    <h4>
                      <a href="c++-language.html">C++ Programming</a>
                    </h4>
                  </div>
                  <div className="item">
                    <h4>
                      <a href="data-science.html">Data Science</a>
                    </h4>
                  </div>
                  <div className="item">
                    <h4>
                      <a href="cloud-computing.html">Cloud Computing</a>
                    </h4>
                  </div>
                  <div className="item">
                    <h4>
                      <a href="full-stack-development.html">
                        full Stack Development
                      </a>
                    </h4>
                  </div>
                  <a href="industrial-live-training.html" className="more">
                    All Courses <i className="fas fa-angle-double-right" />
                  </a>
                </div>
              </div>
              {/* End Latest Posts */}
            </div>
            {/* End Home Sidebar */}
          </div>
        </div>
      </div>
      {/* End Our Features & Latest Post */}
      {/* Start Testimonials 
      ============================================= */}
      <div className="testimonials-area carousel-shadow default-padding bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="site-heading text-center">
              <div className="col-md-8 col-md-offset-2">
                <h2>Students Review</h2>
                <p>Read Our Successfull Students Reviews</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="clients-review-carousel owl-carousel owl-theme">
                <div className="item">
                  <div className="col-md-5 thumb">
                    <img src="assets/img/studentsreviewone.png" alt="Thumb" />
                  </div>
                  <div className="col-md-7 info">
                    <p>
                      I cannot thank the training and placement department of
                      SEOAK enough for their unwavering dedication to providing
                      exceptional training and creating abundant placement
                      opportunities.
                    </p>
                    <h4>Praveen Kumar</h4>
                    <span>Full Stack Web Development</span>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="col-md-5 thumb">
                    <img src="assets/img/studentsreviewthree.png" alt="Thumb" />
                  </div>
                  <div className="col-md-7 info">
                    <p>
                      Being part of SEOAK is a privilege, with immense growth
                      opportunities and gratitude within me. The faculty and
                      department go above and beyond, shaping students' futures
                      tirelessly. Thank you for the placements.
                    </p>
                    <h4>Sai Krishna</h4>
                    <span>JAVA</span>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="col-md-5 thumb">
                    <img src="assets/img/studentsreviewfour.png" alt="Thumb" />
                  </div>
                  <div className="col-md-7 info">
                    <p>
                      After completing graduation in B.Com I chose a career in
                      data analytics. Being from a non-technical background,
                      this was quite new. But joining a course from Seoak has
                      been my best decision. Highly Recomended for everyone.
                    </p>
                    <h4>Sai Teja</h4>
                    <span>Data Analytics</span>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="col-md-5 thumb">
                    <img src="assets/img/studentsreviewtwo.png" alt="Thumb" />
                  </div>
                  <div className="col-md-7 info">
                    <p>
                      SEOAK has exceeded my expectations in terms of
                      professional development. The hands-on approach to
                      learning, coupled with industry-relevant curriculum, has
                      prepared me for real-world challenges and boosted my
                      confidence.
                    </p>
                    <h4>Pooja</h4>
                    <span>Python</span>
                  </div>
                </div>
                {/* Single Item */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Testimonials */}
      {/* Start Clients Area 
      ============================================= */}
      <div className="clients-area default-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-4 info">
              <h4>Top Companies Hiring us</h4>
              <p>
                Get Yourself placed in the top MNC companies with our special
                training and opportunities.
              </p>
            </div>
            <div className="col-md-8 clients">
              <div className="clients-items owl-carousel owl-theme text-center">
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/Dell150,80.png" alt="Clients" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/Ibm150,80.png" alt="Clients" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/microsoft150,80.png" alt="Clients" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/Capgeminie150,80.png" alt="Clients" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/google150,80.png" alt="Clients" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Clients Area */}
      {/* Start Registration & Faq 
      ============================================= */}
      <div className="reg-area inc-faq default-padding">
        <div className="container">
          <div className="row">
            <div className="reg-items">
              <div className="col-md-6 reg-form">
                <div style={{ marginTop: -120 }}>
                  <RegistrationForm />
                </div>
              </div>
              <div className="col-md-6 faq-items">
                <div className="site-heading text-left">
                  <h2>Frequently Asked Question</h2>
                </div>
                {/* Start Accordion */}
                <div className="acd-items acd-arrow">
                  <div className="panel-group symb" id="accordion">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#ac1"
                          >
                            What is the medium of instruction?
                          </a>
                        </h4>
                      </div>
                      <div id="ac1" className="panel-collapse collapse in">
                        <div className="panel-body">
                          <p>
                            Medium of instruction and program delivery is 100%
                            English and we expect candidates to know English as
                            a mandatory language to apply for the program.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#ac2"
                          >
                            Do I get a certificate at the end the course?
                          </a>
                        </h4>
                      </div>
                      <div id="ac2" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Upon successful completion of this course, you will
                            be awarded with an industry-recognized certification
                            from SEOAK.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#ac3"
                          >
                            What if i have a question or any doubts?
                          </a>
                        </h4>
                      </div>
                      <div id="ac3" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            You have various options to contact us, You can
                            contact us through WhatsApp, Contact Number, Email.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#ac4"
                          >
                            What is the refund policy?
                          </a>
                        </h4>
                      </div>
                      <div id="ac4" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            You can check our{" "}
                            <a href="./refund-policy.html">refund policy</a>{" "}
                            here.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Accordion */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};
