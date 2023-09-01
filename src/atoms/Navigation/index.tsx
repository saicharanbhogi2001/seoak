import { useState } from "react";
import "./style.css";
import SeoakLogo from "../../assets/img/logo.png";

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
            <a className="navbar-brand" href="/">
              <img src={SeoakLogo} className="logo" alt="Logo" />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav navbar-right"
              data-in="#"
              data-out="#"
            >
              <li className="#">
                <a href="/" className="dropdown-toggle active">
                  Home
                </a>
              </li>
              <li className="dropdown megamenu-fw">
                <a href="/about-us" className="active">
                  About Us
                </a>
              </li>
              <li className="dropdown">
                <a
                  href="/certified-courses"
                  className="dropdown-toggle active"
                  data-toggle="dropdown"
                  onMouseEnter={() => setshowCertifiedCourses(true)}
                >
                  Certified Courses
                </a>
                {showCertifiedCourses && (
                  <ul
                    className="dropdown-menu"
                    onMouseLeave={() => setshowCertifiedCourses(false)}
                  >
                    <li>
                      <a href="/c-language">C Language</a>
                    </li>
                    <li>
                      <a href="/cpp-language">C++ Language</a>
                    </li>
                    <li>
                      <a href="/java-programming">JAVA Programming</a>
                    </li>
                    <li>
                      <a href="/powerbi">Power BI</a>
                    </li>
                    <li>
                      <a href="/python">Python</a>
                    </li>
                    <li>
                      <a href="/dsa">DSA (Data Structures &amp; Algorithm)</a>
                    </li>
                    <li>
                      <a href="/full-stack-development">
                        Full Stack Web Development
                      </a>
                    </li>
                    <li>
                      <a href="/data-science">Data Science</a>
                    </li>
                    <li>
                      <a href="/cloud-computing">Cloud Computing</a>
                    </li>
                    <li>
                      <a href="/cyber-security">Cyber Security</a>
                    </li>
                    <li>
                      <a href="/advanced-ai">Advanced AI</a>
                    </li>
                    <li>
                      <a href="/chat-gpt">Chat GPT</a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="dropdown">
                <a
                  href="live-industrial-courses.html"
                  className="dropdown-toggle active"
                  data-toggle="dropdown"
                >
                  Live Training Courses
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="full-stack-development.html">
                      Full Stack Web Development
                    </a>
                  </li>
                  <li>
                    <a href="/data-science">Data Science</a>
                  </li>
                  <li>
                    <a href="/cloud-computing">Cloud Computing</a>
                  </li>
                  <li>
                    <a href="/cyber-security">Cyber Security</a>
                  </li>
                  <li>
                    <a href="/advanced-ai">Advanced AI</a>
                  </li>
                  <li>
                    <a href="/chat-gpt">Chat GPT</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/contact">contact</a>
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
