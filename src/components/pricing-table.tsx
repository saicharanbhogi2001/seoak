import { FooterSection } from "../atoms/Footer/index.tsx";
import HeaderInformation from "../atoms/header.tsx";
import NavigationComponent from "../atoms/Navigation/index.tsx";
import image1 from "../assets/img/slide-bg-2.jpeg";
import { Link } from "react-router-dom";
export const PricingTable = () => {
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
              <h1>Pricing Table</h1>
              <ul className="breadcrumb">
                <li>
                  <Link to="#">
                    <i className="fas fa-home" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="#">Page</Link>
                </li>
                <li className="active">Pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb */}
      {/* Start Pricing Area
      ============================================= */}
      <div
        id="pricing"
        className="pricing-area default-padding bg-gray bottom-less"
      >
        <div className="container">
          <div className="row">
            <div className="pricing pricing-simple text-center">
              <div className="col-md-4 equal-height">
                <div className="pricing-item">
                  <ul>
                    <li className="pricing-header">
                      <h4>Basic</h4>
                      <h2>
                        <sup>$</sup>29<sub>/ Mo</sub>
                      </h2>
                    </li>
                    <li>
                      <strong>One Day Trial</strong>
                    </li>
                    <li>Limited Courses</li>
                    <li>
                      <strong>Free 3 Lessons</strong>
                    </li>
                    <li>No Supporter</li>
                    <li>No Ebook</li>
                    <li>No Tutorial</li>
                    <li>Limited Registered User</li>
                    <li className="footer">
                      <Link
                        className="btn circle btn-dark border btn-sm"
                        to="#"
                      >
                        Buy This Plan
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 equal-height">
                <div className="pricing-item">
                  <ul>
                    <li className="pricing-header">
                      <h4>Standard</h4>
                      <h2>
                        <sup>$</sup>39<sub>/ Mo</sub>
                      </h2>
                    </li>
                    <li>One Day Standard Access</li>
                    <li>Limited Courses</li>
                    <li>
                      <strong>300+ Lessons</strong>
                    </li>
                    <li>
                      <strong>Random Supporter</strong>
                    </li>
                    <li>View Only Ebook</li>
                    <li>
                      <strong>Standard Tutorials</strong>
                    </li>
                    <li>Unlimited Registered User</li>
                    <li className="footer">
                      <Link
                        className="btn circle btn-theme effect btn-sm"
                        to="#"
                      >
                        Buy This Plan
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 equal-height">
                <div className="pricing-item">
                  <ul>
                    <li className="pricing-header">
                      <h4>Complete</h4>
                      <h2>
                        <sup>$</sup>59<sub>/ Mo</sub>
                      </h2>
                    </li>
                    <li>Life Time Access</li>
                    <li>Unlimited All Courses</li>
                    <li>
                      <strong>3000+ Lessons &amp; Growing</strong>
                    </li>
                    <li>Free Supporter</li>
                    <li>Free Ebook Downloads</li>
                    <li>Premium Tutorials</li>
                    <li>Unlimited Registered User</li>
                    <li className="footer">
                      <Link
                        className="btn circle btn-dark border btn-sm"
                        to="#"
                      >
                        Buy This Plan
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Pricing Area */}
      <FooterSection />
    </>
  );
};
