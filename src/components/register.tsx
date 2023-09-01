import { FooterSection } from "../atoms/Footer/index.tsx";
import HeaderInformation from "../atoms/header.tsx";
import NavigationComponent from "../atoms/Navigation/index.tsx";
export const Register = () => {
  return (
    <>
      <HeaderInformation />
      <NavigationComponent />
      <div className="login-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <form action="#" id="register-form" className="white-popup-block">
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
            </div>
          </div>
        </div>
      </div>
      {/* End Login Area */}
      <FooterSection />
    </>
  );
};
