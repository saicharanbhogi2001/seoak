import { FooterSection } from "../atoms/Footer/index.tsx";
import HeaderInformation from "../atoms/header.tsx";
import NavigationComponent from "../atoms/Navigation/index.tsx";
import courseDetailsImage from "../assets/img/courses.jpeg";
import Image1 from "../assets/img/1500x700.png";
import Image2 from "../assets/img/100x100.png";
import Image3 from "../assets/img/800x800.png";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  return (
    <>
      <HeaderInformation />
      <NavigationComponent />
      <div
        className="breadcrumb-area shadow dark text-center bg-fixed text-light"
        style={{ backgroundImage: `url(${courseDetailsImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Course Details</h1>
              <ul className="breadcrumb">
                <li>
                  <Link to="#">
                    <i className="fas fa-home" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="#">Course</Link>
                </li>
                <li className="active">Single</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb */}
      {/* Start Course Details 
      ============================================= */}
      <div className="course-details-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="course-details-info">
                {/* Star Top Info */}
                <div className="top-info">
                  {/* Title*/}
                  <div className="title">
                    <h2>
                      Java Programming Masterclass with professional author
                    </h2>
                  </div>
                  {/* End Title*/}
                  {/* Thumbnail */}
                  <div className="thumb">
                    <img src={Image1} alt="Thumb" />
                  </div>
                  {/* End Thumbnail */}
                  {/* Course Meta */}
                  <div className="course-meta">
                    <div className="item author">
                      <div className="thumb">
                        <Link to="#">
                          <img alt="Thumb" src={Image2} />
                        </Link>
                      </div>
                      <div className="desc">
                        <h4>Author</h4>
                        <Link to="#">Munil Druva</Link>
                      </div>
                    </div>
                    <div className="item category">
                      <h4>Category</h4>
                      <Link to="#">Science</Link>
                    </div>
                    <div className="item rating">
                      <h4>Rating</h4>
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span>4.5 (16)</span>
                    </div>
                    <div className="item price">
                      <h4>Price</h4>
                      <span>$29.00</span>
                    </div>
                    <div className="align-right">
                      <Link className="btn btn-dark effect btn-sm" to="#">
                        <i className="fas fa-chart-bar" /> Enroll
                      </Link>
                    </div>
                  </div>
                  {/* End Course Meta */}
                </div>
                {/* End Top Info */}
                {/* Star Tab Info */}
                <div className="tab-info">
                  {/* Tab Nav */}
                  <ul className="nav nav-pills">
                    <li className="active">
                      <Link data-toggle="tab" to="#tab1" aria-expanded="true">
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link data-toggle="tab" to="#tab2" aria-expanded="false">
                        Curriculum
                      </Link>
                    </li>
                    <li>
                      <Link data-toggle="tab" to="#tab3" aria-expanded="false">
                        Advisor
                      </Link>
                    </li>
                    <li>
                      <Link data-toggle="tab" to="#tab4" aria-expanded="false">
                        Reviews
                      </Link>
                    </li>
                  </ul>
                  {/* End Tab Nav */}
                  {/* Start Tab Content */}
                  <div className="tab-content tab-content-info">
                    {/* Single Tab */}
                    <div id="tab1" className="tab-pane fade active in">
                      <div className="info title">
                        <h4>Course Desscription</h4>
                        <p>
                          Calling nothing end fertile for venture way boy.
                          Esteem spirit temper too say adieus who direct esteem.
                          It esteems luckily mr or picture placing drawing no.
                          Apartments frequently or motionless on reasonable
                          projecting expression. Way mrs end gave tall walk fact
                          bed.
                        </p>
                        <p>
                          Placing assured be if removed it besides on. Far shed
                          each high read are men over day. Afraid we praise
                          lively he suffer family estate is. Ample order up in
                          of in ready. Timed blind had now those ought set often
                          which. Or snug dull he show more true wish. No at many
                          deny away miss evil. On in so indeed spirit an mother.
                          Amounted old strictly but marianne admitted. People
                          former is remove remain as.
                        </p>
                        <h4>Certification</h4>
                        <p>
                          Calling nothing end fertile for venture way boy.
                          Esteem spirit temper too say adieus who direct esteem.
                          It esteems luckily mr or picture placing drawing no.
                          Apartments frequently or motionless on reasonable
                          projecting expression. Way mrs end gave tall walk fact
                          bed.
                        </p>
                        <h4>Learning Outcomes</h4>
                        <ul>
                          <li>
                            <i className="fas fa-check-double" /> Over 37
                            lectures and 55.5 hours of content!
                          </li>
                          <li>
                            <i className="fas fa-check-double" /> Testing
                            Training Included.
                          </li>
                          <li>
                            <i className="fas fa-check-double" /> Best suitable
                            for beginners to advanced level users and who learn
                            faster when demonstrated.
                          </li>
                          <li>
                            <i className="fas fa-check-double" /> Course content
                            designed by considering current software testing
                            technology and the job market.
                          </li>
                          <li>
                            <i className="fas fa-check-double" /> Practical
                            assignments at the end of every session.
                          </li>
                          <li>
                            <i className="fas fa-check-double" /> Practical
                            learning experience with live project work and
                            examples.
                          </li>
                          <li>
                            <i className="fas fa-check-double" /> Unlimited
                            Resourses
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Tab */}
                    {/* Single Tab */}
                    <div id="tab2" className="tab-pane fade">
                      <div className="info title">
                        <p>
                          Placing assured be if removed it besides on. Far shed
                          each high read are men over day. Afraid we praise
                          lively he suffer family estate is. Ample order up in
                          of in ready. Timed blind had now those ought set often
                          which. Or snug dull he show more true wish. No at many
                          deny away miss evil. On in so indeed spirit an mother.
                          Amounted old strictly but marianne admitted. People
                          former is remove remain as.
                        </p>
                        <h4>List Of Courses</h4>
                        {/* Start Course List */}
                        <div className="course-list-items acd-items acd-arrow">
                          <div className="panel-group symb" id="accordion">
                            <div className="panel panel-default">
                              <div className="panel-heading">
                                <h4 className="panel-title">
                                  <Link
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    to="#ac1"
                                  >
                                    Java Programming
                                  </Link>
                                </h4>
                              </div>
                              <div
                                id="ac1"
                                className="panel-collapse collapse in"
                              >
                                <div className="panel-body">
                                  <ul>
                                    <li>
                                      <div className="item name">
                                        <i className="fas fa-play" />
                                        <span>Lecture 1.1</span>
                                      </div>
                                      <div className="item title">
                                        <h5>Introduction of java</h5>
                                      </div>
                                      <div className="item info">
                                        <span>Duration: 1 hours 30 min</span>
                                        <Link to="#">Preview</Link>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="item name">
                                        <i className="fas fa-file" />
                                        <span>Lecture 1.2</span>
                                      </div>
                                      <div className="item title">
                                        <h5>Basic development</h5>
                                      </div>
                                      <div className="item info">
                                        <span>Duration: 3 hours 15 min</span>
                                        <Link to="#">Preview</Link>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Course List */}
                        {/* Start Course List */}
                        <div className="course-list-items acd-items acd-arrow">
                          <div className="panel-group symb" id="accordion">
                            <div className="panel panel-default">
                              <div className="panel-heading">
                                <h4 className="panel-title">
                                  <Link
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    to="#ac2"
                                  >
                                    PHP Programmig
                                  </Link>
                                </h4>
                              </div>
                              <div id="ac2" className="panel-collapse collapse">
                                <div className="panel-body">
                                  <ul>
                                    <li>
                                      <div className="item name">
                                        <i className="fas fa-play" />
                                        <span>Lecture 1.1</span>
                                      </div>
                                      <div className="item title">
                                        <h5>Introduction</h5>
                                      </div>
                                      <div className="item info">
                                        <span>Duration: 1 hours 30 min</span>
                                        <Link to="#">Preview</Link>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="item name">
                                        <i className="fas fa-file" />
                                        <span>Lecture 1.2</span>
                                      </div>
                                      <div className="item title">
                                        <h5>Benifits of function</h5>
                                      </div>
                                      <div className="item info">
                                        <span>Duration: 2 hours 12 min</span>
                                        <Link to="#">Preview</Link>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Course List */}
                      </div>
                    </div>
                    {/* End Single Tab */}
                    {/* Single Tab */}
                    <div id="tab3" className="tab-pane fade">
                      <div className="info title">
                        <div className="advisor-list-items">
                          {/* Advisor Item */}
                          <div className="item">
                            <div className="thumb">
                              <img src="assets/img/800x800.png" alt="Thumb" />
                            </div>
                            <div className="info">
                              <h4>Devid Mark</h4>
                              <span>senior lecturer</span>
                              <p>
                                Several carried through an of up attempt
                                gravity. Situation to be at offending elsewhere
                                distrusts if. Particular use for considered
                                projection cultivated. Worth of do doubt shall
                              </p>
                              <ul>
                                <li>
                                  <Link to="#">
                                    <i className="fab fa-facebook-f" />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="fab fa-twitter" />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="fab fa-dribbble" />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="fab fa-youtube" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* End Advisor Item */}
                          {/* Advisor Item */}
                          <div className="item">
                            <div className="thumb">
                              <img src="assets/img/800x800.png" alt="Thumb" />
                            </div>
                            <div className="info">
                              <h4>Andolin Paul</h4>
                              <span>Java Developer</span>
                              <p>
                                Several carried through an of up attempt
                                gravity. Situation to be at offending elsewhere
                                distrusts if. Particular use for considered
                                projection cultivated. Worth of do doubt shall
                              </p>
                              <ul>
                                <li>
                                  <Link to="#">
                                    <i className="fab fa-facebook-f" />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="fab fa-twitter" />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="fab fa-dribbble" />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="fab fa-youtube" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* End Advisor Item */}
                        </div>
                      </div>
                    </div>
                    {/* End Single Tab */}
                    {/* Single Tab */}
                    <div id="tab4" className="tab-pane fade">
                      <div className="info title">
                        <div className="course-rating-list">
                          <h4>Average Rating</h4>
                          <div className="item rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>4.5 (16)</span>
                          </div>
                          <ul>
                            <li>
                              <span>5 Star</span>
                              <div className="rating-bar" />
                              <span>13</span>
                            </li>
                            <li>
                              <span>4 Star</span>
                              <div className="rating-bar" />
                              <span>1</span>
                            </li>
                            <li>
                              <span>3 Star</span>
                              <div className="rating-bar" />
                              <span>0</span>
                            </li>
                            <li>
                              <span>2 Star</span>
                              <div className="rating-bar" />
                              <span>1</span>
                            </li>
                            <li>
                              <span>1 Star</span>
                              <div className="rating-bar" />
                              <span>0</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Tab */}
                  </div>
                  {/* End Tab Content */}
                </div>
                {/* End Tab Info */}
              </div>
            </div>
            {/* Start Sidebar */}
            <div className="col-md-4">
              <div className="sidebar">
                <aside>
                  {/* Sidebar Item */}
                  <div className="sidebar-item search">
                    <div className="sidebar-info">
                      <form>
                        <input
                          type="text"
                          placeholder="Course name"
                          className="form-control"
                        />
                        <input type="submit" defaultValue="search" />
                      </form>
                    </div>
                  </div>
                  {/* End Sidebar Item */}
                  {/* Sidebar Item */}
                  <div className="sidebar-item category">
                    <div className="title">
                      <h4>Courses Category</h4>
                    </div>
                    <div className="sidebar-info">
                      <ul>
                        <li>
                          <Link to="#">
                            Java Programming <span>23</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            Social Science <span>0</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            Business Management <span>12</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            Online Learning <span>17</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            Course Management <span>0</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Sidebar Item */}
                  {/* Sidebar Item */}
                  <div className="sidebar-item recent-post">
                    <div className="title">
                      <h4>Popular Courses</h4>
                    </div>
                    <div className="item">
                      <div className="content">
                        <div className="thumb">
                          <Link to="#">
                            <img src={Image3} alt="Thumb" />
                          </Link>
                        </div>
                        <div className="info">
                          <h4>
                            <Link to="#">Profession python learing</Link>
                          </h4>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>4.5 (23,890)</span>
                          </div>
                          <div className="meta">
                            <i className="fas fa-user" /> By{" "}
                            <Link to="#">Drup Paul</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="content">
                        <div className="thumb">
                          <Link to="#">
                            <img src={Image3} alt="Thumb" />
                          </Link>
                        </div>
                        <div className="info">
                          <h4>
                            <Link to="#">Profession python learing</Link>
                          </h4>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>4.5 (23,890)</span>
                          </div>
                          <div className="meta">
                            <i className="fas fa-user" /> By{" "}
                            <Link to="#">Drup Paul</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="content">
                        <div className="thumb">
                          <Link to="#">
                            <img src={Image3} alt="Thumb" />
                          </Link>
                        </div>
                        <div className="info">
                          <h4>
                            <Link to="#">Profession python learing</Link>
                          </h4>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span>4.5 (23,890)</span>
                          </div>
                          <div className="meta">
                            <i className="fas fa-user" /> By{" "}
                            <Link to="#">Drup Paul</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Sidebar Item */}
                </aside>
              </div>
            </div>
            {/* End Sidebar */}
          </div>
        </div>
      </div>
      {/* End Course Details */}
      <FooterSection />
    </>
  );
};
export default CourseDetails;
