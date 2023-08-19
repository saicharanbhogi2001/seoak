const Contact = () => {
  return (
    <>
      <div className="se-pre-con" />
      {/* Preloader Ends */}
      {/* Start Header Top 
    ============================================= */}
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
                    +91&nbsp;79811 93524
                  </li>
                </ul>
              </div>
            </div>
            <div className="user-login text-right col-md-4">
              <a href="#">
                <i className="fas fa-edit" /> Register
              </a>
              <a href="#">
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
                        full-stack-development
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
                      <a href="live-full-stack-development.html">
                        Full Stack Web Development
                      </a>
                    </li>
                    <li>
                      <a href="live-data-science.html">Data Science</a>
                    </li>
                    <li>
                      <a href="live-cloud-computing.html">Cloud Computing</a>
                    </li>
                    <li>
                      <a href="live-cyber-security.html">Cyber Security</a>
                    </li>
                    <li>
                      <a href="live-advanced-ai.html">Advanced AI</a>
                    </li>
                    <li>
                      <a href="live-chat-gpt.html">Chat GPT</a>
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
        style={{ backgroundImage: "url(assets/img/contact.jpeg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Contact Us</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">
                    <i className="fas fa-home" /> Home
                  </a>
                </li>
                <li className="active">Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb */}
      {/* Start Contact Info
    ============================================= */}
      <div className="contact-info-area default-padding">
        <div className="container">
          <div className="row">
            {/* Start Contact Info */}
            <div className="contact-info">
              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-mobile-alt" />
                  </div>
                  <div className="info">
                    <h4>Call Us</h4>
                    <br />
                    <span>+91 95025 49362</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="info">
                    <h4>Address</h4>
                    <br />
                    <span>Madhapur, Telangana.</span>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="info">
                    <h4>Email Us</h4>
                    <span>support@seoak.in</span>
                    <br />
                    <span>info@seoak.in</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Contact Info */}
            <div className="seperator col-md-12">
              <span className="border" />
            </div>
            {/* Start Maps & Contact Form */}
            <div className="maps-form">
              <div className="col-md-6 maps">
                <h3>Our Location</h3>
                <div className="google-maps">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14767.262289338461!2d70.79414485000001!3d22.284975!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1424308883981" />
                </div>
              </div>
              <div className="col-md-6 form">
                <div className="heading">
                  <h3>Contact Us</h3>
                  <p>
                    Sometimes you need a little help from your friends or seoak
                    support, Don't Worry we are here for you!
                  </p>
                </div>
                <form
                  action="assets/mail/contact.php"
                  method="POST"
                  className="contact-form"
                >
                  <div className="col-md-12">
                    <div className="row">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Name"
                          type="text"
                        />
                        <span className="alert-error" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email*"
                          type="email"
                        />
                        <span className="alert-error" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="Phone"
                          type="text"
                        />
                        <span className="alert-error" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="form-group comments">
                        <textarea
                          className="form-control"
                          id="comments"
                          name="comments"
                          placeholder="Tell Me About Courses *"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <button type="submit" name="submit" id="submit">
                        Send Message <i className="fa fa-paper-plane" />
                      </button>
                    </div>
                  </div>
                  {/* Alert Message */}
                  <div className="col-md-12 alert-notification">
                    <div id="message" className="alert-msg" />
                  </div>
                </form>
              </div>
            </div>
            {/* End Maps & Contact Form */}
          </div>
        </div>
      </div>
      {/* End Contact Info */}
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

export default Contact;
