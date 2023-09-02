import { FooterSection } from "../atoms/Footer/index.tsx";
import HeaderInformation from "../atoms/header.tsx";
import NavigationComponent from "../atoms/Navigation/index.tsx";
import image1 from "../assets/img/slide-bg-2.jpeg";
import image2 from "../assets/img/800x800.png";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <>
      <HeaderInformation />
      <NavigationComponent />
      <div
        className="breadcrumb-area shadow dark text-center bg-fixed text-light"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Profile</h1>
              <ul className="breadcrumb">
                <li>
                  <Link to="#">
                    <i className="fas fa-home" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="#">Page</Link>
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
              <img src={image2} alt="Thumb" />
            </div>
            <div className="col-md-7 info main-content">
              {/* Star Tab Info */}
              <div className="tab-info">
                {/* Tab Nav */}
                <ul className="nav nav-pills">
                  <li className="active">
                    <Link data-toggle="tab" to="#tab1" aria-expanded="true">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link data-toggle="tab" to="#tab2" aria-expanded="false">
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link data-toggle="tab" to="#tab3" aria-expanded="false">
                      Edit Profile
                    </Link>
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
                                <Link to="#">Basic Web Development</Link>
                              </td>
                              <td>12 Nov, 2018</td>
                              <td>$23.00</td>
                              <td>
                                <Link to="#">Preview</Link>
                              </td>
                            </tr>
                            <tr>
                              <td>02.</td>
                              <td>
                                <Link to="#">Software Engineering</Link>
                              </td>
                              <td>14 Jan, 2019</td>
                              <td>$55.00</td>
                              <td>
                                <Link to="#">Preview</Link>
                              </td>
                            </tr>
                            <tr>
                              <td>03.</td>
                              <td>
                                <Link to="#">Introduction of machine</Link>
                              </td>
                              <td>18 Mar, 2019</td>
                              <td>$44.00</td>
                              <td>
                                <Link to="#">Preview</Link>
                              </td>
                            </tr>
                            <tr>
                              <td>04.</td>
                              <td>
                                <Link to="#">Hidden potential</Link>
                              </td>
                              <td>20 Feb, 2018</td>
                              <td>$54.00</td>
                              <td>
                                <Link to="#">Preview</Link>
                              </td>
                            </tr>
                            <tr>
                              <td>05.</td>
                              <td>
                                <Link to="#">Introduction of PHP</Link>
                              </td>
                              <td>27 Mar, 2019</td>
                              <td>$32.00</td>
                              <td>
                                <Link to="#">Preview</Link>
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
      <FooterSection />
    </>
  );
};
