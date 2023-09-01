import "../../index.css";
import icon from "../../assets/img/logo-light.png";
const handleRoute = (course: any) => {
  // navigate(`/${course}`);
  console.log(course);
};
const handleTermsandConditions = (course: any) => {
  // navigate
  console.log(course);
};

const topcourses = [
  { course: "Full Stack" },
  { course: "Data Science" },
  { course: "Full Stack" },
  { course: "Data Science" },
  { course: "Full Stack" },
  { course: "Data Science" },
  { course: "Full Stack" },
  { course: "Data Science" },
];
const navlinks = [
  { navbar: "Home" },
  { navbar: "About Us" },
  { navbar: "Certified Courses" },
  { navbar: "Our Gallery" },
  { navbar: "Contact Us" },
  { navbar: "Faq's" },
];
const terms = [
  { title: "Terms & Conditions" },
  { title: "Privacy Policy" },
  { title: "Refund Policy" },
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
                  {topcourses.map((course) => (
                    <li key={course.course}>
                      <a onClick={() => handleRoute(course.course)}>
                        {course.course}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 item">
              <div className="f-item link">
                <h4>Use Full Links</h4>
                <ul>
                  {navlinks.map((link) => (
                    <li key={link.navbar}>
                      <a onClick={() => handleRoute(link.navbar)}>
                        {link.navbar}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-4 item">
              <div className="f-item address">
                <h4>Address</h4>
                <ul>
                  <li>
                    <i className="fas fa-envelope" />
                    <p>
                      Email{" "}
                      <span>
                        <a href="mailto:">support@seoak.in</a>
                      </span>
                    </p>
                  </li>
                  <li>
                    <i className="fas fa-map" />
                    <p>
                      Office <span> Madhapur, Hyderabad.</span>
                    </p>
                  </li>
                </ul>
                <h4 style={{ margin: "16px 0" }}>SOCIAL MEDIA</h4>
                <div className="social-media-links">
                  <li style={{ gap: 10, display: "flex" }}>
                    <a href="">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="">
                      <i className="fab fa-youtube" />
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin" />
                    </a>
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
                  © Copyright 2023. All Rights Reserved by <a href="#">SEOAK</a>{" "}
                  Developed By <a href="#">RAAB</a>
                </p>
              </div>
              <div className="col-md-6 text-right link">
                <ul>
                  {terms.map((link) => (
                    <li key={link.title}>
                      <a onClick={() => handleTermsandConditions(link.title)}>
                        {link.title}
                      </a>
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
