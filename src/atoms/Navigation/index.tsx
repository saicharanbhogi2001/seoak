import { useState } from "react";
import "./style.css";
import SeoakLogo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const NavigationComponent = () => {
  const [showCertifiedCourses, setshowCertifiedCourses] =
    useState<boolean>(false);

  return (
    <header id="home">
      {/* Start Navigation */}
      <nav className="navbar navbar-default navbar-sticky bootsnav">
        {/* Start Top Search */}
        <div>
          <div className="row">
            <div className="top-search">
              <div className="input-group">
                <form action="#">
                  <input
                    type="text"
                    name="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <button type="submit">
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* End Top Search */}
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i className="fa fa-bars" />
            </button>
            <Link className="navbar-brand" to="/">
              <img src={SeoakLogo} className="logo" alt="Logo" />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav navbar-right"
              data-in="#"
              data-out="#"
            >
              <li className="#">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="dropdown megamenu-fw">
                <Link to={"/about-us"}>About Us</Link>
              </li>
              <li className="dropdown">
                <Link
                  to="/certified-courses"
                  className="dropdown-toggle active"
                  data-toggle="dropdown"
                  onMouseEnter={() => setshowCertifiedCourses(true)}
                >
                  Certified Courses
                </Link>
                {showCertifiedCourses && (
                  <ul
                    className="dropdown-menu"
                    onMouseLeave={() => setshowCertifiedCourses(false)}
                  >
                    <li>
                      <Link to="/c-language">C Language</Link>
                    </li>
                    <li>
                      <Link to="/cpp-language">C++ Language</Link>
                    </li>
                    <li>
                      <Link to="/java-programming">JAVA Programming</Link>
                    </li>
                    <li>
                      <Link to="/powerbi">Power BI</Link>
                    </li>
                    <li>
                      <Link to="/python">Python</Link>
                    </li>
                    <li>
                      <Link to="/dsa">
                        DSA (Data Structures &amp; Algorithm)
                      </Link>
                    </li>
                    <li>
                      <Link to="/full-stack-development">
                        Full Stack Web Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/data-science">Data Science</Link>
                    </li>
                    <li>
                      <Link to="/cloud-computing">Cloud Computing</Link>
                    </li>
                    <li>
                      <Link to="/cyber-security">Cyber Security</Link>
                    </li>
                    <li>
                      <Link to="/advanced-ai">Advanced AI</Link>
                    </li>
                    <li>
                      <Link to="/chat-gpt">Chat GPT</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="dropdown">
                <Link
                  to="/live-industrial-courses"
                  className="dropdown-toggle active"
                  data-toggle="dropdown"
                >
                  Live Training Courses
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/full-stack-development">
                      Full Stack Web Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/data-science">Data Science</Link>
                  </li>
                  <li>
                    <Link to="/cloud-computing">Cloud Computing</Link>
                  </li>
                  <li>
                    <Link to="/cyber-security">Cyber Security</Link>
                  </li>
                  <li>
                    <Link to="/advanced-ai">Advanced AI</Link>
                  </li>
                  <li>
                    <Link to="/chat-gpt">Chat GPT</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </div>

          {/* /.navbar-collapse */}
        </div>
      </nav>
      {/* End Navigation */}
    </header>
  );
};

export default NavigationComponent;
