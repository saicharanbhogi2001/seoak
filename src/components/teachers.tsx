export const Teachers = () => {
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
                    California, TX 70240
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-envelope-open" /> Email
                    </span>
                    Info@gmail.com
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-phone" /> Contact
                    </span>
                    +123 456 7890
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
              <h1>Advisor</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">
                    <i className="fas fa-home" /> Home
                  </a>
                </li>
                <li>
                  <a href="#">Page</a>
                </li>
                <li className="active">Advisor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb */}
      {/* Start Advisor Area
      ============================================= */}
      <section id="advisor" className="advisor-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="advisor-carousel owl-carousel owl-theme text-center text-light">
                {/* Single Item */}
                <div className="advisor-item">
                  <div className="info-box">
                    <img src="assets/img/800x800.png" alt="Thumb" />
                    <div className="info-title">
                      <h4>Professon. Nuri Paul</h4>
                      <span>Chemistry specialist</span>
                    </div>
                    <div className="overlay">
                      <div className="box">
                        <div className="content">
                          <div className="overlay-content">
                            <h4>About Nuri Paul</h4>
                            <p>
                              Great explorer of the truth, the master-builder of
                              human happiness.
                            </p>
                            <a href="#">Read More</a>
                            <div className="social">
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
                                    <i className="fab fa-pinterest" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-instagram" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="advisor-item">
                  <div className="info-box">
                    <img src="assets/img/800x800.png" alt="Thumb" />
                    <div className="info-title">
                      <h4>John Babu</h4>
                      <span>Interactive Designer</span>
                    </div>
                    <div className="overlay">
                      <div className="box">
                        <div className="content">
                          <div className="overlay-content">
                            <h4>About John Babu</h4>
                            <p>
                              Great explorer of the truth, the master-builder of
                              human happiness.
                            </p>
                            <a href="#">Read More</a>
                            <div className="social">
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
                                    <i className="fab fa-pinterest" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-instagram" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="advisor-item">
                  <div className="info-box">
                    <img src="assets/img/800x800.png" alt="Thumb" />
                    <div className="info-title">
                      <h4>Mridul Druva</h4>
                      <span>Creative developer</span>
                    </div>
                    <div className="overlay">
                      <div className="box">
                        <div className="content">
                          <div className="overlay-content">
                            <h4>About Mridul Druva</h4>
                            <p>
                              Great explorer of the truth, the master-builder of
                              human happiness.
                            </p>
                            <a href="#">Read More</a>
                            <div className="social">
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
                                    <i className="fab fa-pinterest" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-instagram" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="advisor-item">
                  <div className="info-box">
                    <img src="assets/img/800x800.png" alt="Thumb" />
                    <div className="info-title">
                      <h4>Sufia Nilla</h4>
                      <span>Project Manager</span>
                    </div>
                    <div className="overlay">
                      <div className="box">
                        <div className="content">
                          <div className="overlay-content">
                            <h4>About Sufia Nilla</h4>
                            <p>
                              Great explorer of the truth, the master-builder of
                              human happiness.
                            </p>
                            <a href="#">Read More</a>
                            <div className="social">
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
                                    <i className="fab fa-pinterest" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-instagram" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="advisor-item">
                  <div className="info-box">
                    <img src="assets/img/800x800.png" alt="Thumb" />
                    <div className="info-title">
                      <h4>Professon. Nuri Paul</h4>
                      <span>Chemistry specialist</span>
                    </div>
                    <div className="overlay">
                      <div className="box">
                        <div className="content">
                          <div className="overlay-content">
                            <h4>About Nuri Paul</h4>
                            <p>
                              Great explorer of the truth, the master-builder of
                              human happiness.
                            </p>
                            <a href="#">Read More</a>
                            <div className="social">
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
                                    <i className="fab fa-pinterest" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-instagram" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
              </div>
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
                <p>
                  Able an hope of body. Any nay shyness article matters own
                  removal nothing his forming. Gay own additions education
                  satisfied the perpetual. If he cause manor happy. Without
                  farther she exposed saw man led. Along on happy could cease
                  green oh.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="clients-review-carousel owl-carousel owl-theme">
                {/* Single Item */}
                <div className="item">
                  <div className="col-md-5 thumb">
                    <img src="assets/img/800x800.png" alt="Thumb" />
                  </div>
                  <div className="col-md-7 info">
                    <p>
                      Procuring continued suspicion its ten. Pursuit brother are
                      had fifteen distant has. Early had add equal china quiet
                      visit. Appear an manner as no limits either praise..
                    </p>
                    <h4>Druna Patia</h4>
                    <span>Biology Student</span>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="col-md-5 thumb">
                    <img src="assets/img/800x800.png" alt="Thumb" />
                  </div>
                  <div className="col-md-7 info">
                    <p>
                      Procuring continued suspicion its ten. Pursuit brother are
                      had fifteen distant has. Early had add equal china quiet
                      visit. Appear an manner as no limits either praise..
                    </p>
                    <h4>Astron Brun</h4>
                    <span>Science Student</span>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="col-md-5 thumb">
                    <img src="assets/img/800x800.png" alt="Thumb" />
                  </div>
                  <div className="col-md-7 info">
                    <p>
                      Procuring continued suspicion its ten. Pursuit brother are
                      had fifteen distant has. Early had add equal china quiet
                      visit. Appear an manner as no limits either praise..
                    </p>
                    <h4>Paol Druva</h4>
                    <span>Development Student</span>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="col-md-5 thumb">
                    <img src="assets/img/800x800.png" alt="Thumb" />
                  </div>
                  <div className="col-md-7 info">
                    <p>
                      Procuring continued suspicion its ten. Pursuit brother are
                      had fifteen distant has. Early had add equal china quiet
                      visit. Appear an manner as no limits either praise..
                    </p>
                    <h4>Druna Patia</h4>
                    <span>Biology Student</span>
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
              <h4>Our largest education campus</h4>
              <p>
                Seeing rather her you not esteem men settle genius excuse. Deal
                say over you age from. Comparison new ham melancholy son
                themselves.
              </p>
            </div>
            <div className="col-md-8 clients">
              <div className="clients-items owl-carousel owl-theme text-center">
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/150x80.png" alt="Clients" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/150x80.png" alt="Clients" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/150x80.png" alt="Clients" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/150x80.png" alt="Clients" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/150x80.png" alt="Clients" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/150x80.png" alt="Clients" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/150x80.png" alt="Clients" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/150x80.png" alt="Clients" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/150x80.png" alt="Clients" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/150x80.png" alt="Clients" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Clients Area */}
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
