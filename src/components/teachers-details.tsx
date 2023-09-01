import { FooterSection } from "../atoms/Footer/index.tsx";
import HeaderInformation from "../atoms/header.tsx";
import NavigationComponent from "../atoms/Navigation/index.tsx";
export const TeachersDetails = () => {
  return (
    <>
      <HeaderInformation />
      <NavigationComponent />
      <div
        className="breadcrumb-area shadow dark text-center bg-fixed text-light"
        style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Advisor Details</h1>
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
      {/* Start Advisor Details 
      ============================================= */}
      <div className="adviros-details-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-5 thumb">
              <img src="assets/img/800x600.png" alt="Thumb" />
              <div className="desc">
                <h4>Professor Sayed Kunal</h4>
                <span>Senior Programmer</span>
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
                      <i className="fab fa-skype" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
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
                      Courses
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab3" aria-expanded="false">
                      Quick Contact
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
                        <li>
                          Total Course Taken <span>65</span>
                        </li>
                        <li>
                          Rating <span>4.7</span>
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
                              <th>NO.</th>
                              <th>Title</th>
                              <th>Status</th>
                              <th>Price</th>
                              <th>Rating</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>01.</td>
                              <td>
                                <a href="#">Basic Web Development</a>
                              </td>
                              <td>Pending</td>
                              <td>$23.00</td>
                              <td>4.5</td>
                            </tr>
                            <tr>
                              <td>02.</td>
                              <td>
                                <a href="#">Software Engineering</a>
                              </td>
                              <td>Published</td>
                              <td>$55.00</td>
                              <td>4.5</td>
                            </tr>
                            <tr>
                              <td>03.</td>
                              <td>
                                <a href="#">Introduction of machine</a>
                              </td>
                              <td>Pending</td>
                              <td>$44.00</td>
                              <td>4.5</td>
                            </tr>
                            <tr>
                              <td>04.</td>
                              <td>
                                <a href="#">Hidden potential</a>
                              </td>
                              <td>Published</td>
                              <td>$54.00</td>
                              <td>5.0</td>
                            </tr>
                            <tr>
                              <td>05.</td>
                              <td>
                                <a href="#">Introduction of PHP</a>
                              </td>
                              <td>Published</td>
                              <td>$32.00</td>
                              <td>4.9</td>
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
                  {/* End Single Tab */}
                </div>
                {/* End Tab Content */}
              </div>
              {/* End Tab Info */}
            </div>
          </div>
        </div>
      </div>
      {/* End Advisor Details */}
      <FooterSection />
    </>
  );
};
