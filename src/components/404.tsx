import { FooterSection } from "../atoms/Footer/index.tsx";
import NavigationComponent from "../atoms/Navigation/index.tsx";
import HeaderInformation from "../atoms/header.tsx";
import Error404Image from "../assets/img/about-bg.jpg";

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
                  <a href="#">
                    <i className="fas fa-home" /> Home
                  </a>
                </li>
                <li>
                  <a href="#">Page</a>
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
              <a className="btn btn-dark effect btn-md" href="#">
                Back To Home
              </a>
              <a className="btn btn-dark border btn-md" href="#">
                Contact Us
              </a>
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
                <li className="pinterest">
                  <a href="#">
                    <i className="fab fa-pinterest" />
                  </a>
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
