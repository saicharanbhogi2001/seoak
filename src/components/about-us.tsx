import { FooterSection } from "../atoms/Footer/index.tsx";
import HeaderInformation from "../atoms/header.tsx";
import NavigationComponent from "../atoms/Navigation/index.tsx";
import image1 from "../assets/img/800x800.png";
import imagefooter from "../assets/img/contactform800,800.png";
import AboutUsImage from "../assets/img/about-bg.jpg";

const AboutUs = () => {
  return (
    <>
      <HeaderInformation />
      <NavigationComponent />
      <div
        className="breadcrumb-area shadow dark text-center bg-fixed text-light"
        style={{ backgroundImage: `url(${AboutUsImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>About SEOAK</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="/">
                    <i className="fas fa-home" /> Home
                  </a>
                </li>
                <li className="active">About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="about-area default-padding">
        <div className="container">
          <div className="row">
            <div className="about-info">
              <div className="col-md-6 thumb">
                <img src={image1} alt="Thumb" />
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
                <img src={imagefooter} alt="Thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Registration */}
      <FooterSection />
    </>
  );
};

export default AboutUs;
