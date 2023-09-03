import "../../index.css";
import icon from "../../assets/img/logo-light.png";
import { Link } from "react-router-dom";

const terms = [
  { title: "Terms & Conditions", route: "/terms-and-conditions" },
  { title: "Privacy Policy", route: "/privacy-policy" },
  { title: "Refund Policy", route: "/refund-policy" },
];

export const FooterSection = () => {
  return (
    <footer className="bg-dark default-padding-top text-light">
      <div className="container">
        <div className="row">
          <div className="f-items">
            <div className="col-md-4 item">
              <div className="f-item">
                <img src={icon} alt="Logo" />
                <p>
                  At Seoak, we take pride in our team of highly talented
                  professionals who possess over 15 years of combined experience
                  in the fields of Information Technology and Corporate
                  Training. Our primary objective is to bridge the growing gap
                  between industry requirements and the skills possessed by
                  prospective employees, particularly graduates interested in
                  the area of Information Technology.
                </p>
                <p className="text-italic">
                  Please write your email and get our amazing updates, news and
                  support
                </p>
                <div className="subscribe">
                  <form action="#">
                    <div className="input-group stylish-input-group">
                      <input
                        type="email"
                        placeholder="Enter your e-mail here"
                        className="form-control"
                        name="email"
                      />
                      <button type="submit">
                        <i className="fa fa-paper-plane" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 item">
              <div className="f-item link">
                <h4>Top Courses</h4>
                <ul>
                  <li style={{ textDecoration: "none" }}>
                    <Link to="/full-stack-development">
                      Full Stack Development
                    </Link>
                  </li>
                  <li style={{ textDecoration: "none" }}>
                    <Link to="/data-science">Data Science</Link>
                  </li>
                  {/* <li style={{ textDecoration: "none" }}>
                    <Link to="/cloud-computing">Cloud Computing</Link>
                  </li> */}
                  {/* <li style={{ textDecoration: "none" }}>
                    <Link to="/cyber-security">Cyber Security</Link>
                  </li> */}
                  <li style={{ textDecoration: "none" }}>
                    <Link to="/advanced-ai">Advanced AI</Link>
                  </li>
                  {/* <li style={{ textDecoration: "none" }}>
                    <Link to="/chat-gpt">Chat GPT</Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 item">
              <div className="f-item link">
                <h4>Use Full Links</h4>
                <ul>
                  <li style={{ textDecoration: "none" }}>
                    <Link to="/">Home</Link>
                  </li>
                  <li style={{ textDecoration: "none" }}>
                    <Link to={"/about-us"}>About Us</Link>
                  </li>
                  <li style={{ textDecoration: "none" }}>
                    <Link to="/seoak-basics">SEOAK BASICS</Link>
                  </li>
                  <li style={{ textDecoration: "none" }}>
                    <Link to="/contact">contact</Link>
                  </li>
                  <li style={{ textDecoration: "none" }}>
                    <Link to="/faq">Faq's</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 item">
              <div className="f-item address">
                <div className="f-item link">
                  <h4>Seoak Extras</h4>
                  <ul>
                    <li style={{ textDecoration: "none" }}>
                      <Link to={"/Seoak-extras"}>Cheat Sheets</Link>
                    </li>
                    <li style={{ textDecoration: "none" }}>
                      <Link to={"/Seoak-extras"}>Roadmaps</Link>
                    </li>
                    <li style={{ textDecoration: "none" }}>
                      <Link to={"/Seoak-extras"}>Events</Link>
                    </li>
                    <li style={{ textDecoration: "none" }}>
                      <Link to={"/Seoak-extras"}>Blogs</Link>
                    </li>
                  </ul>
                </div>
                <h4 style={{ margin: "16px 0" }}>SOCIAL MEDIA</h4>
                <div className="social-media-links">
                  <li
                    style={{ gap: 10, display: "flex", textDecoration: "none" }}
                  >
                    <Link
                      style={{ textDecoration: "none" }}
                      to="https://www.facebook.com/seoakofficial"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="https://www.instagram.com/seoakofficial/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="https://twitter.com/seoakofficial"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="https://www.youtube.com/@SeoakIndia"
                      target="_blank"
                    >
                      <i className="fab fa-youtube" />
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="https://www.linkedin.com/company/seaokofficial/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin" />
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-6">
                <p>
                  © Copyright 2023. All Rights Reserved by
                  <Link to="#"> SEOAK INNOVATIONS PRIVATE LIMITED </Link>{" "}
                  Developed By <Link to="#">RAAB</Link>
                </p>
              </div>
              <div className="col-md-6 text-right link">
                <ul>
                  {terms.map((link) => (
                    <li key={link.title}>
                      <Link to={link.route}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
