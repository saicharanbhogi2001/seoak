import HeaderInformation from "../atoms/navigation.tsx";

const AboutUs = () => {
  return (
    <>
      <HeaderInformation />
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
                <img src="assets/img/logo.png" className="logo" alt="Logo" />
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
      {/* Start Breadcrumb 
      ============================================= */}
      <div
        className="breadcrumb-area shadow dark text-center bg-fixed text-light"
        style={{ backgroundImage: "url(assets/img/about-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>About SEOAK</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">
                    <i className="fas fa-home" /> Home
                  </a>
                </li>
                <li className="active">About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb */}
      {/* Start About 
      ============================================= */}
      <div className="about-area default-padding">
        <div className="container">
          <div className="row">
            <div className="about-info">
              <div className="col-md-6 thumb">
                <img src="assets/img/800x800.png" alt="Thumb" />
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
                {/* <a href="about-us.html" class="btn btn-dark border btn-md"></a> */}
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
                        <a className="popup-youtube video-play-button" href="#">
                          <i className="fa fa-play" />
                        </a>
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
      {/* Start Advisor Area
      ============================================= */}
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
          <div className="row">
            <div className="col-md-12">
              <div className="advisor-items advisor-carousel-solid owl-carousel owl-theme text-center text-light">
                {/* Single Item */}
                <div className="advisor-item">
                  <div className="info-box">
                    <img src="assets/img/microsoft800,600.png" alt="Thumb" />
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="advisor-item">
                  <div className="info-box">
                    <img src="assets/img/ibm800,600.png" alt="Thumb" />
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="advisor-item">
                  <div className="info-box">
                    <img src="assets/img/google800,600.png" alt="Thumb" />
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="advisor-item">
                  <div className="info-box">
                    <img src="assets/img/nsdc800,600.png" alt="Thumb" />
                  </div>
                </div>
                {/* Single Item */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Advisor Area */}
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
                <h2>KNOW MORE ABOUT SEOAK IN A SHORT VIDEO.</h2>
                {/* <p>
                        Tolerably behaviour may admitting daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in. Merits ye if mr narrow points. Melancholy particular devonshire alteration it favourable appearance
                    </p> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="video-info">
              <div className="overlay-video">
                <a className="popup-youtube video-play-button" href="#">
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Video Area */}
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
                          <option value={2}>Computer Engineering</option>
                          <option value={4}>Accounting Technologies</option>
                          <option value={5}>Web Development</option>
                          <option value={6}>Machine Language</option>
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
                      <button type="submit">Register Now</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6 thumb">
                <img src="assets/img/contactform800,800.png" alt="Thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Registration */}
      {/* Start Footer 
      ============================================= */}
      <footer className="bg-dark default-padding-top text-light">
        <div className="container">
          <div className="row">
            <div className="f-items">
              <div className="col-md-4 item">
                <div className="f-item">
                  <img src="assets/img/logo-light.png" alt="Logo" />
                  <p>
                    At Seoak, we take pride in our team of highly talented
                    professionals who possess over 15 years of combined
                    experience in the fields of Information Technology and
                    Corporate Training. Our primary objective is to bridge the
                    growing gap between industry requirements and the skills
                    possessed by prospective employees, particularly graduates
                    interested in the area of Information Technology.
                  </p>
                  <p className="text-italic">
                    Please write your email and get our amazing updates, news
                    and support
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
                      <a href="full-stack-development.html">Full Stack</a>
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
                      <a href="">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="">
                        <i className="fab fa-youtube" />
                      </a>
                      <a href="">
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

export default AboutUs;
