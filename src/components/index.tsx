import { useSpring, animated } from "react-spring";
import Carousel from "../atoms";
import Capgeminie150 from "../assets/img/Capgeminie150,80.png";
import Dell from "../assets/img/Dell150,80.png";
import hp from "../assets/img/hp150,80.png";
import ibm from "../assets/img/ibm150,80.png";
import google from "../assets/img/google150,80.png";
import infosys from "../assets/img/infosys150,80.png";
import landingpageimg from "../assets/img/landingpage.png";
import logo from "../assets/img/logo.png";
import logolight from "../assets/img/logo-light.png";
import trainingcertificate from "../assets/img/Trainingcompletioncertificate.jpg";
import courseCompletion from "../assets/img/Coursecompletioncertificate.jpg";
import ActivePerformer from "../assets/img/Active Performer.jpg";
import contactform from "../assets/img/contactform800,800.png";
import { StudentReview } from "../atoms/ImageCarosal/StudentReview";
import nsdc from "../assets/img/nsdc800,600.png";
interface NumberProps {
  n: number;
}

function NumberIncrementor({ n }: NumberProps) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const HostPage = () => {
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
      {/* End Header Top */}
      {/* Header 
    ============================================= */}
      <header id="home">
        {/* Start Navigation */}
        <nav className="navbar navbar-default navbar-sticky bootsnav">
          {/* Start Top Search */}
          <div className="container">
            <div className="row">
              <div className="top-search">
                <div className="input-group">
                  <form action="#">
                    <input
                      type="text"
                      name="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* End Top Search */}
          <div className="container">
            {/* Start Atribute Navigation */}
            {/* <div class="attr-nav">
              <ul>
                  <li class="search"><a href="#"><i class="fa fa-search"></i></a></li>
              </ul>
          </div>         */}
            {/* End Atribute Navigation */}
            {/* Start Header Navigation */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars" />
              </button>
              <a className="navbar-brand" href="index.html">
                <img src={logo} className="logo" alt="Logo" />
              </a>
            </div>
            {/* End Header Navigation */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul
                className="nav navbar-nav navbar-right"
                data-in="#"
                data-out="#"
              >
                <li className="#">
                  <a href="index.html" className="dropdown-toggle active">
                    Home
                  </a>
                </li>
                <li className="dropdown megamenu-fw">
                  <a href="about-us.html" className="active">
                    About Us
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    href="certified-courses.html"
                    className="dropdown-toggle active"
                    data-toggle="dropdown"
                  >
                    Certified Courses
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="c-language.html">C Language</a>
                    </li>
                    <li>
                      <a href="c++-language.html">C++ Language</a>
                    </li>
                    <li>
                      <a href="java-programming.html">JAVA Programming</a>
                    </li>
                    <li>
                      <a href="powerbi.html">Power BI</a>
                    </li>
                    <li>
                      <a href="python.html">Python</a>
                    </li>
                    <li>
                      <a href="DSA.html">
                        DSA (Data Structures &amp; Algorithm)
                      </a>
                    </li>
                    <li>
                      <a href="full-stack-development.html">
                        Full Stack Web Development
                      </a>
                    </li>
                    <li>
                      <a href="data-science.html">Data Science</a>
                    </li>
                    <li>
                      <a href="cloud-computing.html">Cloud Computing</a>
                    </li>
                    <li>
                      <a href="cyber-security.html">Cyber Security</a>
                    </li>
                    <li>
                      <a href="advanced-ai.html">Advanced AI</a>
                    </li>
                    <li>
                      <a href="chat-gpt.html">Chat GPT</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="live-industrial-courses.html"
                    className="dropdown-toggle active"
                    data-toggle="dropdown"
                  >
                    Live Training Courses
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="full-stack-development.html">
                        Full Stack Web Development
                      </a>
                    </li>
                    <li>
                      <a href="data-science.html">Data Science</a>
                    </li>
                    <li>
                      <a href="cloud-computing.html">Cloud Computing</a>
                    </li>
                    <li>
                      <a href="cyber-security.html">Cyber Security</a>
                    </li>
                    <li>
                      <a href="advanced-ai.html">Advanced AI</a>
                    </li>
                    <li>
                      <a href="chat-gpt.html">Chat GPT</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">contact</a>
                </li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
          </div>
        </nav>
        {/* End Navigation */}
      </header>
      {/* End Header */}
      {/* Start Login Form 
    ============================================= */}
      <form action="#" id="login-form" className="mfp-hide white-popup-block">
        <div className="col-md-4 login-social">
          <h4>Login with social</h4>
          <ul>
            <li className="facebook">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="twitter">
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="linkedin">
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-8 login-custom">
          <h4>login to your registered account!</h4>
          <div className="col-md-12">
            <div className="row">
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Email*"
                  type="email"
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Password*"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <label htmlFor="login-remember">
                <input type="checkbox" id="login-remember" />
                Remember Me
              </label>
              <a title="Lost Password" href="#" className="lost-pass-link">
                Lost your password?
              </a>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <button type="submit">Login</button>
            </div>
          </div>
          <p className="link-bottom">
            Not a member yet? <a href="#">Register now</a>
          </p>
        </div>
      </form>
      {/* End Login Form */}
      {/* Start Register Form 
    ============================================= */}
      <form
        action="#"
        id="register-form"
        className="mfp-hide white-popup-block"
      >
        <div className="col-md-4 login-social">
          <h4>Register with social</h4>
          <ul>
            <li className="facebook">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="twitter">
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="linkedin">
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-8 login-custom">
          <h4>Register a new account</h4>
          <div className="col-md-12">
            <div className="row">
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Email*"
                  type="email"
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Username*"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Password*"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Repeat Password*"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <button type="submit">Sign up</button>
            </div>
          </div>
          <p className="link-bottom">
            Are you a member? <a href="#">Login now</a>
          </p>
        </div>
      </form>
      {/* End Register Form */}
      {/* Start Banner 
    ============================================= */}

      <div className="banner-area content-top-heading less-paragraph text-normal">
        <div
          id="bootcarousel"
          className="carousel slide animate_text carousel-fade"
          data-ride="carousel"
        >
          {/* Wrapper for slides */}
          <div className="carousel-inner text-light carousel-zoom">
            <div className="item active">
              <div
                // className="slider-thumb bg-fixed"
                style={{ backgroundImage: "url(assets/img/slide-bg-1.jpeg)" }}
              />
              <div className="box-table shadow dark">
                <div className="box-cell">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="content">
                          <h3 data-animation="animated slideInLeft">
                            Reach you career
                          </h3>
                          <h1 data-animation="animated slideInUp">
                            Learn from best online training course
                          </h1>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-light border btn-md"
                            href="about-us.html"
                          >
                            Learn more
                          </a>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-theme effect btn-md"
                            href="live-industrial-courses.html"
                          >
                            View Courses
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="slider-thumb bg-fixed"
                style={{ backgroundImage: "url(assets/img/slide-bg-2.jpeg)" }}
              />
              <div className="box-table shadow dark">
                <div className="box-cell">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="content">
                          <h3 data-animation="animated slideInLeft">
                            We're glade to see you
                          </h3>
                          <h1 data-animation="animated slideInUp">
                            explore our brilliant graduates
                          </h1>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-light border btn-md"
                            href="about-us.html"
                          >
                            Learn more
                          </a>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-theme effect btn-md"
                            href="live-industrial-courses.html"
                          >
                            View Courses
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="slider-thumb bg-fixed"
                style={{ backgroundImage: "url(assets/img/slide-bg-3.jpeg)" }}
              />
              <div className="box-table shadow dark">
                <div className="box-cell">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="content">
                          <h3 data-animation="animated slideInLeft">
                            The goal of education
                          </h3>
                          <h1 data-animation="animated slideInUp">
                            Join the biggest comunity of eduka
                          </h1>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-light border btn-md"
                            href="about-us.html"
                          >
                            Learn more
                          </a>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-theme effect btn-md"
                            href="live-industrial-courses.html"
                          >
                            View Courses
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Wrapper for slides */}
          {/* Left and right controls */}
          <a
            className="left carousel-control"
            href="#bootcarousel"
            data-slide="prev"
          >
            <i className="fa fa-angle-left" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#bootcarousel"
            data-slide="next"
          >
            <i className="fa fa-angle-right" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/* End Banner */}
      <div className="clients-area default-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-4 info">
              <h4>
                <b>Top Companies Hiring us</b>
              </h4>
              <p>
                Get Yourself placed in the top MNC companies with our special
                training and opportunities.
              </p>
            </div>
            <div className="col-md-8 clients">
              <Carousel>
                <img src={Capgeminie150} alt="Clients" />
                <img src-={infosys} alt="Clients" />
                <img src={ibm} alt="Clients" />
                <img src={hp} alt="Clients" />
                <img src={Dell} alt="Clients" />
                <img src={google} alt="Clients" />
              </Carousel>
              {/* <div className="clients-items owl-carousel owl-theme text-center">
                <Carousel>
                  <div className="single-item">
                    <a href="#">
                      <img src={Capgeminie150} alt="Clients" />
                    </a>
                  </div>
                  <div className="single-item">
                    <a href="#">
                      <img src={Dell} alt="Clients" />
                    </a>
                  </div>
                  <div className="single-item">
                    <a href="#">
                      <img
                        src="/assets/img/Capgeminie150,80.png"
                        alt="Clients"
                      />
                    </a>
                  </div>
                  <div className="single-item">
                    <a href="#">
                      <img src="assets/img/google150,80.png" alt="Clients" />
                    </a>
                  </div>
                  <div className="single-item">
                    <a href="#">
                      <img src="assets/img/hcl150,80.png" alt="Clients" />
                    </a>
                  </div>
                  <div className="single-item">
                    <a href="#">
                      <img src="assets/img/aws150,80.png" alt="Clients" />
                    </a>
                  </div>
                  <div className="single-item">
                    <a href="#">
                      <img src="assets/img/hp150,80.png" alt="Clients" />
                    </a>
                  </div>
                  <div className="single-item">
                    <a href="#">
                      <img src="assets/img/Wipro150,80.png" alt="Clients" />
                    </a>
                  </div>
                  <div className="single-item">
                    <a href="#">
                      <img src="assets/img/tcs150,80 copy.png" alt="Clients" />
                    </a>
                  </div>
                  <div className="single-item">
                    <a href="#">
                      <img src="assets/img/infosys150,80.png" alt="Clients" />
                    </a>
                  </div>
                </Carousel>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div
        id="top-categories"
        className="top-cat-area bg-gray default-padding bottom-less"
      >
        <div className="container">
          <div className="row">
            <div className="site-heading text-center">
              <div className="col-md-8 col-md-offset-2">
                <h2>Our Promise For You</h2>
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
      <div className="about-area default-padding">
        <div className="container">
          <div className="row">
            <div className="about-info">
              <div className="col-md-6 thumb">
                <img src={landingpageimg} alt="Thumb" />
              </div>
              <div className="col-md-6 info">
                <h5>Introduction</h5>
                <h2>Welcome to the biggest online learning source</h2>
                <p>
                  At Seoak, we take pride in our team of highly talented
                  professionals who possess over 15 years of combined experience
                  in the fields of Information Technology and Corporate
                  Training. Our primary objective is to bridge the growing gap
                  between industry requirements and the skills possessed by
                  prospective employees, particularly graduates interested in
                  the area of Information Technology.{" "}
                </p>
                <p>
                  At SEOAK, we have earned a reputation as India's premier IT
                  Training company. We specialize in delivering a comprehensive
                  Hands-on Practical Training cum Placement Program in Advanced
                  Industrial &amp; Process Automation. Our training programs are
                  designed to challenge and enhance the skills of our trainees,
                  ensuring they are well-equipped for promising careers. In our
                  commitment to provide top-notch training, we have established
                  strategic alliances with leading organizations in the
                  industry.{" "}
                </p>
                <a href="about-us.html" className="btn btn-dark border btn-md">
                  Know More
                </a>
              </div>
            </div>
            <div className="seperator col-md-12">
              <span className="border" />
            </div>
            <div className="our-features">
              <div className="col-md-4 col-sm-4">
                <div className="item mariner">
                  <div className="icon">
                    <i className="flaticon-faculty-shield" />
                  </div>
                  <div className="info">
                    <h4>Expert faculty</h4>
                    <a href="#" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="item java">
                  <div className="icon">
                    <i className="flaticon-book-2" />
                  </div>
                  <div className="info">
                    <h4>Online learning</h4>
                    <a href="#" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="item malachite">
                  <div className="icon">
                    <i className="flaticon-education" />
                  </div>
                  <div className="info">
                    <h4>Scholarships</h4>
                    <a href="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About */}
      {/* Start Why Chose Us 
    ============================================= */}
      <div className="wcs-area bg-dark text-light">
        <div className="container-full">
          <div className="row">
            <div
              className="col-md-6 thumb bg-cover"
              style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
            >
              {/* Start Video Area
    ============================================= */}
              <div
                className="video-area padding-xl text-center bg-fixed text-light shadow dark-hard"
                style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                      <div className="video-heading">
                        <h2>Know More About Seoak in a short video.</h2>
                        {/* <p>
                      Tolerably behaviour may admitting daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in. Merits ye if mr narrow points. Melancholy particular devonshire alteration it favourable appearance
                  </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="video-info">
                      <div className="overlay-video">
                        {/* <a class="popup-youtube video-play-button" href="#">
                      <i class="fa fa-play"></i>
                  </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Video Area */}
            </div>
            <div className="col-md-6 content">
              <div className="site-heading text-left">
                <h2>About SEOAK</h2>
                {/* <p>
                      Discourse assurance estimable applauded to so. Him everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated estimating excellence an to impression. 
                  </p> */}
              </div>
              {/* item */}
              <div className="item">
                <div className="icon">
                  <i className="flaticon-trending" />
                </div>
                <div className="info">
                  <h4>
                    <a href="#">Vision</a>
                  </h4>
                  <p>
                    To become the largest online learning ecosystem for
                    continuing education, in partnership with corporates and
                    academia.
                  </p>
                </div>
              </div>
              {/* item */}
              {/* item */}
              <div className="item">
                <div className="icon">
                  <i className="flaticon-books" />
                </div>
                <div className="info">
                  <h4>
                    <a href="#">Mission</a>
                  </h4>
                  <p>
                    By deploying our world class team of industry experts, we
                    aim to educate our learners with the skills they need to
                    advance their professional life to the next level.{" "}
                  </p>
                </div>
              </div>
              {/* item */}
              {/* item */}
              <div className="item">
                <div className="icon">
                  <i className="flaticon-professor" />
                </div>
                <div className="info">
                  <h4>
                    <a href="#">Goals</a>
                  </h4>
                  <p>
                    To create an alternate platform for students who wish to
                    continue and complete courses by attending live online
                    courses, using a team of ridiculously committed educators
                    who will stop at nothing to impart education, helped by a 24
                    x 7 support system.{" "}
                  </p>
                </div>
              </div>
              {/* item */}
            </div>
          </div>
        </div>
      </div>
      {/* End Why Chose Us */}
      {/* Start Popular Courses 
    ============================================= */}
      <div className="popular-courses bg-gray circle carousel-shadow default-padding">
        <div className="container">
          <div className="row">
            <div className="site-heading text-center">
              <div className="col-md-8 col-md-offset-2">
                <h2>Popular Courses</h2>
                {/* <p>
                      Discourse assurance estimable applauded to so. Him everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated estimating excellence an to impression. 
                  </p> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="popular-courses-items popular-courses-carousel owl-carousel owl-theme">
                {/* Single Item */}
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src="assets/img/popularcoursesartificialintellegence.png"
                        alt="Thumb"
                      />
                    </a>
                    <div className="price">
                      <b>Price: 10,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <a href="#"><img src="assets/img/100x100.png" alt="Thumb"></a>
                              </div> */}
                      {/* <div class="others">
                                  <a href="#">Munil Druva</a>
                                  <div class="rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                      <span>4.5 (23,890)</span>
                                  </div>
                              </div> */}
                    </div>
                    <h4>
                      <a href="#">Artificial Intelligence</a>
                    </h4>
                    {/* <p>
                              Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.
                          </p> */}
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 170
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 72:00hrs
                        </li>
                      </ul>
                      <a href="live-advanced-ai.html">Know Now</a>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src="assets/img/popularcoursescloudcomputing.png"
                        alt="Thumb"
                      />
                    </a>
                    <div className="price">
                      <b>Price: 10,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <a href="#"><img src="assets/img/100x100.png" alt="Thumb"></a>
                              </div>
                              <div class="others">
                                  <a href="#">Munil Druva</a>
                                  <div class="rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                      <span>4.5 (23,890)</span>
                                  </div>
                              </div> */}
                    </div>
                    <h4>
                      <a href="#">Cloud Computing</a>
                    </h4>
                    {/* <p>
                              Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.
                          </p> */}
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 80
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 72:00hrs
                        </li>
                      </ul>
                      <a href="cloud-computing.html">Know Now</a>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src="assets/img/popularcoursesdatascience.png"
                        alt="Thumb"
                      />
                    </a>
                    <div className="price">
                      <b>Price: 10,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <a href="#"><img src="assets/img/100x100.png" alt="Thumb"></a>
                              </div>
                              <div class="others">
                                  <a href="#">Jonathom Kiyam</a>
                                  <div class="rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <span>4.9 (2,655)</span>
                                  </div>
                              </div> */}
                    </div>
                    <h4>
                      <a href="#">Data Science</a>
                    </h4>
                    {/* <p>
                              Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.
                          </p> */}
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 190
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 72:00hrs
                        </li>
                      </ul>
                      <a href="live-data-science.html">Know More</a>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src="assets/img/popularcoursesFullStack.png"
                        alt="Thumb"
                      />
                    </a>
                    <div className="price">
                      <b>Price: 10,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <a href="#"><img src="assets/img/100x100.png" alt="Thumb"></a>
                              </div>
                              <div class="others">
                                  <a href="#">Jonathom Kiyam</a>
                                  <div class="rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <span>4.9 (2,655)</span>
                                  </div>
                              </div> */}
                    </div>
                    <h4>
                      <a href="#">Full Stack Web Development</a>
                    </h4>
                    {/* <p>
                              Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.
                          </p> */}
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 190
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 72:00hrs
                        </li>
                      </ul>
                      <a href="live-full-stack-development.html">Know More</a>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src="assets/img/popularcourseschatgpt.png"
                        alt="Thumb"
                      />
                    </a>
                    <div className="price">
                      <b>Price: 10,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <a href="#"><img src="assets/img/100x100.png" alt="Thumb"></a>
                              </div>
                              <div class="others">
                                  <a href="#">Jonathom Kiyam</a>
                                  <div class="rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <span>4.9 (2,655)</span>
                                  </div>
                              </div> */}
                    </div>
                    <h4>
                      <a href="#">Chat GPT</a>
                    </h4>
                    {/* <p>
                              Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.
                          </p> */}
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 78
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 72:00hrs
                        </li>
                      </ul>
                      <a href="live-chat-gpt.html">Know More</a>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src="assets/img/popularcoursesCyberSecurity.png"
                        alt="Thumb"
                      />
                    </a>
                    <div className="price">
                      <b>Price: 10,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <a href="#"><img src="assets/img/100x100.png" alt="Thumb"></a>
                              </div>
                              <div class="others">
                                  <a href="#">Jonathom Kiyam</a>
                                  <div class="rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <span>4.9 (2,655)</span>
                                  </div>
                              </div> */}
                    </div>
                    <h4>
                      <a href="#">Cyber Security</a>
                    </h4>
                    {/* <p>
                              Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.
                          </p> */}
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 79
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 72:00hrs
                        </li>
                      </ul>
                      <a href="live-chat-gpt.html">Know More</a>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Popular Courses */}
      {/* Start Fun Factor 
    ============================================= */}
      <div
        className="fun-factor-area default-padding bottom-less text-center bg-fixed shadow dark-hard"
        style={{ backgroundImage: "url(assets/img/number bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 item">
              <div className="fun-fact">
                <div className="icon">
                  <i className="flaticon-contract" />
                </div>
                <div className="info">
                  {/* <span className="timer" data-to={1000} data-speed={5000} /> */}
                  <div className="timer">
                    <NumberIncrementor n={1000} />
                  </div>
                  <span className="medium">No Of Students Enrolled</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 item">
              <div className="fun-fact">
                <div className="icon">
                  <i className="flaticon-professor" />
                </div>
                <div className="info">
                  <div className="timer">
                    <NumberIncrementor n={100} />
                  </div>
                  <span className="medium">Mentors Enrolled</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 item">
              <div className="fun-fact">
                <div className="icon">
                  <i className="flaticon-online" />
                </div>
                <div className="info">
                  <div className="timer">
                    <NumberIncrementor n={250} />
                  </div>
                  <span className="medium">Job Placements</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 item">
              <div className="fun-fact">
                <div className="icon">
                  <i className="flaticon-reading" />
                </div>
                <div className="info">
                  <div className="timer">
                    <NumberIncrementor n={1000} />
                  </div>
                  <span className="medium">Certificates Issued</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        id="advisor"
        className="advisor-area bg-gray carousel-shadow default-padding bottom-less"
      >
        <div className="container">
          <div className="row">
            <div className="site-heading text-center">
              <div className="col-md-8 col-md-offset-2">
                <h2>Certified Mentors</h2>
                <p></p>
              </div>
            </div>
          </div>
          <div className="certificate-section">
            <div className="info-certified">
              <img src={ibm} alt="Thumb" />
            </div>
            <div className="info-certified">
              <img src={google} alt="Thumb" />
            </div>
            <div className="info-certified">
              <img src={nsdc} alt="Thumb" />
            </div>
          </div>
        </div>
      </section>
      {/*End Advisor Area */}
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
          <div className="student-review-section">
            <StudentReview
              domainInfo={
                "I cannot thank the training and placement department of SEOAK enough for their unwavering dedication to providing exceptional training and creating abundant placement opportunities."
              }
              studentName={"Praveen"}
              studentDomain={"Full Stack Web Development"}
            />
            <StudentReview
              domainInfo={
                "I cannot thank the training and placement department of SEOAK enough for their unwavering dedication to providing exceptional training and creating abundant placement opportunities."
              }
              studentName={"Praveen"}
              studentDomain={"Full Stack Web Development"}
            />
            <StudentReview
              domainInfo={
                "I cannot thank the training and placement department of SEOAK enough for their unwavering dedication to providing exceptional training and creating abundant placement opportunities."
              }
              studentName={"Praveen"}
              studentDomain={"Full Stack Web Development"}
            />
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="clients-review-carousel owl-carousel owl-theme">
                {/* Single Item */}
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
      <section
        id="advisor"
        className="advisor-area bg-gray carousel-shadow default-padding bottom-less"
      >
        <div className="container">
          <div className="row">
            <div className="site-heading text-center">
              <div className="col-md-8 col-md-offset-2">
                <h2>Certificates </h2>
                <p></p>
              </div>
            </div>
          </div>
          <div className="certificate-section">
            <div className="certificate-card">
              <img src={trainingcertificate} alt="Thumb" />
              <div className="info-box">
                <div className="inform-title">
                  <h4 className="certificate-title">
                    Training Completion Certificate
                  </h4>
                </div>
              </div>
            </div>
            <div className="certificate-card">
              <img src={courseCompletion} alt="Thumb" />
              <div className="info-box">
                <div className="inform-title">
                  <h4 className="certificate-title">
                    Course Completion Certificate
                  </h4>
                </div>
              </div>
            </div>
            <div className="certificate-card">
              <img src={ActivePerformer} alt="Thumb" />
              <div className="info-box">
                <div className="inform-title">
                  <h4 className="certificate-title">
                    Active Performer Certificate
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="advisor-items advisor-carousel-solid owl-carousel owl-theme text-center text-light">
                {/* Single Item */}
                <div className="advisor-item">
                  <div className="info-box"></div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="advisor-item">
                  <div className="info-box">
                    <div className="info-title">
                      <h4>Training Completion Certificate</h4>
                    </div>
                  </div>
                </div>
                <div className="advisor-item">
                  <div className="info-box">
                    <div className="info-title">
                      <h4>Active Performer Certificate</h4>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="reg-area default-padding-top bg-gray">
        <div className="container">
          <div className="row">
            <div className="reg-items">
              <div className="col-md-6 reg-form default-padding-bottom">
                <div className="site-heading text-left">
                  <h2>Apply For A Free Online Registration</h2>
                  <p></p>
                </div>
                <form action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="First Name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Last Name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Email*"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <select>
                          <option value={1}>Choose Subject</option>
                          <option value={2}>Full Stack Web Development</option>
                          <option value={4}>Data Science</option>
                          <option value={5}>Cloud Computing</option>
                          <option value={6}>Cyber Security</option>
                          <option value={7}>Advanced AI</option>
                          <option value={8}>Chat GPT</option>
                          <option value={9}>C Language</option>
                          <option value={10}>C++ Language</option>
                          <option value={11}>Java Programming</option>
                          <option value={12}>Power BI</option>
                          <option value={13}>Python</option>
                          <option value={14}>
                            DSA (Data Science Algorithm)
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Phone"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeM_1nUTx2DaBUxSR5xXgoTjKfE71wt0trYPAHYSf8t5QWB8g/viewform">
                        <button type="button">Register Now</button>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6 thumb">
                <img src={contactform} alt="Thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Registration */}
      <form
        id="one-on-one"
        className="mfp-hide white-popup-block promise-points"
      >
        <h4>ONE ON ONE INTERACTION</h4>
        <div>
          <ul>
            <li>
              we believe in providing a personalized and engaging learning
              experience, and this new feature is designed to bring the
              classroom right to your doorstep.
            </li>
            <li>
              During these one-on-one sessions, you will have the undivided
              attention of your instructor. This means you can clarify doubts,
              seek additional explanations, or ask for further examples, all at
              your own pace.
            </li>
            <li>
              We understand that everyone has different learning styles and
              needs. With one-on-one interactions, your educator can adapt their
              teaching approach to match your preferred learning style, ensuring
              you grasp the concepts effectively.
            </li>
            <li>
              We believe that one-on-one interactions will enhance your learning
              experience and enable you to reach your full potential.
            </li>
          </ul>
        </div>
      </form>
      <form
        id="real-time"
        className="mfp-hide white-popup-block promise-points"
      >
        <h4>REAL TIME PROJECTS</h4>
        <div>
          <ul>
            <li>
              We understand that theoretical knowledge is important, but
              practical application is equally crucial in today's dynamic
              world.That's why we are bringing you the opportunity to work on
              real-world projects that will sharpen your skills and prepare you
              for success.
            </li>
            <li>
              Real-time projects offer you the chance to apply what you have
              learned in a hands-on, real-world context.
            </li>
            <li>
              Through these projects, you will learn to analyze situations,
              think critically, and come up with innovative solutions, enhancing
              your problem-solving abilities.
            </li>
            <li>
              Our real-time projects are designed to mirror the challenges and
              requirements of the industry. By working on these projects, you
              will gain insights into the current trends, technologies, and best
              practices, making you job-ready and adaptable to the ever-evolving
              professional landscape.
            </li>
            <li>
              Get ready to unleash your potential and embark on an exciting
              journey of learning, growth, and innovation with our real-time
              projects.
            </li>
          </ul>
        </div>
      </form>
      <form
        id="lms-access"
        className="mfp-hide white-popup-block promise-points"
      >
        <h4>LMS ACCESS TO ALL THE COURSES</h4>
        <div>
          <ul>
            <li>
              We provide you with unlimited access to all our courses through
              our Learning Management System (LMS)!
            </li>
            <li>
              We believe that knowledge should be easily accessible and that you
              should have the freedom to explore and learn at your own pace.
            </li>
            <li>
              With our LMS, you now have the opportunity to explore a diverse
              range of courses, covering various subjects and disciplines.
            </li>
            <li>
              Our LMS allows you to access the courses anytime, anywhere, and on
              any device. Whether you prefer learning in the comfort of your
              home, during your daily commute, or even on vacation, our platform
              is designed to fit seamlessly into your lifestyle.
            </li>
            <li>
              Our LMS provides a wealth of learning resources to complement your
              courses. You'll have access to interactive quizzes, assignments,
              videos, e-books, and supplementary materials that deepen your
              understanding of the subject matter.
            </li>
          </ul>
        </div>
      </form>
      <form
        id="live-projects"
        className="mfp-hide white-popup-block promise-points"
      >
        <h4>LIVE PROJECTS</h4>
        <div>
          <ul>
            <li>
              We believe that hands-on application of knowledge is crucial in
              today's competitive landscape, and our Live Projects feature is
              designed to bridge the gap between theory and practice.
            </li>
            <li>
              Live Projects enable you to work on actual projects that simulate
              real-life scenarios. This hands-on experience allows you to apply
              the concepts you've learned in a practical setting, providing you
              with invaluable insights and skills
            </li>
            <li>
              By working on these projects, you will develop skills that are
              highly sought after by employers, making you job-ready and
              adaptable in today's fast-paced professional world.
            </li>
            <li>
              Live Projects often involve teamwork and collaboration, providing
              you with the opportunity to work with fellow students
            </li>
          </ul>
        </div>
      </form>
      <form
        id="scholarships"
        className="mfp-hide white-popup-block promise-points"
      >
        <h4>SCHOLARSHIPS</h4>
        <div>
          <ul>
            <li>
              We are delighted to announce that SEOAK is introducing
              scholarships to support your educational journey and make quality
              learning accessible to all.
            </li>
            <li>
              Our scholarships provide financial assistance to deserving
              students who demonstrate a strong passion for learning and a
              commitment to course exellence.
            </li>
            <li>
              We believe in equal opportunities for all students, regardless of
              their socio-economic background. Our scholarships are designed to
              level the playing field, providing support to talented students
              who may not have the means to pursue their educational aspirations
              otherwise.
            </li>
            <li>
              As a scholarship recipient, you will have access to our premium
              learning resources, including courses, study materials, and
              interactive tools.{" "}
            </li>
            <li>
              We encourage you to explore our scholarship opportunities and
              apply. Your dedication and commitment to learning deserve to be
              recognized and supported.
            </li>
          </ul>
        </div>
      </form>
      <form
        id="updated-curriculam"
        className="mfp-hide white-popup-block promise-points"
      >
        <h4>UPDATED CURRICULUMS</h4>
        <div>
          <ul>
            <li>
              we have revamped our curriculums to provide you with the most
              updated and relevant content for your educational journey.{" "}
            </li>
            <li>
              Our team of experts has worked tirelessly to ensure that our
              curriculums incorporate the latest advancements, trends, and
              insights in each subject area. You can trust that you are learning
              the most up-to-date information, empowering you to stay relevant
              and competitive.
            </li>
            <li>
              We understand the importance of preparing you for real-world
              challenges. Our updated curriculums focus on developing skills
              that are in high demand across various industries.
            </li>
            <li>
              We recognize that every student is unique, with different learning
              styles and needs. Our updated curriculums incorporate personalized
              learning approaches, allowing you to learn at your own pace and
              explore topics that interest you the most.
            </li>
          </ul>
        </div>
      </form>
      <form
        id="certified-mentors"
        className="mfp-hide white-popup-block promise-points"
      >
        <h4>CERTIFIED MENTORS</h4>
        <div>
          <ul>
            <li>
              We have partnered with Certified Mentors who are experts in their
              respective fields, ready to empower you with personalized guidance
              and mentorship throughout your educational journey.
            </li>
            <li>
              Our Certified Mentors bring a wealth of expertise and real-world
              experience to the table.
            </li>
            <li>
              Our Certified Mentors understand that every student is unique,
              with different strengths, weaknesses, and learning styles. They
              provide personalized guidance tailored to your specific needs,
              ensuring that you receive the support necessary to overcome
              challenges and achieve your goals.
            </li>
            <li>
              They act as mentors, providing guidance, motivation, and
              inspiration to help you navigate through your educational journey.{" "}
            </li>
            <li>
              Our Certified Mentors are committed to your growth and success.
              They provide ongoing support and feedback, tracking your progress,
              and helping you overcome challenges along the way.
            </li>
          </ul>
        </div>
      </form>
      <form
        id="paid-internships"
        className="mfp-hide white-popup-block promise-points"
      >
        <h4>PAID INTERNSHIPS</h4>
        <div>
          <ul>
            <li>
              SEOAK is introducing a unique and rewarding internship program
              that offers paid internships for students at every level, from
              startups to multinational corporations, based on their performance
              and achievements
            </li>
            <li>
              SEOAK is now offering paid internships to students like you,
              providing you with a valuable opportunity to apply your knowledge,
              develop skills, and make a real impact in the world of education
              and technology.
            </li>
            <li>
              Our paid internships offer you the chance to gain hands-on
              experience in a professional setting.
            </li>
            <li>
              Our paid internships provide you with invaluable practical
              experience in real-world settings. You will have the opportunity
              to work on meaningful projects, contribute to business operations,
              and gain hands-on experience in your chosen field.
            </li>
            <li>
              Performance based paid internship will be provided to the
              students.
            </li>
          </ul>
        </div>
      </form>
      {/* Start Footer 
    ============================================= */}
      <footer className="bg-dark default-padding-top text-light">
        <div className="container">
          <div className="row">
            <div className="f-items">
              <div className="col-md-4 item">
                <div className="f-item">
                  <img src={logolight} alt="Logo" />
                  <p>
                    At Seoak, we take pride in our team of highly talented
                    professionals who possess over 15 years of combined
                    experience in the fields of Information Technology and
                    Corporate Training. Our primary objective is to bridge the
                    growing gap between industry requirements and the skills
                    possessed by prospective employees, particularly graduates
                    interested in the area of Information Technology.{" "}
                  </p>
                  <div className="subscribe">
                    <form action="#">
                      <div className="input-group stylish-input-group">
                        <input
                          type="email"
                          placeholder="Enter your e-mail here"
                          className="form-control"
                          name="email"
                        />
                        <button type="submit">
                          <i className="fa fa-paper-plane" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 item">
                <div className="f-item link">
                  <h4>Top Courses</h4>
                  <ul>
                    <li>
                      <a href="full-stack-development.html">
                        Full Stack Web Development
                      </a>
                    </li>
                    <li>
                      <a href="data-science.html">Data Science</a>
                    </li>
                    <li>
                      <a href="cloud-computing.html">Cloud Computing</a>
                    </li>
                    <li>
                      <a href="cyber-security.html">Cyber Security</a>
                    </li>
                    <li>
                      <a href="advanced-ai.html">Advanced AI</a>
                    </li>
                    <li>
                      <a href="chat-gpt.html">Chat GPT</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 item">
                <div className="f-item link">
                  <h4>Use Full Links</h4>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about-us.html">About us</a>
                    </li>
                    <li>
                      <a href="certified-courses.html">Certified Courses</a>
                    </li>
                    <li>
                      <a href="#">Our Gallery</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact us</a>
                    </li>
                    <li>
                      <a href="faq.html">Faq's</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 item">
                <div className="f-item address">
                  <h4>Address</h4>
                  <ul>
                    <li>
                      <i className="fas fa-envelope" />
                      <p>
                        Email{" "}
                        <span>
                          <a href="mailto:">support@seoak.in</a>
                        </span>
                      </p>
                    </li>
                    <li>
                      <i className="fas fa-map" />
                      <p>
                        Office <span> Madhapur, Hyderabad.</span>
                      </p>
                    </li>
                  </ul>
                  {/* <div class="opening-info">
                          <h5>Opening Hours</h5>
                          <ul>
                              <li> <span> Tue - Sun :  </span>
                                <div class="pull-right"> 10.00 am - 08.00 pm </div>
                              </li>
                              <li> <span> Mon : </span>
                                <div class="pull-right closed"> Closed </div>
                              </li>
                          </ul>
                      </div> */}
                  <h4 style={{ margin: "16px 0" }}>SOCIAL MEDIA</h4>
                  <div className="social-media-links">
                    <li style={{ gap: 10, display: "flex" }}>
                      <a href="https://www.facebook.com/seoakofficial">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://www.instagram.com/seoakofficial/">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="https://twitter.com/seoakofficial">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="https://youtube.com/@SeoakIndia">
                        <i className="fab fa-youtube" />
                      </a>
                      <a href="https://www.linkedin.com/company/seaokofficial/">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-6">
                  <p>
                    © Copyright 2023. All Rights Reserved by{" "}
                    <a href="#">SEOAK</a> Developed By <a href="#">RAAB</a>
                  </p>
                </div>
                <div className="col-md-6 text-right link">
                  <ul>
                    <li>
                      <a href="./terms-and-conditions.html">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a href="./privacy-policy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="./refund-policy.html">Refund Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Bottom */}
      </footer>
      {/* End Footer */}
      {/* jQuery Frameworks
    ============================================= */}
    </>
  );
};

export default HostPage;
