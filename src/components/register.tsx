import HeaderInformation from "../atoms/navigation.tsx";
export const Register = () => {
  return (
    <>
      <HeaderInformation />
      <header id="home">
        {/* Start Navigation */}
        <nav className="navbar navbar-default attr-border navbar-sticky bootsnav">
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
            <div className="attr-nav">
              <ul>
                <li className="search">
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                </li>
                <li className="side-menu">
                  <a href="#">
                    <i className="fa fa-bars" />
                  </a>
                </li>
              </ul>
            </div>
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
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle active"
                    data-toggle="dropdown"
                  >
                    Home
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="index.html">Home Version One</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home Version Two</a>
                    </li>
                    <li>
                      <a href="index-3.html">Home Version Three</a>
                    </li>
                    <li>
                      <a href="index-4.html">Home Version Four</a>
                    </li>
                    <li>
                      <a href="index-5.html">Home Version Five</a>
                    </li>
                    <li>
                      <a href="index-6.html">Home Version Six</a>
                    </li>
                    <li>
                      <a href="index-7.html">
                        Home Version Serven <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a href="index-onepage.html">Onepage Version One</a>
                    </li>
                    <li>
                      <a href="index-2-onepage.html">Onepage Version Two</a>
                    </li>
                    <li>
                      <a href="index-3-onepage.html">Onepage Version Three</a>
                    </li>
                    <li>
                      <a href="index-4-onepage.html">Onepage Version Four</a>
                    </li>
                    <li>
                      <a href="index-5-onepage.html">Onepage Version Five</a>
                    </li>
                    <li>
                      <a href="index-6-onepage.html">Onepage Version Six</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown megamenu-fw">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu megamenu-content" role="menu">
                    <li>
                      <div className="row">
                        <div className="col-menu col-md-3">
                          <h6 className="title">Gallery</h6>
                          <div className="content">
                            <ul className="menu-col">
                              <li>
                                <a href="gallery-2-colum.html">
                                  Gallery Two Colum
                                </a>
                              </li>
                              <li>
                                <a href="gallery-3-colum.html">
                                  Gallery Three Colum
                                </a>
                              </li>
                              <li>
                                <a href="gallery-4-colum.html">
                                  Gallery Four Colum
                                </a>
                              </li>
                              <li>
                                <a href="gallery-6-colum.html">
                                  Gallery Six Colum
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* end col-3 */}
                        <div className="col-menu col-md-3">
                          <h6 className="title">Advisor</h6>
                          <div className="content">
                            <ul className="menu-col">
                              <li>
                                <a href="advisor-carousel.html">
                                  Advisor Carousel
                                </a>
                              </li>
                              <li>
                                <a href="advisor-2-colum.html">
                                  Advisor Two Colum
                                </a>
                              </li>
                              <li>
                                <a href="advisor-3-colum.html">
                                  Advisor Three Colum
                                </a>
                              </li>
                              <li>
                                <a href="advisor-carousel-2.html">
                                  Advisor Carousel Two
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* end col-3 */}
                        <div className="col-menu col-md-3">
                          <h6 className="title">User Pages</h6>
                          <div className="content">
                            <ul className="menu-col">
                              <li>
                                <a href="profile.html">Profile</a>
                              </li>
                              <li>
                                <a href="edit-profile.html">Edit Profile</a>
                              </li>
                              <li>
                                <a href="login.html">login</a>
                              </li>
                              <li>
                                <a href="register.html">register</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* end col-3 */}
                        <div className="col-menu col-md-3">
                          <h6 className="title">Other Pages</h6>
                          <div className="content">
                            <ul className="menu-col">
                              <li>
                                <a href="about-us.html">About Us</a>
                              </li>
                              <li>
                                <a href="faq.html">Faq</a>
                              </li>
                              <li>
                                <a href="pricing-table.html">Pricing Table</a>
                              </li>
                              <li>
                                <a href="contact.html">Contact</a>
                              </li>
                              <li>
                                <a href="404.html">Error Page</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* end col-3 */}
                      </div>
                      {/* end row */}
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle active"
                    data-toggle="dropdown"
                  >
                    Courses
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="courses.html">Courses Carousel One</a>
                    </li>
                    <li>
                      <a href="courses-2.html">Courses Grid One</a>
                    </li>
                    <li>
                      <a href="courses-3.html">Courses Grid Two</a>
                    </li>
                    <li>
                      <a href="courses-4.html">Courses Carousel Two</a>
                    </li>
                    <li>
                      <a href="course-details.html">Course Details</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle active"
                    data-toggle="dropdown"
                  >
                    Teachers
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="teachers.html">Advisor</a>
                    </li>
                    <li>
                      <a href="teachers-details.html">Advisor Details</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle active"
                    data-toggle="dropdown"
                  >
                    Event
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="event.html">Event Mixed Colum</a>
                    </li>
                    <li>
                      <a href="event-2.html">Event Grid Colum</a>
                    </li>
                    <li>
                      <a href="event-3.html">Event Carousel</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog-standard.html">Blog Standard</a>
                    </li>
                    <li>
                      <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-single-standard.html">Single Standard</a>
                    </li>
                    <li>
                      <a href="blog-single-left-sidebar.html">
                        Single Left Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="blog-single-right-sidebar.html">
                        Single Right Sidebar
                      </a>
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
          {/* Start Side Menu */}
          <div className="side">
            <a href="#" className="close-side">
              <i className="fa fa-times" />
            </a>
            <div className="widget">
              <h4 className="title">Users Pages</h4>
              <div className="profile-thumb">
                <img src="assets/img/800x800.png" alt="Profile" />
              </div>
              <ul>
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <a href="#">Courses</a>
                </li>
                <li>
                  <a href="#">Recent Order</a>
                </li>
                <li>
                  <a href="#">Edit Profile</a>
                </li>
                <li>
                  <a href="#">Logout</a>
                </li>
              </ul>
            </div>
            <div className="widget">
              <h4 className="title">Additional Links</h4>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Rating</a>
                </li>
                <li>
                  <a href="#">Popular Courses</a>
                </li>
              </ul>
            </div>
            <div className="widget social">
              <h4 className="title">Connect With Us</h4>
              <ul className="link">
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
                <li className="pinterest">
                  <a href="#">
                    <i className="fab fa-pinterest" />
                  </a>
                </li>
                <li className="dribbble">
                  <a href="#">
                    <i className="fab fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* End Side Menu */}
        </nav>
        {/* End Navigation */}
      </header>
      {/* End Header */}
      {/* Start Login 
      ============================================= */}
      <div className="login-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <form action="#" id="register-form" className="white-popup-block">
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
            </div>
          </div>
        </div>
      </div>
      {/* End Login Area */}
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
                  <h4>Links</h4>
                  <ul>
                    <li>
                      <a href="#">Courses</a>
                    </li>
                    <li>
                      <a href="#">Event</a>
                    </li>
                    <li>
                      <a href="#">Gallery</a>
                    </li>
                    <li>
                      <a href="#">Faqs</a>
                    </li>
                    <li>
                      <a href="#">Teachers</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 item">
                <div className="f-item link">
                  <h4>Support</h4>
                  <ul>
                    <li>
                      <a href="#">Documentation</a>
                    </li>
                    <li>
                      <a href="#">Forums</a>
                    </li>
                    <li>
                      <a href="#">Language Packs</a>
                    </li>
                    <li>
                      <a href="#">Release Status</a>
                    </li>
                    <li>
                      <a href="#">LearnPress</a>
                    </li>
                    <li>
                      <a href="#">Feedback</a>
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
                          <a href="mailto:support@validtheme.com">
                            support@validtheme.com
                          </a>
                        </span>
                      </p>
                    </li>
                    <li>
                      <i className="fas fa-map" />
                      <p>
                        Office <span>123 6th St. Melbourne, FL 32904</span>
                      </p>
                    </li>
                  </ul>
                  <div className="opening-info">
                    <h5>Opening Hours</h5>
                    <ul>
                      <li>
                        {" "}
                        <span> Mon - Tues :</span>
                        <div className="pull-right"> 6.00 am - 10.00 pm </div>
                      </li>
                      <li>
                        {" "}
                        <span> Wednes - Thurs :</span>
                        <div className="pull-right"> 8.00 am - 6.00 pm </div>
                      </li>
                      <li>
                        {" "}
                        <span> Sun : </span>
                        <div className="pull-right closed"> Closed </div>
                      </li>
                    </ul>
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
                    © Copyright 2019. All Rights Reserved by{" "}
                    <a href="#">validthemes</a>
                  </p>
                </div>
                <div className="col-md-6 text-right link">
                  <ul>
                    <li>
                      <a href="#">Terms of user</a>
                    </li>
                    <li>
                      <a href="#">License</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
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
