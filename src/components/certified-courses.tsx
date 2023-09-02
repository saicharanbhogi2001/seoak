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
                  <a href="#">
                    <i className="fas fa-home" /> Home
                  </a>
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
                    <a href="#">
                      <img
                        src={javaImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </a>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <a href="#"><img src="assets/img/100x100.png" alt="Thumb"></a>
                              </div>
                              <div class="others">
                                  <a href="#">Munil Druva</a>
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
                      <a href="#">Java Programming</a>
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
                      <a href="/java-programming">Know More</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src={cImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </a>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <a href="#"><img src="assets/img/100x100.png" alt="Thumb"></a>
                              </div>
                              <div class="others">
                                  <a href="#">Munil Druva</a>
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
                      <a href="#">C Language</a>
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
                      <a href="/c-language">Know More</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src={cppImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </a>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <a href="#"><img src="assets/img/100x100.png" alt="Thumb"></a>
                              </div>
                              <div class="others">
                                  <a href="#">Munil Druva</a>
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
                      <a href="#">C++ Language</a>
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
                      <a href="/cpp-language">Know More</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src={powerbiImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </a>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <a href="#"><img src="assets/img/100x100.png" alt="Thumb"></a>
                              </div>
                              <div class="others">
                                  <a href="#">Munil Druva</a>
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
                      <a href="#">Power BI</a>
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
                      <a href="/powerbi">Know More</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src={artificalIntelliganceImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </a>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <a href="#"><img src="assets/img/100x100.png" alt="Thumb"></a>
                              </div>
                              <div class="others">
                                  <a href="#">Munil Druva</a>
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
                      <a href="#">Artificial Intelligence</a>
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
                      <a href="/advanced-ai">Know More</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src={cybersecurityImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </a>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <a href="#"><img src="assets/img/100x100.png" alt="Thumb"></a>
                              </div>
                              <div class="others">
                                  <a href="#">Akua Paul</a>
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
                      <a href="#">Cyber Security</a>
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
                      <a href="/cyber-security">Know More</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src={chatgptImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </a>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <a href="#"><img src="assets/img/100x100.png" alt="Thumb"></a>
                              </div>
                              <div class="others">
                                  <a href="#">Jonathom Kiyam</a>
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
                      <a href="#">chat-GPT</a>
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
                      <a href="/chat-gpt">Know More</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src={fullStackImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </a>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <a href="#"><img src="assets/img/100x100.png" alt="Thumb"></a>
                              </div>
                              <div class="others">
                                  <a href="#">Huma Park</a>
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
                      <a href="#">Full Stack Web Development</a>
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
                      <a href="/full-stack-development">Know More</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src={DataScienceImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </a>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <a href="#"><img src="assets/img/100x100.png" alt="Thumb"></a>
                              </div>
                              <div class="others">
                                  <a href="#">Prokash Timer</a>
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
                      <a href="#">Data Science</a>
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
                      <a href="/data-science">Know More</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src={cloudImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </a>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <a href="#"><img src="assets/img/100x100.png" alt="Thumb"></a>
                              </div>
                              <div class="others">
                                  <a href="#">Drunal Trula</a>
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
                      <a href="#">Cloud Computing</a>
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
                      <a href="/cloud-computing">Enroll Now</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src={pythonImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </a>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <a href="#"><img src="assets/img/100x100.png" alt="Thumb"></a>
                              </div>
                              <div class="others">
                                  <a href="#">Drunal Trula</a>
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
                      <a href="#">Python Programming</a>
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
                      <a href="/python">Enroll Now</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src={dsaImage}
                        alt="Thumb"
                        style={{ height: "300px" }}
                      />
                    </a>
                    <div className="price">
                      <b>Price: 5,000₹</b>
                    </div>
                  </div>
                  <div className="info">
                    <div className="author-info">
                      {/* <div class="thumb">
                                  <a href="#"><img src="assets/img/100x100.png" alt="Thumb"></a>
                              </div>
                              <div class="others">
                                  <a href="#">Drunal Trula</a>
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
                      <a href="#">Data Structures &amp; Algorithm</a>
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
                      <a href="/dsa">Enroll Now</a>
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
