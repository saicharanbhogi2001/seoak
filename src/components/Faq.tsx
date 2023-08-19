const Faq = () => {
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
              <h1>Faq</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">
                    <i className="fas fa-home" /> Home
                  </a>
                </li>
                <li className="active">Faq</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb */}
      {/* Start Faq With Left Sidebar 
    ============================================= */}
      <div className="faq-area course-details-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-md faq-content">
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
                          English and we expect candidates to know English as a
                          mandatory language to apply for the program.
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
                          Upon successful completion of this course, you will be
                          awarded with an industry-recognized certification from
                          SEOAK.
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
                          <a href="./refund-policy.html">refund policy</a> here.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Accordion */}
            </div>
            {/* Start Sidebar */}
          </div>
          {/* End Sidebar */}
        </div>
      </div>
      {/* End Faq */}
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
export default Faq;
