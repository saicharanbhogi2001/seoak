const Onepage = () => {
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
              <a className="popup-with-form" href="#register-form">
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
            <div className="attr-nav">
              <ul>
                <li className="search">
                  <a href="#">
                    <i className="fa fa-search" />
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
                <li>
                  <a className="smooth-menu" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="#courses">
                    Courses
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="#advisor">
                    Advisor
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="#event">
                    Event
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="#blog">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="#contact">
                    contact
                  </a>
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
                className="slider-thumb bg-fixed"
                style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
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
                            href="#"
                          >
                            Learn more
                          </a>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-theme effect btn-md"
                            href="#"
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
                style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
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
                            href="#"
                          >
                            Learn more
                          </a>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-theme effect btn-md"
                            href="#"
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
                style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
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
                            Join the bigest comunity of eduka
                          </h1>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-light border btn-md"
                            href="#"
                          >
                            Learn more
                          </a>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-theme effect btn-md"
                            href="#"
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
      {/* Start About 
    ============================================= */}
      <div id="about" className="about-area default-padding">
        <div className="container">
          <div className="row">
            <div className="about-info">
              <div className="col-md-6 thumb">
                <img src="assets/img/800x800.png" alt="Thumb" />
              </div>
              <div className="col-md-6 info">
                <h5>Introduction</h5>
                <h2>Welcome to the beigest online learning source of Eduka</h2>
                <p>
                  Alteration literature to or an sympathize mr imprudence. Of is
                  ferrars subject as enjoyed or tedious cottage. Procuring as in
                  resembled by in agreeable. Next long no gave mr eyes.
                  Admiration advantages no he celebrated so pianoforte
                  unreserved. Not its herself forming charmed amiable. Him why
                  feebly expect future now.
                </p>
                <p>
                  Curiosity incommode now led smallness allowance. Favour bed
                  assure son things yet. She consisted consulted elsewhere
                  happiness disposing household any old the. Widow downs.
                  Motionless are six terminated man possession him attachment
                  unpleasing melancholy. Sir smile arose one share. No abroad in
                  easily relied an whence lovers temper by. Looked wisdom common
                  he an be giving length mr. Dissuade ecstatic and properly saw
                  entirely sir why laughter. frequently apartments off all
                  discretion devonshire.
                </p>
                <a href="#" className="btn btn-dark border btn-md">
                  Read More
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
                    <a href="#">Read More</a>
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
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="item malachite">
                  <div className="icon">
                    <i className="flaticon-education" />
                  </div>
                  <div className="info">
                    <h4>Scholarship</h4>
                    <a href="#">Read More</a>
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
            />
            <div className="col-md-6 content">
              <div className="site-heading text-left">
                <h2>Why chose us</h2>
                <p>
                  Discourse assurance estimable applauded to so. Him everything
                  melancholy uncommonly but solicitude inhabiting projection
                  off. Connection stimulated estimating excellence an to
                  impression.
                </p>
              </div>
              {/* item */}
              <div className="item">
                <div className="icon">
                  <i className="flaticon-trending" />
                </div>
                <div className="info">
                  <h4>
                    <a href="#">Trending Courses</a>
                  </h4>
                  <p>
                    Absolute required of reserved in offering no. How sense
                    found our those gay again taken the. Had mrs outweigh
                    desirous sex overcame. Improved property reserved disposal
                    do offering me.
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
                    <a href="#">Books &amp; Library</a>
                  </h4>
                  <p>
                    Absolute required of reserved in offering no. How sense
                    found our those gay again taken the. Had mrs outweigh
                    desirous sex overcame. Improved property reserved disposal
                    do offering me.
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
                    <a href="#">Certified Teachers</a>
                  </h4>
                  <p>
                    Absolute required of reserved in offering no. How sense
                    found our those gay again taken the. Had mrs outweigh
                    desirous sex overcame. Improved property reserved disposal
                    do offering me.
                  </p>
                </div>
              </div>
              {/* item */}
            </div>
          </div>
        </div>
      </div>
      {/* End Why Chose Us */}
      {/* Start Featured Courses 
    ============================================= */}
      <div
        id="featured-courses"
        className="featured-courses-area left-details default-padding"
      >
        <div className="container">
          <div className="row">
            <div className="featured-courses-carousel owl-carousel owl-theme">
              {/* Start Single Item */}
              <div className="item">
                <div className="col-md-5">
                  <div className="thumb">
                    <img src="assets/img/700x800.png" alt="Thumb" />
                    <div className="live-view">
                      <a
                        href="assets/img/800x800.png"
                        className="item popup-link"
                      >
                        <i className="fa fa-camera" />
                      </a>
                      <a
                        className="popup-youtube"
                        href="https://www.youtube.com/watch?v=vQqZIFCab9o"
                      >
                        <i className="fa fa-video" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 info">
                  <h2>
                    <a href="#">Codecademy software programming</a>
                  </h2>
                  <h4>featured courses</h4>
                  <p>
                    Both rest of know draw fond post as. It agreement defective
                    to excellent. Feebly do engage of narrow. Extensive
                    repulsive belonging depending if promotion be zealously as.
                    Preference inquietude ask
                  </p>
                  <h3>Learning outcomes</h3>
                  <ul>
                    <li>
                      <i className="fas fa-check-double" />
                      <span>Over 37 lectures and 55.5 hours of content!</span>
                    </li>
                    <li>
                      <i className="fas fa-check-double" />
                      <span>Testing Training Included.</span>
                    </li>
                    <li>
                      <i className="fas fa-check-double" />
                      <span>
                        Course content designed by considering current software
                        testing
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check-double" />
                      <span>
                        Practical assignments at the end of every session.
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-theme effect btn-md"
                    data-animation="animated slideInUp"
                  >
                    Enroll Now
                  </a>
                  <div className="bottom-info align-left">
                    <div className="item">
                      <h4>Author</h4>
                      <a href="#">
                        <span>Devid Honey</span>
                      </a>
                    </div>
                    <div className="item">
                      <h4>Students enrolled</h4>
                      <span>5455</span>
                    </div>
                    <div className="item">
                      <h4>Rating</h4>
                      <span className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Start Single Item */}
              <div className="item">
                <div className="col-md-5">
                  <div className="thumb">
                    <img src="assets/img/700x800.png" alt="Thumb" />
                    <div className="live-view">
                      <a
                        href="assets/img/800x800.png"
                        className="item popup-link"
                      >
                        <i className="fa fa-camera" />
                      </a>
                      <a
                        className="popup-youtube"
                        href="https://www.youtube.com/watch?v=vQqZIFCab9o"
                      >
                        <i className="fa fa-video" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 info">
                  <h2>
                    <a href="#">Data analysis and data science</a>
                  </h2>
                  <h4>featured courses</h4>
                  <p>
                    Both rest of know draw fond post as. It agreement defective
                    to excellent. Feebly do engage of narrow. Extensive
                    repulsive belonging depending if promotion be zealously as.
                    Preference inquietude ask
                  </p>
                  <h3>Learning outcomes</h3>
                  <ul>
                    <li>
                      <i className="fas fa-check-double" />
                      <span>Over 37 lectures and 55.5 hours of content!</span>
                    </li>
                    <li>
                      <i className="fas fa-check-double" />
                      <span>Testing Training Included.</span>
                    </li>
                    <li>
                      <i className="fas fa-check-double" />
                      <span>
                        Course content designed by considering current software
                        testing
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check-double" />
                      <span>
                        Practical assignments at the end of every session.
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-theme effect btn-md"
                    data-animation="animated slideInUp"
                  >
                    Enroll Now
                  </a>
                  <div className="bottom-info align-left">
                    <div className="item">
                      <h4>Author</h4>
                      <a href="#">
                        <span>Devid Honey</span>
                      </a>
                    </div>
                    <div className="item">
                      <h4>Students enrolled</h4>
                      <span>5455</span>
                    </div>
                    <div className="item">
                      <h4>Rating</h4>
                      <span className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Start Single Item */}
              <div className="item">
                <div className="col-md-5">
                  <div className="thumb">
                    <img src="assets/img/700x800.png" alt="Thumb" />
                    <div className="live-view">
                      <a
                        href="assets/img/800x800.png"
                        className="item popup-link"
                      >
                        <i className="fa fa-camera" />
                      </a>
                      <a
                        className="popup-youtube"
                        href="https://www.youtube.com/watch?v=vQqZIFCab9o"
                      >
                        <i className="fa fa-video" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 info">
                  <h2>
                    <a href="#">Graphic and interactive design</a>
                  </h2>
                  <h4>featured courses</h4>
                  <p>
                    Both rest of know draw fond post as. It agreement defective
                    to excellent. Feebly do engage of narrow. Extensive
                    repulsive belonging depending if promotion be zealously as.
                    Preference inquietude ask
                  </p>
                  <h3>Learning outcomes</h3>
                  <ul>
                    <li>
                      <i className="fas fa-check-double" />
                      <span>Over 37 lectures and 55.5 hours of content!</span>
                    </li>
                    <li>
                      <i className="fas fa-check-double" />
                      <span>Testing Training Included.</span>
                    </li>
                    <li>
                      <i className="fas fa-check-double" />
                      <span>
                        Course content designed by considering current software
                        testing
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check-double" />
                      <span>
                        Practical assignments at the end of every session.
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-theme effect btn-md"
                    data-animation="animated slideInUp"
                  >
                    Enroll Now
                  </a>
                  <div className="bottom-info align-left">
                    <div className="item">
                      <h4>Author</h4>
                      <a href="#">
                        <span>Devid Honey</span>
                      </a>
                    </div>
                    <div className="item">
                      <h4>Students enrolled</h4>
                      <span>5455</span>
                    </div>
                    <div className="item">
                      <h4>Rating</h4>
                      <span className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
            </div>
          </div>
        </div>
      </div>
      {/* End Featured Courses */}
      {/* Start Popular Courses 
    ============================================= */}
      <div
        id="courses"
        className="popular-courses bg-gray circle carousel-shadow default-padding"
      >
        <div className="container">
          <div className="row">
            <div className="site-heading text-center">
              <div className="col-md-8 col-md-offset-2">
                <h2>Popular Courses</h2>
                <p>
                  Discourse assurance estimable applauded to so. Him everything
                  melancholy uncommonly but solicitude inhabiting projection
                  off. Connection stimulated estimating excellence an to
                  impression.
                </p>
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
                      <img src="assets/img/800x600.png" alt="Thumb" />
                    </a>
                    <div className="price">Price: Free</div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      <div className="thumb">
                        <a href="#">
                          <img src="assets/img/100x100.png" alt="Thumb" />
                        </a>
                      </div>
                      <div className="others">
                        <a href="#">Munil Druva</a>
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                          <span>4.5 (23,890)</span>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <a href="#">data science and software</a>
                    </h4>
                    <p>
                      Would day nor ask walls known. But preserved advantage are
                      but and certainty earnestly enjoyment.
                    </p>
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 6,690
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 16:00
                        </li>
                      </ul>
                      <a href="#">Enroll Now</a>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img src="assets/img/800x600.png" alt="Thumb" />
                    </a>
                    <div className="price">Price: $12</div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      <div className="thumb">
                        <a href="#">
                          <img src="assets/img/100x100.png" alt="Thumb" />
                        </a>
                      </div>
                      <div className="others">
                        <a href="#">Akua Paul</a>
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                          <span>5 (867)</span>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <a href="#">Stanford Engineering</a>
                    </h4>
                    <p>
                      Would day nor ask walls known. But preserved advantage are
                      but and certainty earnestly enjoyment.
                    </p>
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 6,690
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 16:00
                        </li>
                      </ul>
                      <a href="#">Enroll Now</a>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img src="assets/img/800x600.png" alt="Thumb" />
                    </a>
                    <div className="price">Price: Free</div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      <div className="thumb">
                        <a href="#">
                          <img src="assets/img/100x100.png" alt="Thumb" />
                        </a>
                      </div>
                      <div className="others">
                        <a href="#">Jonathom Kiyam</a>
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <span>4.9 (2,655)</span>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <a href="#">Covers Big Data analysis</a>
                    </h4>
                    <p>
                      Would day nor ask walls known. But preserved advantage are
                      but and certainty earnestly enjoyment.
                    </p>
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 6,690
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 16:00
                        </li>
                      </ul>
                      <a href="#">Enroll Now</a>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img src="assets/img/800x600.png" alt="Thumb" />
                    </a>
                    <div className="price">Price: $46</div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      <div className="thumb">
                        <a href="#">
                          <img src="assets/img/100x100.png" alt="Thumb" />
                        </a>
                      </div>
                      <div className="others">
                        <a href="#">Huma Park</a>
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                          <span>4.4 (16,465)</span>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <a href="#">professional web development</a>
                    </h4>
                    <p>
                      Would day nor ask walls known. But preserved advantage are
                      but and certainty earnestly enjoyment.
                    </p>
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 6,690
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 16:00
                        </li>
                      </ul>
                      <a href="#">Enroll Now</a>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img src="assets/img/800x600.png" alt="Thumb" />
                    </a>
                    <div className="price">Price: $124</div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      <div className="thumb">
                        <a href="#">
                          <img src="assets/img/100x100.png" alt="Thumb" />
                        </a>
                      </div>
                      <div className="others">
                        <a href="#">Prokash Timer</a>
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                          <span>5 (7,890)</span>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <a href="#">Java Programming Masterclass</a>
                    </h4>
                    <p>
                      Would day nor ask walls known. But preserved advantage are
                      but and certainty earnestly enjoyment.
                    </p>
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 6,690
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 16:00
                        </li>
                      </ul>
                      <a href="#">Enroll Now</a>
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
      {/* Start Top Categories 
    ============================================= */}
      <div
        id="top-categories"
        className="top-cat-area default-padding bottom-less"
      >
        <div className="container">
          <div className="row">
            <div className="site-heading text-center">
              <div className="col-md-8 col-md-offset-2">
                <h2>Top Categories</h2>
                <p>
                  Discourse assurance estimable applauded to so. Him everything
                  melancholy uncommonly but solicitude inhabiting projection
                  off. Connection stimulated estimating excellence an to
                  impression.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="top-cat-items">
              <div className="col-md-3 col-sm-6 equal-height">
                <div
                  className="item"
                  style={{ backgroundImage: "url(assets/img/800x600.png)" }}
                >
                  <a href="#">
                    <i className="flaticon-feature" />
                    <div className="info">
                      <h4>software engineering</h4>
                      <span>(1,226) Topics</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div
                  className="item"
                  style={{ backgroundImage: "url(assets/img/800x600.png)" }}
                >
                  <a href="#">
                    <i className="flaticon-interaction" />
                    <div className="info">
                      <h4>Interactive Programming</h4>
                      <span>(2,366) Topics</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div
                  className="item"
                  style={{ backgroundImage: "url(assets/img/800x600.png)" }}
                >
                  <a href="#">
                    <i className="flaticon-conveyor" />
                    <div className="info">
                      <h4>Quantum Mechanics</h4>
                      <span>(766) Topics</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div
                  className="item"
                  style={{ backgroundImage: "url(assets/img/800x600.png)" }}
                >
                  <a href="#">
                    <i className="flaticon-education" />
                    <div className="info">
                      <h4>Preventing Dementia</h4>
                      <span>(4,500) Topics</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div
                  className="item"
                  style={{ backgroundImage: "url(assets/img/800x600.png)" }}
                >
                  <a href="#">
                    <i className="flaticon-potential" />
                    <div className="info">
                      <h4>Hidden Potential</h4>
                      <span>(975) Topics</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div
                  className="item"
                  style={{ backgroundImage: "url(assets/img/800x600.png)" }}
                >
                  <a href="#">
                    <i className="flaticon-print" />
                    <div className="info">
                      <h4>Introduction Programming</h4>
                      <span>(3,340) Topics</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div
                  className="item"
                  style={{ backgroundImage: "url(assets/img/800x600.png)" }}
                >
                  <a href="#">
                    <i className="flaticon-translate" />
                    <div className="info">
                      <h4>Machine Learning</h4>
                      <span>(7,800) Topics</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div
                  className="item"
                  style={{ backgroundImage: "url(assets/img/800x600.png)" }}
                >
                  <a href="#">
                    <i className="flaticon-firewall" />
                    <div className="info">
                      <h4>Maintaining a Mindful</h4>
                      <span>(24,80) Topics</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Top Categories */}
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
                <h2>Experience Advisors</h2>
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
              <div className="advisor-items advisor-carousel-solid owl-carousel owl-theme text-center text-light">
                {/* Single Item */}
                <div className="advisor-item">
                  <div className="info-box">
                    <img src="assets/img/800x600.png" alt="Thumb" />
                    <div className="info-title">
                      <h4>Professon. Nuri Paul</h4>
                      <span>Chemistry specialist</span>
                      <div className="social">
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
                          <li className="pinterest">
                            <a href="#">
                              <i className="fab fa-pinterest" />
                            </a>
                          </li>
                          <li className="linkedin">
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="advisor-item">
                  <div className="info-box">
                    <img src="assets/img/800x600.png" alt="Thumb" />
                    <div className="info-title">
                      <h4>Monayem Pruda</h4>
                      <span>Senior Developer</span>
                      <div className="social">
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
                          <li className="pinterest">
                            <a href="#">
                              <i className="fab fa-pinterest" />
                            </a>
                          </li>
                          <li className="linkedin">
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="advisor-item">
                  <div className="info-box">
                    <img src="assets/img/800x600.png" alt="Thumb" />
                    <div className="info-title">
                      <h4>Dr. Bubly Minu</h4>
                      <span>Science specialist</span>
                      <div className="social">
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
                          <li className="pinterest">
                            <a href="#">
                              <i className="fab fa-pinterest" />
                            </a>
                          </li>
                          <li className="linkedin">
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="advisor-item">
                  <div className="info-box">
                    <img src="assets/img/800x600.png" alt="Thumb" />
                    <div className="info-title">
                      <h4>Professon. John Doe</h4>
                      <span>Senior Writter</span>
                      <div className="social">
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
                          <li className="pinterest">
                            <a href="#">
                              <i className="fab fa-pinterest" />
                            </a>
                          </li>
                          <li className="linkedin">
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="advisor-item">
                  <div className="info-box">
                    <img src="assets/img/800x600.png" alt="Thumb" />
                    <div className="info-title">
                      <h4>Professon. John Doe</h4>
                      <span>Senior Writter</span>
                      <div className="social">
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
                          <li className="pinterest">
                            <a href="#">
                              <i className="fab fa-pinterest" />
                            </a>
                          </li>
                          <li className="linkedin">
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
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
      {/* Start Fun Factor 
    ============================================= */}
      <div
        className="fun-factor-area default-padding bottom-less text-center bg-fixed shadow dark-hard"
        style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 item">
              <div className="fun-fact">
                <div className="icon">
                  <i className="flaticon-contract" />
                </div>
                <div className="info">
                  <span className="timer" data-to={212} data-speed={5000} />
                  <span className="medium">National Awards</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 item">
              <div className="fun-fact">
                <div className="icon">
                  <i className="flaticon-professor" />
                </div>
                <div className="info">
                  <span className="timer" data-to={128} data-speed={5000} />
                  <span className="medium">Best Teachers</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 item">
              <div className="fun-fact">
                <div className="icon">
                  <i className="flaticon-online" />
                </div>
                <div className="info">
                  <span className="timer" data-to={8970} data-speed={5000} />
                  <span className="medium">Students Enrolled</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 item">
              <div className="fun-fact">
                <div className="icon">
                  <i className="flaticon-reading" />
                </div>
                <div className="info">
                  <span className="timer" data-to={640} data-speed={5000} />
                  <span className="medium">Cources</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Fun Factor */}
      {/* Start Event
    ============================================= */}
      <section id="event" className="event-area default-padding">
        <div className="container">
          <div className="row">
            <div className="site-heading text-center">
              <div className="col-md-8 col-md-offset-2">
                <h2>Upcoming Events</h2>
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
            <div className="event-items">
              {/* Single Item */}
              <div className="item horizontal col-md-12">
                <div
                  className="col-md-6 thumb bg-cover"
                  style={{ backgroundImage: "url(assets/img/1500x700.png)" }}
                >
                  <div className="date">
                    <h4>
                      <span>12</span> Dec, 2018
                    </h4>
                  </div>
                </div>
                <div className="col-md-6 info">
                  <h4>
                    <a href="#">Secondary Schools United Nations</a>
                  </h4>
                  <div className="meta">
                    <ul>
                      <li>
                        <i className="fas fa-calendar-alt" /> 15 Oct, 2019
                      </li>
                      <li>
                        <i className="fas fa-clock" /> 8:00 AM - 5:00 PM
                      </li>
                      <li>
                        <i className="fas fa-map" /> California, TX 70240{" "}
                      </li>
                    </ul>
                  </div>
                  <p>
                    Early had add equal china quiet visit. Appear an manner as
                    no limits either praise in. In in written on charmed justice
                    is amiable farther besides. Law insensible middletons
                    unsatiable for apartments boy delightful unreserved.
                  </p>
                  <a href="#" className="btn btn-dark effect btn-sm">
                    <i className="fas fa-chart-bar" /> Book Now
                  </a>
                  <a href="#" className="btn btn-gray btn-sm">
                    <i className="fas fa-ticket-alt" /> 43 Available
                  </a>
                </div>
              </div>
              {/* Single Item */}
              {/* Single Item */}
              <div className="item vertical col-md-6">
                <div className="thumb">
                  <img src="assets/img/800x600.png" alt="Thumb" />
                  <div className="date">
                    <h4>
                      <span>27</span> Feb, 2019
                    </h4>
                  </div>
                </div>
                <div className="info">
                  <h4>
                    <a href="#">Social Science &amp; Humanities</a>
                  </h4>
                  <div className="meta">
                    <ul>
                      <li>
                        <i className="fas fa-calendar-alt" /> 15 Oct, 2019
                      </li>
                      <li>
                        <i className="fas fa-clock" /> 8:00 AM - 5:00 PM
                      </li>
                      <li>
                        <i className="fas fa-map" /> California, TX 70240{" "}
                      </li>
                    </ul>
                  </div>
                  <p>
                    Early had add equal china quiet visit. Appear an manner as
                    no limits either praise in. In in written on charmed justice
                    is amiable farther besides. Law insensible middletons
                    unsatiable for apartments boy delightful unreserved.
                  </p>
                  <a href="#" className="btn btn-dark effect btn-sm">
                    <i className="fas fa-chart-bar" /> Book Now
                  </a>
                  <a href="#" className="btn btn-gray btn-sm">
                    <i className="fas fa-ticket-alt" /> 189 Available
                  </a>
                </div>
              </div>
              {/* Single Item */}
              {/* Single Item */}
              <div className="item vertical col-md-6">
                <div className="thumb">
                  <img src="assets/img/800x600.png" alt="Thumb" />
                  <div className="date">
                    <h4>
                      <span>15</span> Mar, 2019
                    </h4>
                  </div>
                </div>
                <div className="info">
                  <h4>
                    <a href="#">Actualized Leadership Network Seminar</a>
                  </h4>
                  <div className="meta">
                    <ul>
                      <li>
                        <i className="fas fa-calendar-alt" /> 15 Oct, 2019
                      </li>
                      <li>
                        <i className="fas fa-clock" /> 8:00 AM - 5:00 PM
                      </li>
                      <li>
                        <i className="fas fa-map" /> California, TX 70240{" "}
                      </li>
                    </ul>
                  </div>
                  <p>
                    Early had add equal china quiet visit. Appear an manner as
                    no limits either praise in. In in written on charmed justice
                    is amiable farther besides. Law insensible middletons
                    unsatiable for apartments boy delightful unreserved.
                  </p>
                  <a href="#" className="btn btn-dark effect btn-sm">
                    <i className="fas fa-chart-bar" /> Book Now
                  </a>
                  <a href="#" className="btn btn-gray btn-sm">
                    <i className="fas fa-ticket-alt" /> 32 Available
                  </a>
                </div>
              </div>
              {/* Single Item */}
              {/* Single Item */}
              <div className="item horizontal col-md-12">
                <div
                  className="col-md-6 thumb bg-cover"
                  style={{ backgroundImage: "url(assets/img/1500x700.png)" }}
                >
                  <div className="date">
                    <h4>
                      <span>24</span> Apr, 2019
                    </h4>
                  </div>
                </div>
                <div className="col-md-6 info">
                  <h4>
                    <a href="#">International Conference on Art Business</a>
                  </h4>
                  <div className="meta">
                    <ul>
                      <li>
                        <i className="fas fa-calendar-alt" /> 15 Oct, 2019
                      </li>
                      <li>
                        <i className="fas fa-clock" /> 8:00 AM - 5:00 PM
                      </li>
                      <li>
                        <i className="fas fa-map" /> California, TX 70240{" "}
                      </li>
                    </ul>
                  </div>
                  <p>
                    Early had add equal china quiet visit. Appear an manner as
                    no limits either praise in. In in written on charmed justice
                    is amiable farther besides. Law insensible middletons
                    unsatiable for apartments boy delightful unreserved.
                  </p>
                  <a href="#" className="btn btn-dark effect btn-sm">
                    <i className="fas fa-chart-bar" /> Book Now
                  </a>
                  <a href="#" className="btn btn-gray btn-sm">
                    <i className="fas fa-ticket-alt" /> 12 Available
                  </a>
                </div>
              </div>
              {/* Single Item */}
              <div className="more-btn col-md-12 text-center">
                <a href="#" className="btn btn-dark border btn-md">
                  View All Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Event */}
      {/* Start Registration 
    ============================================= */}
      <div className="reg-area default-padding-top bg-gray">
        <div className="container">
          <div className="row">
            <div className="reg-items">
              <div className="col-md-6 reg-form default-padding-bottom">
                <div className="site-heading text-left">
                  <h2>Get a Free online Registration</h2>
                  <p>
                    written on charmed justice is amiable farther besides. Law
                    insensible middletons unsatiable for apartments boy
                    delightful unreserved.
                  </p>
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
                          <option value={1}>Chose Subject</option>
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
                      <button type="submit">Rigister Now</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6 thumb">
                <img src="assets/img/800x800.png" alt="Thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Registration */}
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
      {/* Start Blog 
    ============================================= */}
      <div id="blog" className="blog-area default-padding bottom-less">
        <div className="container">
          <div className="row">
            <div className="site-heading text-center">
              <div className="col-md-8 col-md-offset-2">
                <h2>Latest News</h2>
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
            <div className="blog-items">
              {/* Single Item */}
              <div className="col-md-4 single-item">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img src="assets/img/800x600.png" alt="Thumb" />
                    </a>
                    <div className="date">
                      <h4>
                        <span>24</span> Nov, 2018
                      </h4>
                    </div>
                  </div>
                  <div className="info">
                    <h4>
                      <a href="#">Objection happiness something</a>
                    </h4>
                    <p>
                      Sitting mistake towards his few country ask. You delighted
                      two rapturous six depending objection happiness something
                      the partiality unaffected
                    </p>
                    <a href="#">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                    <div className="meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-user" /> Author
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-comments" /> 23 Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Item */}
              {/* Single Item */}
              <div className="col-md-4 single-item">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img src="assets/img/800x600.png" alt="Thumb" />
                    </a>
                    <div className="date">
                      <h4>
                        <span>12</span> Sep, 2018
                      </h4>
                    </div>
                  </div>
                  <div className="info">
                    <h4>
                      <a href="#">Meant to learn of vexed</a>
                    </h4>
                    <p>
                      Sitting mistake towards his few country ask. You delighted
                      two rapturous six depending objection happiness something
                      the partiality unaffected
                    </p>
                    <a href="#">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                    <div className="meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-user" /> Author
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-comments" /> 23 Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Item */}
              {/* Single Item */}
              <div className="col-md-4 single-item">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img src="assets/img/800x600.png" alt="Thumb" />
                    </a>
                    <div className="date">
                      <h4>
                        <span>29</span> Dec, 2018
                      </h4>
                    </div>
                  </div>
                  <div className="info">
                    <h4>
                      <a href="#">Delightful up dissimilar</a>
                    </h4>
                    <p>
                      Sitting mistake towards his few country ask. You delighted
                      two rapturous six depending objection happiness something
                      the partiality unaffected
                    </p>
                    <a href="#">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                    <div className="meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-user" /> Author
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-comments" /> 23 Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Item */}
            </div>
          </div>
        </div>
      </div>
      {/* End Blog */}
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
      {/* Start Contact Info
    ============================================= */}
      <div id="contact" className="contact-info-area default-padding">
        <div className="container">
          <div className="row">
            <div className="site-heading text-center">
              <div className="col-md-8 col-md-offset-2">
                <h2>Contact us</h2>
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
            {/* Start Contact Info */}
            <div className="contact-info">
              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-mobile-alt" />
                  </div>
                  <div className="info">
                    <h4>Call Us</h4>
                    <span>+324 119 2343</span>
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
                    <span>+324 119 2343</span>
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
                    <span>info@yourdomain.com</span>
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
                    Occasional terminated insensible and inhabiting gay. So know
                    do fond to half on. Now who promise was justice new winding
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
    </>
  );
};

export default Onepage;
