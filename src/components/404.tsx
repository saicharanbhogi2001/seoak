import { FooterSection } from "../atoms/Footer/index.tsx";
import NavigationComponent from "../atoms/Navigation/index.tsx";
import HeaderInformation from "../atoms/header.tsx";
import Error404Image from "../assets/img/about-bg.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <HeaderInformation />
      <NavigationComponent />
      <div
        className="breadcrumb-area shadow dark text-center bg-fixed text-light"
        style={{ backgroundImage: ` url(${Error404Image})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Error Page</h1>
              <ul className="breadcrumb">
                <li>
                  <Link to="#">
                    <i className="fas fa-home" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="#">Page</Link>
                </li>
                <li className="active">404</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb */}
      {/* Start 404 
  ============================================= */}
      <div className="error-page-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center content">
              <h1>404</h1>
              <h2>Sorry Page Was Not Found!</h2>
              <p>
                The page you are looking is not available or has been removed.
                Try going to Home Page by using the button below.
              </p>
              <Link className="btn btn-dark effect btn-md" to="#">
                Back To Home
              </Link>
              <Link className="btn btn-dark border btn-md" to="#">
                Contact Us
              </Link>
              <ul>
                <li className="facebook">
                  <Link to="#">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li className="twitter">
                  <Link to="#">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li className="linkedin">
                  <Link to="#">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </li>
                <li className="pinterest">
                  <Link to="#">
                    <i className="fab fa-pinterest" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default ErrorPage;
