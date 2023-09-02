import "../../index.css";
import icon from "../../assets/img/logo-light.png";
import { Link, useNavigate } from "react-router-dom";

const topcourses = [
  { course: "Full Stack", route: "/full-stack-develepment" },
  { course: "Data Science", route: "/data-science" },
  { course: "Cloud Computing", route: "/cloud-computing" },
  { course: "Cyber Security", route: "/cyber-security" },
  { course: "Advanced AI", route: "/advanced-ai" },
  { course: "Chat Gpt", route: "/chat-gpt" },
];
const navlinks = [
  { navbar: "Home" },
  { navbar: "About Us" },
  { navbar: "SEOAK BASICS" },
  { navbar: "Our Gallery" },
  { navbar: "Contact Us" },
  { navbar: "Faq's" },
];
const terms = [
  { title: "Terms & Conditions", route: "/terms-and-conditions" },
  { title: "Privacy Policy", route: "/privacy-policy" },
  { title: "Refund Policy", route: "/refund-policy" },
];

export const FooterSection = () => {
  const navigate = useNavigate();
  const handleRoute = (route: string) => {
    navigate(route);
  };
  const handleTermsandConditions = (route: string) => {
    navigate(route);
  };
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
              </div>
            </div>
            <div className="col-md-2 col-sm-6 item">
              <div className="f-item link">
                <h4>Use Full Links</h4>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to={"/about-us"}>About Us</Link>
                  </li>
                  <li>
                    <Link to="/certified-courses">SEOAK BASICS</Link>
                  </li>
                  <li>
                    <Link to="/contact">contact</Link>
                  </li>
                  <li>
                    <Link to="/home">Faq's</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 item">
              <div className="f-item address">
                <h4>SEOAK Extras</h4>
                <ul>
                  <li>
                    {/* <i className="fas fa-envelope" /> */}
                    <p>
                      Cheat sheets
                      {/* <span>
                        <Link to="mailto:">support@seoak.in</Link>
                       
                      </span> */}
                    </p>
                  </li>
                  <li>
                    {/* <i className="fas fa-map" /> */}
                    <p>Roadmaps</p>
                  </li>
                  <li>
                    <p>Events</p>
                  </li>
                  <li>
                    <p>Blogs</p>
                  </li>
                </ul>
                <h4 style={{ margin: "16px 0" }}>SOCIAL MEDIA</h4>
                <div className="social-media-links">
                  <li style={{ gap: 10, display: "flex" }}>
                    <Link to="">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link to="">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="">
                      <i className="fab fa-youtube" />
                    </Link>
                    <Link to="">
                      <i className="fab fa-linkedin" />
                    </Link>
                  </li>
                  =-97654321+igvc
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
                  <Link to="#">SEOAK INNOVATIONS PRIVATE LIMITED </Link>{" "}
                  Developed By <Link to="#">RAAB</Link>
                </p>
              </div>
              <div className="col-md-6 text-right link">
                <ul>
                  {terms.map((link) => (
                    <li key={link.title}>
                      <Link
                        onClick={() => handleTermsandConditions(link.route)}
                        to={""}
                      >
                        {link.title}
                      </Link>
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
