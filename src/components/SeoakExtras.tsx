import HeaderInformation from "../atoms/header";
import NavigationComponent from "../atoms/Navigation";
import BackGroundImage from "../assets/img/contact.jpeg";

export const SeoakExtrasPage = () => {
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
              <h1>Seoak Extras</h1>
              <ul className="breadcrumb">
                {/* <li>
                  <Link to="#">
                    <i className="fas fa-home" /> Home
                  </Link>
                </li> */}
                <li className="active">Comming soon</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
