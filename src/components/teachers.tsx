import { FooterSection } from "../atoms/Footer/index.tsx";
import HeaderInformation from "../atoms/header.tsx";
import NavigationComponent from "../atoms/Navigation/index.tsx";
import Image1 from "../assets/img/800x800.png";
import image2 from "../assets/img/150x80.png";
import image3 from "../assets/img/slide-bg-2.jpeg";

export const Teachers = () => {
  return (
    <>
      <HeaderInformation />
      <NavigationComponent />
      <div
        className="breadcrumb-area shadow dark text-center bg-fixed text-light"
        style={{ backgroundImage: `url(${image3})` }}
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
                    <img src={image2} alt="Thumb" />
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
                    <img src={Image1} alt="Thumb" />
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
                    <img src={Image1} alt="Thumb" />

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
                    <img src={Image1} alt="Thumb" />

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
                    <img src={Image1} alt="Thumb" />

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
                    <img src={Image1} alt="Thumb" />
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
                    <img src={Image1} alt="Thumb" />
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
                    <img src={Image1} alt="Thumb" />
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
                    <img src={image3} alt="Thumb" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src={image3} alt="Thumb" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src={image3} alt="Thumb" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src={image3} alt="Thumb" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src={image3} alt="Thumb" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src={image3} alt="Thumb" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src={image3} alt="Thumb" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src={image3} alt="Thumb" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src={image3} alt="Thumb" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src={image3} alt="Thumb" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Clients Area */}
      <FooterSection />
    </>
  );
};
