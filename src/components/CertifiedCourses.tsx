import { FooterSection } from "../atoms/Footer/index.tsx";
import NavigationComponent from "../atoms/Navigation/index.tsx";
import HeaderInformation from "../atoms/header.tsx";
import AboutUsImage from "../assets/img/about-bg.jpg";
import javaImage from "../assets/img/javaprogramming.png";
import cImage from "../assets/img/clanguage.png";
import cppImage from "../assets/img/c++language.png";
import powerbiImage from "../assets/img/powerbi.png";
import pythonImage from "../assets/img/pythonprogramming.png";
import dsaImage from "../assets/img/dsa.png";
import { Link } from "react-router-dom";

const CertifiedCourses = () => {
  return (
    <>
      <HeaderInformation />
      <NavigationComponent />
      <div
        className="breadcrumb-area shadow dark text-center bg-fixed text-light"
        style={{ backgroundImage: `url(${AboutUsImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Seoak Basics</h1>
              <ul className="breadcrumb">
                <li>
                  <Link to="#">
                    <i className="fas fa-home" /> Home
                  </Link>
                </li>
                <li className="active">Course</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="popular-courses default-padding bottom-less without-carousel">
        <div className="container">
          <div className="row">
            <div className="popular-courses-items">
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <Link to="/java-programming">
                      <img
                        src={javaImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </Link>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info"></div>
                    <h4>
                      <Link to="#">Java Programming</Link>
                    </h4>
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 190
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 15:00hrs
                        </li>
                      </ul>
                      <Link to="/java-programming">Know More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <Link to="/c-language">
                      <img
                        src={cImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </Link>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info"></div>
                    <h4>
                      <Link to="#">C Language</Link>
                    </h4>

                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 120
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 10:00hrs
                        </li>
                      </ul>
                      <Link to="/c-language">Know More</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <Link to="/cpp-language">
                      <img
                        src={cppImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </Link>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info"></div>
                    <h4>
                      <Link to="#">C++ Language</Link>
                    </h4>
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 90
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 10:00
                        </li>
                      </ul>
                      <Link to="/cpp-language">Know More</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <Link to="/powerbi">
                      <img
                        src={powerbiImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </Link>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info"></div>
                    <h4>
                      <Link to="#">Power BI</Link>
                    </h4>

                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 160
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 48:00hrs
                        </li>
                      </ul>
                      <Link to="/powerbi">Know More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <Link to="/python">
                      <img
                        src={pythonImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </Link>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info"></div>
                    <h4>
                      <Link to="#">Python Programming</Link>
                    </h4>
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 185
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 48:00hrs
                        </li>
                      </ul>
                      <Link to="/python">Enroll Now</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <Link to="/dsa">
                      <img
                        src={dsaImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </Link>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info"></div>
                    <h4>
                      <Link to="#">Data Structures &amp; Algorithm</Link>
                    </h4>
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 45
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 48:00hrs
                        </li>
                      </ul>
                      <Link to="/dsa">Enroll Now</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
            </div>
          </div>
        </div>
      </div>
      {/* End Popular Courses */}
      <FooterSection />
    </>
  );
};

export default CertifiedCourses;
