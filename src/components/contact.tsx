import { FooterSection } from "../atoms/Footer/index.tsx";
import HeaderInformation from "../atoms/header.tsx";
import NavigationComponent from "../atoms/Navigation/index.tsx";
import BackGroundImage from "../assets/img/contact.jpeg";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <HeaderInformation />;
      <NavigationComponent />
      <div
        className="breadcrumb-area shadow dark text-center bg-fixed text-light"
        style={{ backgroundImage: `url(${BackGroundImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Contact Us</h1>
              <ul className="breadcrumb">
                <li>
                  <Link to="#">
                    <i className="fas fa-home" /> Home
                  </Link>
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
      <FooterSection />
    </>
  );
};

export default Contact;
