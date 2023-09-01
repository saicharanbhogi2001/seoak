// import { useNavigate } from "react-router-dom";

const HeaderInformation = () => {
  // const navigate = useNavigate();
  return (
    <div className="top-bar-area address-two-lines bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-8 address-info">
            <div className="info box">
              <ul>
                <li>
                  <span>
                    <i className="fas fa-map" /> Address
                  </span>
                  Madhapur, Telangana.
                </li>
                <li>
                  <span>
                    <i className="fas fa-envelope-open" /> Email
                  </span>
                  support@seoak.in
                </li>
                <li>
                  <span>
                    <i className="fas fa-phone" /> Contact
                  </span>
                  +91&nbsp;95025 49362
                </li>
              </ul>
            </div>
          </div>
          <div className="user-login text-right col-md-4">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeM_1nUTx2DaBUxSR5xXgoTjKfE71wt0trYPAHYSf8t5QWB8g/viewform">
              <i className="fas fa-edit" /> Register
            </a>
            <a className="popup-with-form" href="/sign-in">
              <i className="fas fa-user" /> Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInformation;
