import { FooterSection } from "../atoms/Footer/index.tsx";
import NavigationComponent from "../atoms/Navigation/index.tsx";
import HeaderInformation from "../atoms/header.tsx";
import AboutUsImage from "../assets/img/about-bg.jpg";
import javaImage from "../assets/img/javaprogramming.png";
import cImage from "../assets/img/clanguage.png";
import cppImage from "../assets/img/c++language.png";
import cybersecurityImage from "../assets/img/cybersecurity.png";
import powerbiImage from "../assets/img/powerbi.png";
import artificalIntelliganceImage from "../assets/img/artificialintelligence.png";
import chatgptImage from "../assets/img/CHATGPT.png";
import pythonImage from "../assets/img/pythonprogramming.png";
import fullStackImage from "../assets/img/fullstackwebdevelopment.png";
import DataScienceImage from "../assets/img/datascience.png";
import cloudImage from "../assets/img/cloudcomputing.png";
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
              <h1>Certified Courses</h1>
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
      {/* End Breadcrumb */}
      {/* Start Popular Courses 
    ============================================= */}
      <div className="popular-courses default-padding bottom-less without-carousel">
        <div className="container">
          <div className="row">
            <div className="popular-courses-items">
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <Link to="#">
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
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <Link to="#"><img src="assets/img/100x100.png" alt="Thumb"></Link>
                              </div>
                              <div class="others">
                                  <Link to="#">Munil Druva</Link>
                                  <div class="rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                      <span>4.5 (23,890)</span>
                                  </div>
                              </div> */}
                    </div>
                    <h4>
                      <Link to="#">Java Programming</Link>
                    </h4>
                    {/* <p>
                              Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.
                          </p> */}
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
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <Link to="#">
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
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <Link to="#"><img src="assets/img/100x100.png" alt="Thumb"></Link>
                              </div>
                              <div class="others">
                                  <Link to="#">Munil Druva</Link>
                                  <div class="rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                      <span>4.5 (23,890)</span>
                                  </div>
                              </div> */}
                    </div>
                    <h4>
                      <Link to="#">C Language</Link>
                    </h4>
                    {/* <p>
                              Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.
                          </p> */}
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
                    <Link to="#">
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
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <Link to="#"><img src="assets/img/100x100.png" alt="Thumb"></Link>
                              </div>
                              <div class="others">
                                  <Link to="#">Munil Druva</Link>
                                  <div class="rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                      <span>4.5 (23,890)</span>
                                  </div>
                              </div> */}
                    </div>
                    <h4>
                      <Link to="#">C++ Language</Link>
                    </h4>
                    {/* <p>
                              Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.
                          </p> */}
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
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <Link to="#">
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
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <Link to="#"><img src="assets/img/100x100.png" alt="Thumb"></Link>
                              </div>
                              <div class="others">
                                  <Link to="#">Munil Druva</Link>
                                  <div class="rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                      <span>4.5 (23,890)</span>
                                  </div>
                              </div> */}
                    </div>
                    <h4>
                      <Link to="#">Power BI</Link>
                    </h4>
                    {/* <p>
                              Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.
                          </p> */}
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
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <Link to="#">
                      <img
                        src={artificalIntelliganceImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </Link>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <Link to="#"><img src="assets/img/100x100.png" alt="Thumb"></Link>
                              </div>
                              <div class="others">
                                  <Link to="#">Munil Druva</Link>
                                  <div class="rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                      <span>4.5 (23,890)</span>
                                  </div>
                              </div> */}
                    </div>
                    <h4>
                      <Link to="#">Artificial Intelligence</Link>
                    </h4>
                    {/* <p>
                              Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.
                          </p> */}
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 98
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 48:00hrs
                        </li>
                      </ul>
                      <Link to="/advanced-ai">Know More</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <Link to="#">
                      <img
                        src={cybersecurityImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </Link>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <Link to="#"><img src="assets/img/100x100.png" alt="Thumb"></Link>
                              </div>
                              <div class="others">
                                  <Link to="#">Akua Paul</Link>
                                  <div class="rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                      <span>5 (867)</span>
                                  </div>
                              </div> */}
                    </div>
                    <h4>
                      <Link to="#">Cyber Security</Link>
                    </h4>
                    {/* <p>
                              Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.
                          </p> */}
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 137
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 48:00hrs
                        </li>
                      </ul>
                      <Link to="/cyber-security">Know More</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <Link to="#">
                      <img
                        src={chatgptImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </Link>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <Link to="#"><img src="assets/img/100x100.png" alt="Thumb"></Link>
                              </div>
                              <div class="others">
                                  <Link to="#">Jonathom Kiyam</Link>
                                  <div class="rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <span>4.9 (2,655)</span>
                                  </div>
                              </div> */}
                    </div>
                    <h4>
                      <Link to="#">chat-GPT</Link>
                    </h4>
                    {/* <p>
                              Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.
                          </p> */}
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 78
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 48:00hrs
                        </li>
                      </ul>
                      <Link to="/chat-gpt">Know More</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <Link to="#">
                      <img
                        src={fullStackImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </Link>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <Link to="#"><img src="assets/img/100x100.png" alt="Thumb"></Link>
                              </div>
                              <div class="others">
                                  <Link to="#">Huma Park</Link>
                                  <div class="rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                      <span>4.4 (16,465)</span>
                                  </div>
                              </div> */}
                    </div>
                    <h4>
                      <Link to="#">Full Stack Web Development</Link>
                    </h4>
                    {/* <p>
                              Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.
                          </p> */}
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 238
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 48:00hrs
                        </li>
                      </ul>
                      <Link to="/full-stack-development">Know More</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <Link to="#">
                      <img
                        src={DataScienceImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </Link>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <Link to="#"><img src="assets/img/100x100.png" alt="Thumb"></Link>
                              </div>
                              <div class="others">
                                  <Link to="#">Prokash Timer</Link>
                                  <div class="rating">
                                      <i class="fas fa-star"></i> 
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                      <span>5 (7,890)</span>
                                  </div>
                              </div> */}
                    </div>
                    <h4>
                      <Link to="#">Data Science</Link>
                    </h4>
                    {/* <p>
                              Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.
                          </p> */}
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 229
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 48:00hrs
                        </li>
                      </ul>
                      <Link to="/data-science">Know More</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <Link to="#">
                      <img
                        src={cloudImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </Link>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <Link to="#"><img src="assets/img/100x100.png" alt="Thumb"></Link>
                              </div>
                              <div class="others">
                                  <Link to="#">Drunal Trula</Link>
                                  <div class="rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                      <span>4.6 (659)</span>
                                  </div>
                              </div> */}
                    </div>
                    <h4>
                      <Link to="#">Cloud Computing</Link>
                    </h4>
                    {/* <p>
                              Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.
                          </p> */}
                    <div className="bottom-info">
                      <ul>
                        <li>
                          <i className="fas fa-user" /> 145
                        </li>
                        <li>
                          <i className="fas fa-clock" /> 48:00hrs
                        </li>
                      </ul>
                      <Link to="/cloud-computing">Enroll Now</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <Link to="#">
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
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <Link to="#"><img src="assets/img/100x100.png" alt="Thumb"></Link>
                              </div>
                              <div class="others">
                                  <Link to="#">Drunal Trula</Link>
                                  <div class="rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                      <span>4.6 (659)</span>
                                  </div>
                              </div> */}
                    </div>
                    <h4>
                      <Link to="#">Python Programming</Link>
                    </h4>
                    {/* <p>
                              Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.
                          </p> */}
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
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <Link to="#">
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
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <Link to="#"><img src="assets/img/100x100.png" alt="Thumb"></Link>
                              </div>
                              <div class="others">
                                  <Link to="#">Drunal Trula</Link>
                                  <div class="rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                      <span>4.6 (659)</span>
                                  </div>
                              </div> */}
                    </div>
                    <h4>
                      <Link to="#">Data Structures &amp; Algorithm</Link>
                    </h4>
                    {/* <p>
                              Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment.
                          </p> */}
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
