import { FooterSection } from "../atoms/Footer/index.tsx";
import HeaderInformation from "../atoms/header.tsx";
import NavigationComponent from "../atoms/Navigation/index.tsx";
import coruses from "../assets/img/courses.jpeg";
import { Link } from "react-router-dom";
const Courses = () => {
  return (
    <>
      <HeaderInformation />;
      <NavigationComponent />
      <div
        className="breadcrumb-area shadow dark text-center bg-fixed text-light"
        style={{ backgroundImage: `url(${coruses})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Courses</h1>
              <ul className="breadcrumb">
                <li>
                  <Link to="#">
                    <i className="fas fa-home" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="#">Page</Link>
                </li>
                <li className="active">Course</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb */}
      {/* Start Popular Courses 
      ============================================= */}
      <div className="popular-courses circle carousel-shadow default-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="popular-courses-items popular-courses-carousel owl-carousel owl-theme">
                {/* Single Item */}
                <div className="item">
                  <div className="thumb">
                    <Link to="#">
                      <img src="assets/img/800x600.png" alt="Thumb" />
                    </Link>
                    <div className="price">Price: Free</div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      <div className="thumb">
                        <Link to="#">
                          <img src="assets/img/100x100.png" alt="Thumb" />
                        </Link>
                      </div>
                      <div className="others">
                        <Link to="#">Munil Druva</Link>
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                          <span>4.5 (23,890)</span>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <Link to="#">data science and software</Link>
                    </h4>
                    <p>
                      Would day nor ask walls known. But preserved advantage are
                      but and certainty earnestly enjoyment.
                    </p>
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 6,690
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 16:00
                        </li>
                      </ul>
                      <Link to="#">Enroll Now</Link>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="thumb">
                    <Link to="#">
                      <img src="assets/img/800x600.png" alt="Thumb" />
                    </Link>
                    <div className="price">Price: $12</div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      <div className="thumb">
                        <Link to="#">
                          <img src="assets/img/100x100.png" alt="Thumb" />
                        </Link>
                      </div>
                      <div className="others">
                        <Link to="#">Akua Paul</Link>
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                          <span>5 (867)</span>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <Link to="#">Stanford Engineering</Link>
                    </h4>
                    <p>
                      Would day nor ask walls known. But preserved advantage are
                      but and certainty earnestly enjoyment.
                    </p>
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 6,690
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 16:00
                        </li>
                      </ul>
                      <Link to="#">Enroll Now</Link>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="thumb">
                    <Link to="#">
                      <img src="assets/img/800x600.png" alt="Thumb" />
                    </Link>
                    <div className="price">Price: Free</div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      <div className="thumb">
                        <Link to="#">
                          <img src="assets/img/100x100.png" alt="Thumb" />
                        </Link>
                      </div>
                      <div className="others">
                        <Link to="#">Jonathom Kiyam</Link>
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <span>4.9 (2,655)</span>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <Link to="#">Covers Big Data analysis</Link>
                    </h4>
                    <p>
                      Would day nor ask walls known. But preserved advantage are
                      but and certainty earnestly enjoyment.
                    </p>
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 6,690
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 16:00
                        </li>
                      </ul>
                      <Link to="#">Enroll Now</Link>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="thumb">
                    <Link to="#">
                      <img src="assets/img/800x600.png" alt="Thumb" />
                    </Link>
                    <div className="price">Price: $46</div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      <div className="thumb">
                        <Link to="#">
                          <img src="assets/img/100x100.png" alt="Thumb" />
                        </Link>
                      </div>
                      <div className="others">
                        <Link to="#">Huma Park</Link>
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                          <span>4.4 (16,465)</span>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <Link to="#">professional web development</Link>
                    </h4>
                    <p>
                      Would day nor ask walls known. But preserved advantage are
                      but and certainty earnestly enjoyment.
                    </p>
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 6,690
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 16:00
                        </li>
                      </ul>
                      <Link to="#">Enroll Now</Link>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="thumb">
                    <Link to="#">
                      <img src="assets/img/800x600.png" alt="Thumb" />
                    </Link>
                    <div className="price">Price: $124</div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      <div className="thumb">
                        <Link to="#">
                          <img src="assets/img/100x100.png" alt="Thumb" />
                        </Link>
                      </div>
                      <div className="others">
                        <Link to="#">Prokash Timer</Link>
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                          <span>5 (7,890)</span>
                        </div>
                      </div>
                    </div>
                    <h4>
                      <Link to="#">Java Programming Masterclass</Link>
                    </h4>
                    <p>
                      Would day nor ask walls known. But preserved advantage are
                      but and certainty earnestly enjoyment.
                    </p>
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 6,690
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 16:00
                        </li>
                      </ul>
                      <Link to="#">Enroll Now</Link>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Popular Courses */}
      <FooterSection />
    </>
  );
};

export default Courses;
