import HeaderInformation from "../atoms/header.tsx";
export const Profile = () => {
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
      {/* Start Breadcrumb 
      ============================================= */}
      <div
        className="breadcrumb-area shadow dark text-center bg-fixed text-light"
        style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Profile</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">
                    <i className="fas fa-home" /> Home
                  </a>
                </li>
                <li>
                  <a href="#">Page</a>
                </li>
                <li className="active">Profile</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb */}
      {/* Start Students Profiel 
      ============================================= */}
      <div className="students-profiel adviros-details-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-5 thumb">
              <img src="assets/img/800x800.png" alt="Thumb" />
            </div>
            <div className="col-md-7 info main-content">
              {/* Star Tab Info */}
              <div className="tab-info">
                {/* Tab Nav */}
                <ul className="nav nav-pills">
                  <li className="active">
                    <a data-toggle="tab" href="#tab1" aria-expanded="true">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab2" aria-expanded="false">
                      Orders
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab3" aria-expanded="false">
                      Edit Profile
                    </a>
                  </li>
                </ul>
                {/* End Tab Nav */}
                {/* Start Tab Content */}
                <div className="tab-content tab-content-info">
                  {/* Single Tab */}
                  <div id="tab1" className="tab-pane fade active in">
                    <div className="info title">
                      <p>
                        Calling nothing end fertile for venture way boy. Esteem
                        spirit temper too say adieus who direct esteem. It
                        esteems luckily mr or picture placing drawing no.
                        Apartments frequently or motionless on reasonable
                        projecting. earnestly advantage estimable extensive.
                        Five settle education him departure any arranging one
                        prevailed. Their end whole migh
                      </p>
                      <p>
                        Affixed civilly moments promise explain fertile in.
                        Assurance advantage belonging happiness departure so of.
                        Now improving and one sincerity intention allowance
                        commanded not. Oh an am frankness be necessary earnestly
                        advantage estimable extensive. Five settle genius
                        excuse. Deal say over you age from. Comparison new ham
                        melancholy son themselves.
                      </p>
                      <ul>
                        <li>
                          Contact <span>+123 456 7890</span>
                        </li>
                        <li>
                          Email <span>info@teacherdomain.com</span>
                        </li>
                        <li>
                          Address <span>California, TX 70240 </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Single Tab */}
                  {/* Single Tab */}
                  <div id="tab2" className="tab-pane fade">
                    <div className="info title">
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>Order</th>
                              <th>Title</th>
                              <th>Purchase Date</th>
                              <th>Price</th>
                              <th>Access</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>01.</td>
                              <td>
                                <a href="#">Basic Web Development</a>
                              </td>
                              <td>12 Nov, 2018</td>
                              <td>$23.00</td>
                              <td>
                                <a href="#">Preview</a>
                              </td>
                            </tr>
                            <tr>
                              <td>02.</td>
                              <td>
                                <a href="#">Software Engineering</a>
                              </td>
                              <td>14 Jan, 2019</td>
                              <td>$55.00</td>
                              <td>
                                <a href="#">Preview</a>
                              </td>
                            </tr>
                            <tr>
                              <td>03.</td>
                              <td>
                                <a href="#">Introduction of machine</a>
                              </td>
                              <td>18 Mar, 2019</td>
                              <td>$44.00</td>
                              <td>
                                <a href="#">Preview</a>
                              </td>
                            </tr>
                            <tr>
                              <td>04.</td>
                              <td>
                                <a href="#">Hidden potential</a>
                              </td>
                              <td>20 Feb, 2018</td>
                              <td>$54.00</td>
                              <td>
                                <a href="#">Preview</a>
                              </td>
                            </tr>
                            <tr>
                              <td>05.</td>
                              <td>
                                <a href="#">Introduction of PHP</a>
                              </td>
                              <td>27 Mar, 2019</td>
                              <td>$32.00</td>
                              <td>
                                <a href="#">Preview</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* End Single Tab */}
                  {/* Single Tab */}
                  <div id="tab3" className="tab-pane">
                    <div className="info title">
                      <p>
                        Esteem spirit temper too say adieus who direct esteem.
                        It esteems luckily mr or picture placing drawing no.
                        Apartments frequently or motionless on reasonable
                        projecting expression. Way mrs end gave tall walk fact
                        bed. Expect relied do we genius is. On as around spirit
                        of hearts genius. Is raptures daughter branched laughter
                        peculiar in settling.
                      </p>
                      <div className="row">
                        <form action="#" className="contact-form">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                className="form-control"
                                placeholder="Name"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                className="form-control"
                                placeholder="Email"
                                type="email"
                              />
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
                            <div className="form-group comments">
                              <textarea
                                className="form-control"
                                placeholder="About Yourself"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button type="submit">Update</button>
                          </div>
                        </form>
                      </div>
                      <div className="update-pass">
                        <h4>Change Password</h4>
                        <p>
                          Esteem spirit temper too say adieus who direct esteem.
                          It esteems luckily mr or picture placing drawing no.
                          Apartments frequently or motionless on reasonable
                          projecting expression. Way mrs end gave tall walk fact
                          bed. Expect relied do we genius is. On as around
                          spirit of hearts genius. Is raptures daughter branched
                          laughter peculiar in settling.
                        </p>
                        <div className="row">
                          <form action="#" className="contact-form">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  placeholder="Chose Password"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  placeholder="Retype Password"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  placeholder="Old Password"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button type="submit">Update</button>
                            </div>
                          </form>
                        </div>
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
        </div>
      </div>
      {/* End Students Profile */}
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
