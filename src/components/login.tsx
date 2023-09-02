import { Link } from "react-router-dom";
import { FooterSection } from "../atoms/Footer/index.tsx";
import HeaderInformation from "../atoms/header.tsx";
import NavigationComponent from "../atoms/Navigation/index.tsx";
const LoginPage = () => {
  return (
    <>
      <HeaderInformation />
      <NavigationComponent />
      <div className="login-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <form action="#" id="login-form" className="white-popup-block">
                <div className="col-md-4 login-social">
                  <h4>Login with social</h4>
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
                      <Link
                        title="Lost Password"
                        to="#"
                        className="lost-pass-link"
                      >
                        Lost your password?
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <button type="submit">Login</button>
                    </div>
                  </div>
                  <p className="link-bottom">
                    Not a member yet? <Link to="#">Register now</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Login Area */}
      <FooterSection />
    </>
  );
};

export default LoginPage;
