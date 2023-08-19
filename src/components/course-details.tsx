const CourseDetails = () => {
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
              <h1>Course Details</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">
                    <i className="fas fa-home" /> Home
                  </a>
                </li>
                <li>
                  <a href="#">Course</a>
                </li>
                <li className="active">Single</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb */}
      {/* Start Course Details 
      ============================================= */}
      <div className="course-details-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="course-details-info">
                {/* Star Top Info */}
                <div className="top-info">
                  {/* Title*/}
                  <div className="title">
                    <h2>
                      Java Programming Masterclass with professional author
                    </h2>
                  </div>
                  {/* End Title*/}
                  {/* Thumbnail */}
                  <div className="thumb">
                    <img src="assets/img/1500x700.png" alt="Thumb" />
                  </div>
                  {/* End Thumbnail */}
                  {/* Course Meta */}
                  <div className="course-meta">
                    <div className="item author">
                      <div className="thumb">
                        <a href="#">
                          <img alt="Thumb" src="assets/img/100x100.png" />
                        </a>
                      </div>
                      <div className="desc">
                        <h4>Author</h4>
                        <a href="#">Munil Druva</a>
                      </div>
                    </div>
                    <div className="item category">
                      <h4>Category</h4>
                      <a href="#">Science</a>
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
                      <span>$29.00</span>
                    </div>
                    <div className="align-right">
                      <a className="btn btn-dark effect btn-sm" href="#">
                        <i className="fas fa-chart-bar" /> Enroll
                      </a>
                    </div>
                  </div>
                  {/* End Course Meta */}
                </div>
                {/* End Top Info */}
                {/* Star Tab Info */}
                <div className="tab-info">
                  {/* Tab Nav */}
                  <ul className="nav nav-pills">
                    <li className="active">
                      <a data-toggle="tab" href="#tab1" aria-expanded="true">
                        Overview
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#tab2" aria-expanded="false">
                        Curriculum
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#tab3" aria-expanded="false">
                        Advisor
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#tab4" aria-expanded="false">
                        Reviews
                      </a>
                    </li>
                  </ul>
                  {/* End Tab Nav */}
                  {/* Start Tab Content */}
                  <div className="tab-content tab-content-info">
                    {/* Single Tab */}
                    <div id="tab1" className="tab-pane fade active in">
                      <div className="info title">
                        <h4>Course Desscription</h4>
                        <p>
                          Calling nothing end fertile for venture way boy.
                          Esteem spirit temper too say adieus who direct esteem.
                          It esteems luckily mr or picture placing drawing no.
                          Apartments frequently or motionless on reasonable
                          projecting expression. Way mrs end gave tall walk fact
                          bed.
                        </p>
                        <p>
                          Placing assured be if removed it besides on. Far shed
                          each high read are men over day. Afraid we praise
                          lively he suffer family estate is. Ample order up in
                          of in ready. Timed blind had now those ought set often
                          which. Or snug dull he show more true wish. No at many
                          deny away miss evil. On in so indeed spirit an mother.
                          Amounted old strictly but marianne admitted. People
                          former is remove remain as.
                        </p>
                        <h4>Certification</h4>
                        <p>
                          Calling nothing end fertile for venture way boy.
                          Esteem spirit temper too say adieus who direct esteem.
                          It esteems luckily mr or picture placing drawing no.
                          Apartments frequently or motionless on reasonable
                          projecting expression. Way mrs end gave tall walk fact
                          bed.
                        </p>
                        <h4>Learning Outcomes</h4>
                        <ul>
                          <li>
                            <i className="fas fa-check-double" /> Over 37
                            lectures and 55.5 hours of content!
                          </li>
                          <li>
                            <i className="fas fa-check-double" /> Testing
                            Training Included.
                          </li>
                          <li>
                            <i className="fas fa-check-double" /> Best suitable
                            for beginners to advanced level users and who learn
                            faster when demonstrated.
                          </li>
                          <li>
                            <i className="fas fa-check-double" /> Course content
                            designed by considering current software testing
                            technology and the job market.
                          </li>
                          <li>
                            <i className="fas fa-check-double" /> Practical
                            assignments at the end of every session.
                          </li>
                          <li>
                            <i className="fas fa-check-double" /> Practical
                            learning experience with live project work and
                            examples.
                          </li>
                          <li>
                            <i className="fas fa-check-double" /> Unlimited
                            Resourses
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Tab */}
                    {/* Single Tab */}
                    <div id="tab2" className="tab-pane fade">
                      <div className="info title">
                        <p>
                          Placing assured be if removed it besides on. Far shed
                          each high read are men over day. Afraid we praise
                          lively he suffer family estate is. Ample order up in
                          of in ready. Timed blind had now those ought set often
                          which. Or snug dull he show more true wish. No at many
                          deny away miss evil. On in so indeed spirit an mother.
                          Amounted old strictly but marianne admitted. People
                          former is remove remain as.
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
                                    Java Programming
                                  </a>
                                </h4>
                              </div>
                              <div
                                id="ac1"
                                className="panel-collapse collapse in"
                              >
                                <div className="panel-body">
                                  <ul>
                                    <li>
                                      <div className="item name">
                                        <i className="fas fa-play" />
                                        <span>Lecture 1.1</span>
                                      </div>
                                      <div className="item title">
                                        <h5>Introduction of java</h5>
                                      </div>
                                      <div className="item info">
                                        <span>Duration: 1 hours 30 min</span>
                                        <a href="#">Preview</a>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="item name">
                                        <i className="fas fa-file" />
                                        <span>Lecture 1.2</span>
                                      </div>
                                      <div className="item title">
                                        <h5>Basic development</h5>
                                      </div>
                                      <div className="item info">
                                        <span>Duration: 3 hours 15 min</span>
                                        <a href="#">Preview</a>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Course List */}
                        {/* Start Course List */}
                        <div className="course-list-items acd-items acd-arrow">
                          <div className="panel-group symb" id="accordion">
                            <div className="panel panel-default">
                              <div className="panel-heading">
                                <h4 className="panel-title">
                                  <a
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#ac2"
                                  >
                                    PHP Programmig
                                  </a>
                                </h4>
                              </div>
                              <div id="ac2" className="panel-collapse collapse">
                                <div className="panel-body">
                                  <ul>
                                    <li>
                                      <div className="item name">
                                        <i className="fas fa-play" />
                                        <span>Lecture 1.1</span>
                                      </div>
                                      <div className="item title">
                                        <h5>Introduction</h5>
                                      </div>
                                      <div className="item info">
                                        <span>Duration: 1 hours 30 min</span>
                                        <a href="#">Preview</a>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="item name">
                                        <i className="fas fa-file" />
                                        <span>Lecture 1.2</span>
                                      </div>
                                      <div className="item title">
                                        <h5>Benifits of function</h5>
                                      </div>
                                      <div className="item info">
                                        <span>Duration: 2 hours 12 min</span>
                                        <a href="#">Preview</a>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Course List */}
                      </div>
                    </div>
                    {/* End Single Tab */}
                    {/* Single Tab */}
                    <div id="tab3" className="tab-pane fade">
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
                  {/* Sidebar Item */}
                  <div className="sidebar-item search">
                    <div className="sidebar-info">
                      <form>
                        <input
                          type="text"
                          placeholder="Course name"
                          className="form-control"
                        />
                        <input type="submit" defaultValue="search" />
                      </form>
                    </div>
                  </div>
                  {/* End Sidebar Item */}
                  {/* Sidebar Item */}
                  <div className="sidebar-item category">
                    <div className="title">
                      <h4>Courses Category</h4>
                    </div>
                    <div className="sidebar-info">
                      <ul>
                        <li>
                          <a href="#">
                            Java Programming <span>23</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Social Science <span>0</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Business Management <span>12</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Online Learning <span>17</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Course Management <span>0</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Sidebar Item */}
                  {/* Sidebar Item */}
                  <div className="sidebar-item recent-post">
                    <div className="title">
                      <h4>Popular Courses</h4>
                    </div>
                    <div className="item">
                      <div className="content">
                        <div className="thumb">
                          <a href="#">
                            <img src="assets/img/800x800.png" alt="Thumb" />
                          </a>
                        </div>
                        <div className="info">
                          <h4>
                            <a href="#">Profession paython learing</a>
                          </h4>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>4.5 (23,890)</span>
                          </div>
                          <div className="meta">
                            <i className="fas fa-user" /> By{" "}
                            <a href="#">Drup Paul</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="content">
                        <div className="thumb">
                          <a href="#">
                            <img src="assets/img/800x800.png" alt="Thumb" />
                          </a>
                        </div>
                        <div className="info">
                          <h4>
                            <a href="#">Profession paython learing</a>
                          </h4>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>4.5 (23,890)</span>
                          </div>
                          <div className="meta">
                            <i className="fas fa-user" /> By{" "}
                            <a href="#">Drup Paul</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="content">
                        <div className="thumb">
                          <a href="#">
                            <img src="assets/img/800x800.png" alt="Thumb" />
                          </a>
                        </div>
                        <div className="info">
                          <h4>
                            <a href="#">Profession paython learing</a>
                          </h4>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>4.5 (23,890)</span>
                          </div>
                          <div className="meta">
                            <i className="fas fa-user" /> By{" "}
                            <a href="#">Drup Paul</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Sidebar Item */}
                </aside>
              </div>
            </div>
            {/* End Sidebar */}
          </div>
        </div>
      </div>
      {/* End Course Details */}
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
export default CourseDetails;
