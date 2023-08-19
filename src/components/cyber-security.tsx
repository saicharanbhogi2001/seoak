const CyberSecurity = () => {
  return (
    <>
      <div className="top-bar-area address-two-lines bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-8 address-info">
              <div className="info box">
                <ul>
                  <li>
                    <span>
                      <i className="fas fa-map" /> Address
                    </span>
                    Madhapur, Telangana.
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-envelope-open" /> Email
                    </span>
                    support@seoak.in
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-phone" /> Contact
                    </span>
                    +91&nbsp;95025 49362
                  </li>
                </ul>
              </div>
            </div>
            <div className="user-login text-right col-md-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeM_1nUTx2DaBUxSR5xXgoTjKfE71wt0trYPAHYSf8t5QWB8g/viewform">
                <i className="fas fa-edit" /> Register
              </a>
              <a className="popup-with-form" href="#login-form">
                <i className="fas fa-user" /> Login
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Top */}
      {/* Header 
    ============================================= */}
      <header id="home">
        {/* Start Navigation */}
        <nav className="navbar navbar-default navbar-sticky bootsnav">
          {/* Start Top Search */}
          <div className="container">
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
            {/* Start Atribute Navigation */}
            {/* <div class="attr-nav">
              <ul>
                  <li class="search"><a href="#"><i class="fa fa-search"></i></a></li>
              </ul>
          </div>         */}
            {/* End Atribute Navigation */}
            {/* Start Header Navigation */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars" />
              </button>
              <a className="navbar-brand" href="index.html">
                <img src="assets/img/logo.png" className="logo" alt="Logo" />
              </a>
            </div>
            {/* End Header Navigation */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul
                className="nav navbar-nav navbar-right"
                data-in="#"
                data-out="#"
              >
                <li className="#">
                  <a href="index.html" className="dropdown-toggle active">
                    Home
                  </a>
                </li>
                <li className="dropdown megamenu-fw">
                  <a href="about-us.html" className="active">
                    About Us
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    href="certified-courses.html"
                    className="dropdown-toggle active"
                    data-toggle="dropdown"
                  >
                    Certified Courses
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="c-language.html">C Language</a>
                    </li>
                    <li>
                      <a href="c++-language.html">C++ Language</a>
                    </li>
                    <li>
                      <a href="java-programming.html">JAVA Programming</a>
                    </li>
                    <li>
                      <a href="powerbi.html">Power BI</a>
                    </li>
                    <li>
                      <a href="python.html">Python</a>
                    </li>
                    <li>
                      <a href="DSA.html">
                        DSA (Data Structures &amp; Algorithm)
                      </a>
                    </li>
                    <li>
                      <a href="full-stack-development.html">
                        Full Stack Web Development
                      </a>
                    </li>
                    <li>
                      <a href="data-science.html">Data Science</a>
                    </li>
                    <li>
                      <a href="cloud-computing.html">Cloud Computing</a>
                    </li>
                    <li>
                      <a href="cyber-security.html">Cyber Security</a>
                    </li>
                    <li>
                      <a href="advanced-ai.html">Advanced AI</a>
                    </li>
                    <li>
                      <a href="chat-gpt.html">Chat GPT</a>
                    </li>
                  </ul>
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
                      <a href="data-science.html">Data Science</a>
                    </li>
                    <li>
                      <a href="cloud-computing.html">Cloud Computing</a>
                    </li>
                    <li>
                      <a href="cyber-security.html">Cyber Security</a>
                    </li>
                    <li>
                      <a href="advanced-ai.html">Advanced AI</a>
                    </li>
                    <li>
                      <a href="chat-gpt.html">Chat GPT</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">contact</a>
                </li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
          </div>
        </nav>
        {/* End Navigation */}
      </header>
      {/* End Header */}
      {/* Start Banner 
    ============================================= */}
      <div
        className="banner-area auto-height banner-box text-default text-light bg-gradient bg-fixed"
        style={{ backgroundImage: "url(assets/img/courses.jpg)" }}
      >
        <div className="item">
          <div className="box-table shadow dark">
            <div className="box-cell">
              <div className="container">
                <div className="row item-flex center">
                  <div className="col-md-5 thumb">
                    {/* <img src="assets/img/thumb.png" alt="Thumb"> */}
                    {/* <h1 style="font-weight: bold; font-size: 52px; line-height: 7rem;">Register Now & <br> Get Flat 20% OFF</h1> */}
                  </div>
                  <div className="col-md-7">
                    <div className="content">
                      <div className="reg-area inc-faq default-padding">
                        <div className="container">
                          <div className="row">
                            <div className="reg-items">
                              <div className="col-md-6 reg-form">
                                <div className="reg-box text-light">
                                  <h3>Get a Free online Registration</h3>
                                  <form action="#">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            className="form-control"
                                            placeholder="First Name"
                                            type="text"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            className="form-control"
                                            placeholder="Last Name"
                                            type="text"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="form-group">
                                          <input
                                            className="form-control"
                                            placeholder="Email*"
                                            type="email"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="form-group">
                                          <select>
                                            <option value={1}>
                                              Cyber Security
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="form-group">
                                          <input
                                            className="form-control"
                                            placeholder="Phone"
                                            type="text"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeM_1nUTx2DaBUxSR5xXgoTjKfE71wt0trYPAHYSf8t5QWB8g/viewform">
                                          <button type="button">
                                            Register Now
                                          </button>
                                        </a>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Banner */}
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
                    <h2>Cyber Security</h2>
                  </div>
                  {/* End Title*/}
                  {/* Thumbnail */}
                  <div className="thumb">
                    <img src="assets/img/cybersecurity.png" alt="Thumb" />
                  </div>
                  {/* End Thumbnail */}
                  {/* Course Meta */}
                  <div className="course-meta">
                    {/* <div class="item author">
                              <div class="thumb">
                                  <a href="#"><img alt="Thumb" src="assets/img/100x100.png"></a>
                              </div>
                              <div class="desc">
                                  <h4>Author</h4>
                                  <a href="#">Munil Druva</a>
                              </div>
                          </div> */}
                    <div className="item category">
                      <h4>Category</h4>
                      <a href="#">Programming</a>
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
                      <span>5000₹</span>
                    </div>
                    <div className="align-right">
                      <a
                        className="btn btn-dark effect btn-sm"
                        href="https://wa.me/+917483758735"
                      >
                        <i className="fas fa-chart-bar" /> Enroll
                      </a>
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
                      <a data-toggle="tab" href="#tab1" aria-expanded="true">
                        Overview
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#tab2" aria-expanded="false">
                        Curriculum
                      </a>
                    </li>
                    {/* <li>
                              <a data-toggle="tab" href="#tab3" aria-expanded="false">
                                  Advisor
                              </a>
                          </li> */}
                    <li>
                      <a data-toggle="tab" href="#tab4" aria-expanded="false">
                        Reviews
                      </a>
                    </li>
                  </ul>
                  {/* End Tab Nav */}
                  {/* Start Tab Content */}
                  <div className="tab-content tab-content-info">
                    {/* Single Tab */}
                    <div id="tab1" className="tab-pane fade active in">
                      <div className="info title">
                        <h4>Course Description</h4>
                        <p>
                          Cybersecurity involves protecting computer systems,
                          networks, and data from unauthorized access, breaches,
                          and attacks. It encompasses various practices and
                          technologies aimed at safeguarding digital assets and
                          ensuring the confidentiality, integrity, and
                          availability of information. In today's interconnected
                          world, cybersecurity is crucial to protect
                          individuals, organizations, and governments from cyber
                          threats, such as malware, hacking, data breaches, and
                          identity theft.
                        </p>
                        <p>
                          The Cybersecurity Fundamentals course provides
                          students with a comprehensive understanding of the
                          principles and practices of cybersecurity. This course
                          is suitable for individuals who want to gain knowledge
                          and skills in securing computer systems and networks.
                        </p>
                        <h4>Certification</h4>
                        <p>
                          This certificate validates the student's ability to
                          apply theoretical concepts to real-world projects and
                          demonstrates their competence in specific areas of
                          expertise.{" "}
                        </p>
                        <p>
                          Upcoming collaborations with Nascom, NSDC, and
                          Skillindia, which help students to get placed in their
                          dream companies.
                        </p>
                        <p>
                          A internship certificate from a reputable company like
                          SEOAK carries weight and credibility within the
                          industry.
                        </p>
                        <p>
                          It signifies that the student has received practical
                          training and exposure to industry-relevant tools,
                          technologies, and practices, making them more
                          attractive to potential employers.
                        </p>
                        <p>
                          Including an internship certificate on a resume or CV
                          adds weight and value to the student's profile.
                        </p>
                        <p>
                          Completing an internship in our company provides
                          students with opportunities to network with
                          professionals in the field.
                        </p>
                        <p>
                          Students can connect with mentors, industry experts,
                          and fellow interns, expanding their professional
                          network and gaining valuable contacts for future
                          career development.
                        </p>
                        <p>
                          Receiving an internship certificate from our company
                          is an accomplishment that can boost a student's
                          confidence.
                        </p>
                        <p>
                          A internship certificate from our company enhances a
                          student's employability. It demonstrates to potential
                          employers that they have gained practical experience
                          and have been exposed to the latest industry trends
                          and technologies.
                        </p>
                        <p>
                          Our certificates encourage lifelong learning and
                          continuous professional&nbsp;development.
                        </p>
                        <br />
                        <h4>Learning Outcomes</h4>
                        <ul>
                          <li>
                            <i className="fas fa-check-double" /> Over 48
                            lectures and 72 hours of content!
                          </li>
                          <li>
                            <i className="fas fa-check-double" /> Theoretical
                            and practical training included real-time projects.
                          </li>
                          <li>
                            <i className="fas fa-check-double" /> Best suitable
                            for beginners to advanced level users and who learn
                            faster when demonstrated.
                          </li>
                          <li>
                            <i className="fas fa-check-double" /> Course content
                            is Designed by considering current trending
                            technologies and the job market.
                          </li>
                          <li>
                            <i className="fas fa-check-double" /> Practical
                            assignments at the end of every session.
                          </li>
                          <li>
                            <i className="fas fa-check-double" /> Practical
                            real-time experience with live projects for every
                            end of the topic.
                          </li>
                          <li>
                            <i className="fas fa-check-double" /> Unlimited
                            resources, with overall six&nbsp;courses&nbsp;LMS.
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Tab */}
                    {/* Single Tab */}
                    <div id="tab2" className="tab-pane fade">
                      <div className="info title">
                        <p>
                          Cybersecurity involves protecting computer systems,
                          networks, and data from unauthorized access, breaches,
                          and attacks. It encompasses various practices and
                          technologies aimed at safeguarding digital assets and
                          ensuring the confidentiality, integrity, and
                          availability of information. In today's interconnected
                          world, cybersecurity is crucial to protect
                          individuals, organizations, and governments from cyber
                          threats, such as malware, hacking, data breaches, and
                          identity theft.
                        </p>
                        <h4>List Of Courses</h4>
                        {/* Start Course List */}
                        <div className="course-list-items acd-items acd-arrow">
                          <div className="panel-group symb" id="accordion">
                            <div className="panel panel-default">
                              <div className="panel-heading">
                                <h4 className="panel-title">
                                  <a
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#ac1"
                                  >
                                    Cybr Security
                                  </a>
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
                                        <h5>Introduction of Cyber Security</h5>
                                      </div>
                                      <div className="item info">
                                        <span>Duration: 34 Mins</span>
                                        <a href="#">Preview</a>
                                      </div>
                                    </li>
                                    {/* <li>
                                                              <div class="item name">
                                                                  <i class="fas fa-file"></i>
                                                                  <span>Lecture 1.2</span>
                                                              </div>
                                                              <div class="item title">
                                                                  <h5>Basic development</h5>
                                                              </div>
                                                              <div class="item info">
                                                                  <span>Duration: 3 hours 15 min</span>
                                                                  <a href="#">Preview</a>
                                                              </div>
                                                          </li> */}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Course List */}
                        {/* Start Course List */}
                        {/* <div class="course-list-items acd-items acd-arrow">
                                      <div class="panel-group symb" id="accordion">
                                          <div class="panel panel-default">
                                              <div class="panel-heading">
                                                  <h4 class="panel-title">
                                                      <a data-toggle="collapse" data-parent="#accordion" href="#ac2">
                                                          PHP Programmig 
                                                      </a>
                                                  </h4>
                                              </div>
                                              <div id="ac2" class="panel-collapse collapse">
                                                  <div class="panel-body">
                                                      <ul>
                                                          <li>
                                                              <div class="item name">
                                                                  <i class="fas fa-play"></i>
                                                                  <span>Lecture 1.1</span>
                                                              </div>
                                                              <div class="item title">
                                                                  <h5>Introduction</h5>
                                                              </div>
                                                              <div class="item info">
                                                                  <span>Duration: 1 hours 30 min</span>
                                                                 <a href="#">Preview</a>
                                                              </div>
                                                          </li>
                                                          <li>
                                                              <div class="item name">
                                                                  <i class="fas fa-file"></i>
                                                                  <span>Lecture 1.2</span>
                                                              </div>
                                                              <div class="item title">
                                                                  <h5>Benifits of function</h5>
                                                              </div>
                                                              <div class="item info">
                                                                  <span>Duration: 2 hours 12 min</span>
                                                                  <a href="#">Preview</a>
                                                              </div>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div> */}
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
                                  <a href="#">
                                    <i className="fab fa-facebook-f" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-dribbble" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-youtube" />
                                  </a>
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
                                  <a href="#">
                                    <i className="fab fa-facebook-f" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-dribbble" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-youtube" />
                                  </a>
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
                  <div className="sidebar-item category">
                    <div className="title">
                      <h4>Certified Courses</h4>
                    </div>
                    <div className="sidebar-info">
                      <ul>
                        <li>
                          <a href="cloud-computing.html">
                            Cloud Computing
                            <span />
                          </a>
                        </li>
                        <li>
                          <a href="c++-language.html">
                            C++ Language <span />
                          </a>
                        </li>
                        <li>
                          <a href="powerbi.html">
                            Power BI
                            <span />
                          </a>
                        </li>
                        <li>
                          <a href="full-stack-development.html">
                            Full Stack Web Development
                            <span />
                          </a>
                        </li>
                        <li>
                          <a href="cyber-security.html">
                            Cyber Security <span />
                          </a>
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
                          <a href="#">
                            <img
                              src="assets/img/popularcoursesartificialintellegence.png"
                              alt="Thumb"
                            />
                          </a>
                        </div>
                        <div className="info">
                          <h4>
                            <a href="advanced-ai.html">Advanced AI</a>
                          </h4>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span />
                          </div>
                          {/* <div class="meta">
                                          <i class="fas fa-user"></i>  <a href="#"></a> 
                                      </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="content">
                        <div className="thumb">
                          <a href="#">
                            <img
                              src="assets/img/popularcourseschatgpt.png"
                              alt="Thumb"
                            />
                          </a>
                        </div>
                        <div className="info">
                          <h4>
                            <a href="chat-gpt.html">Chat GPT</a>
                          </h4>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <span />
                          </div>
                          {/* <div class="meta">
                                          <i class="fas fa-user"></i> By <a href="#">Drup Paul</a> 
                                      </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="content">
                        <div className="thumb">
                          <a href="#">
                            <img
                              src="assets/img/popularcoursesdatascience.png"
                              alt="Thumb"
                            />
                          </a>
                        </div>
                        <div className="info">
                          <h4>
                            <a href="data-science.html">Data Science</a>
                          </h4>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            {/* <span>4.5 (23,890)</span> */}
                          </div>
                          {/* <div class="meta">
                                          <i class="fas fa-user"></i> By <a href="#">Drup Paul</a> 
                                      </div> */}
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
      {/* Start Fun Factor 
    ============================================= */}
      <div
        className="fun-factor-area default-padding bottom-less text-center bg-fixed shadow dark-hard"
        style={{ backgroundImage: "url(assets/img/number bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 item">
              <div className="fun-fact">
                <div className="icon">
                  <i className="flaticon-contract" />
                </div>
                <div className="info">
                  <span className="timer" data-to={212} data-speed={5000} />
                  <span className="medium">No Of Students Enrolled</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 item">
              <div className="fun-fact">
                <div className="icon">
                  <i className="flaticon-professor" />
                </div>
                <div className="info">
                  <span className="timer" data-to={100} data-speed={5000} />
                  <span className="medium">Mentors Enrolled</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 item">
              <div className="fun-fact">
                <div className="icon">
                  <i className="flaticon-online" />
                </div>
                <div className="info">
                  <span className="timer" data-to={200} data-speed={5000} />
                  <span className="medium">Job Placements</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 item">
              <div className="fun-fact">
                <div className="icon">
                  <i className="flaticon-reading" />
                </div>
                <div className="info">
                  <span className="timer" data-to={200} data-speed={5000} />
                  <span className="medium">Certificates Issued</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Fun Factor */}
      {/* Start Top Categories 
    ============================================= */}
      <div
        id="top-categories"
        className="top-cat-area bg-gray default-padding bottom-less"
      >
        <div className="container">
          <div className="row">
            <div className="site-heading text-center">
              <div className="col-md-8 col-md-offset-2">
                <h2>Our Promise For You</h2>
                {/* <p>
                      Discourse assurance estimable applauded to so. Him everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated estimating excellence an to impression. 
                  </p> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="top-cat-items text-light inc-bg-color">
              <div className="col-md-3 col-sm-6 equal-height">
                <div className="item mariner">
                  <a href="#one-on-one" className="popup-with-form">
                    <i className="flaticon-feature" />
                    <div className="info">
                      <h4>One On One Interaction</h4>
                      <span />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div className="item java">
                  <a href="#real-time" className="popup-with-form">
                    <i className="flaticon-interaction" />
                    <div className="info">
                      <h4>Real Time Projects</h4>
                      <span />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div className="item malachite">
                  <a href="#lms-access" className="popup-with-form">
                    <i className="flaticon-conveyor" />
                    <div className="info">
                      <h4>LMS Access For All Courses</h4>
                      <span />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div className="item emerald">
                  <a href="#live-projects" className="popup-with-form">
                    <i className="flaticon-potential" />
                    <div className="info">
                      <h4>Live Projects</h4>
                      <span />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div className="item casablanca">
                  <a href="#scholarships" className="popup-with-form">
                    <i className="flaticon-education" />
                    <div className="info">
                      <h4>Scholarships</h4>
                      <span />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div className="item brilliantrose">
                  <a href="#updated-curriculam" className="popup-with-form">
                    <i className="flaticon-print" />
                    <div className="info">
                      <h4>Updated Curriculum </h4>
                      <span />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div className="item cinnabar">
                  <a href="#certified-mentors" className="popup-with-form">
                    <i className="flaticon-translate" />
                    <div className="info">
                      <h4>Certified Mentors</h4>
                      <span />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 equal-height">
                <div className="item plum">
                  <a href="#paid-internships" className="popup-with-form">
                    <i className="flaticon-firewall" />
                    <div className="info">
                      <h4>Paid Internships</h4>
                      <span />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Top Categories */}
      {/* Start Our Features Latest Post
    ============================================= */}
      <div className="our-featues-area inc-trending-courses about-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8 our-feature-items">
              <div className="row">
                <div className="col-md-12 info less-bar">
                  <h5>Why Choose Us?</h5>
                  <h1>
                    Welcome to the biggest online learning source of Seoak
                  </h1>
                  <p>
                    Seoak, a leading IT software training company, has
                    established itself as a dominant force in a short span of
                    time. With efficient coordination, our well-planned
                    operations encompass planning, control, coordination, and
                    motivation. Our expert coordinators handle all subjects,
                    lectures, problems, and draw conclusive solutions, ensuring
                    a seamless learning experience.
                  </p>
                </div>
                {/* Start Fatures */}
                <div className="our-features">
                  <div className="col-md-6 col-sm-6">
                    <div className="item mariner">
                      <div className="icon">
                        <i className="flaticon-faculty-shield" />
                      </div>
                      <div className="info">
                        <h4>Expert faculty</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="item java">
                      <div className="icon">
                        <i className="flaticon-book-2" />
                      </div>
                      <div className="info">
                        <h4>Online Learning</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="item malachite">
                      <div className="icon">
                        <i className="flaticon-education" />
                      </div>
                      <div className="info">
                        <h4>Scholarship</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="item brilliantrose">
                      <div className="icon">
                        <i className="flaticon-university-campus" />
                      </div>
                      <div className="info">
                        <h4>Paid Internships</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Our Features */}
            {/* End Home Sidebar */}
            <div className="col-md-4 home-sidebar">
              {/* Start Latest Post */}
              <div className="sidebar-item latest-posts trending-courses-box">
                <h4>Popular Courses</h4>
                <div className="trending-courses-items">
                  <div className="item">
                    <h4>
                      <a href="c++-language.html">C++ Programming</a>
                    </h4>
                  </div>
                  <div className="item">
                    <h4>
                      <a href="data-science.html">Data Science</a>
                    </h4>
                  </div>
                  <div className="item">
                    <h4>
                      <a href="cloud-computing.html">Cloud Computing</a>
                    </h4>
                  </div>
                  <div className="item">
                    <h4>
                      <a href="full-stack-development.html">
                        full Stack Development
                      </a>
                    </h4>
                  </div>
                  <a href="industrial-live-training.html" className="more">
                    All Courses <i className="fas fa-angle-double-right" />
                  </a>
                </div>
              </div>
              {/* End Latest Posts */}
            </div>
            {/* End Home Sidebar */}
          </div>
        </div>
      </div>
      {/* End Our Features & Latest Post */}
      {/* Start Testimonials 
    ============================================= */}
      <div className="testimonials-area carousel-shadow default-padding bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="site-heading text-center">
              <div className="col-md-8 col-md-offset-2">
                <h2>Students Review</h2>
                <p>Read Our Successfull Students Reviews</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="clients-review-carousel owl-carousel owl-theme">
                {/* Single Item */}
                <div className="item">
                  <div className="col-md-5 thumb">
                    <img src="assets/img/studentsreviewone.png" alt="Thumb" />
                  </div>
                  <div className="col-md-7 info">
                    <p>
                      I cannot thank the training and placement department of
                      SEOAK enough for their unwavering dedication to providing
                      exceptional training and creating abundant placement
                      opportunities.
                    </p>
                    <h4>Praveen Kumar</h4>
                    <span>Full Stack Web Development</span>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="col-md-5 thumb">
                    <img src="assets/img/studentsreviewthree.png" alt="Thumb" />
                  </div>
                  <div className="col-md-7 info">
                    <p>
                      Being part of SEOAK is a privilege, with immense growth
                      opportunities and gratitude within me. The faculty and
                      department go above and beyond, shaping students' futures
                      tirelessly. Thank you for the placements.
                    </p>
                    <h4>Sai Krishna</h4>
                    <span>JAVA</span>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="col-md-5 thumb">
                    <img src="assets/img/studentsreviewfour.png" alt="Thumb" />
                  </div>
                  <div className="col-md-7 info">
                    <p>
                      After completing graduation in B.Com I chose a career in
                      data analytics. Being from a non-technical background,
                      this was quite new. But joining a course from Seoak has
                      been my best decision. Highly Recomended for everyone.
                    </p>
                    <h4>Sai Teja</h4>
                    <span>Data Analytics</span>
                  </div>
                </div>
                {/* Single Item */}
                {/* Single Item */}
                <div className="item">
                  <div className="col-md-5 thumb">
                    <img src="assets/img/studentsreviewtwo.png" alt="Thumb" />
                  </div>
                  <div className="col-md-7 info">
                    <p>
                      SEOAK has exceeded my expectations in terms of
                      professional development. The hands-on approach to
                      learning, coupled with industry-relevant curriculum, has
                      prepared me for real-world challenges and boosted my
                      confidence.
                    </p>
                    <h4>Pooja</h4>
                    <span>Python</span>
                  </div>
                </div>
                {/* Single Item */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Testimonials */}
      {/* Start Clients Area 
    ============================================= */}
      <div className="clients-area default-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-4 info">
              <h4>Top Companies Hiring us</h4>
              <p>
                Get Yourself placed in the top MNC companies with our special
                training and opportunities.
              </p>
            </div>
            <div className="col-md-8 clients">
              <div className="clients-items owl-carousel owl-theme text-center">
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/Dell150,80.png" alt="Clients" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/Ibm150,80.png" alt="Clients" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/microsoft150,80.png" alt="Clients" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/Capgeminie150,80.png" alt="Clients" />
                  </a>
                </div>
                <div className="single-item">
                  <a href="#">
                    <img src="assets/img/google150,80.png" alt="Clients" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Clients Area */}
      {/* Start Registration & Faq 
    ============================================= */}
      <div className="reg-area inc-faq default-padding">
        <div className="container">
          <div className="row">
            <div className="reg-items">
              <div className="col-md-6 reg-form">
                <div className="reg-box text-light">
                  <h3>Get a Free online Registration</h3>
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            placeholder="First Name"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            placeholder="Last Name"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            placeholder="Email*"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <select>
                            <option value={1}>Choose Subject</option>
                            <option value={2}>
                              Full Stack Web Development
                            </option>
                            <option value={4}>Data Science</option>
                            <option value={5}>Cloud Computing</option>
                            <option value={6}>Cyber Security</option>
                            <option value={7}>Advanced AI</option>
                            <option value={8}>Chat GPT</option>
                            <option value={9}>C Language</option>
                            <option value={10}>C++ Language</option>
                            <option value={11}>Java Programming</option>
                            <option value={12}>Power BI</option>
                            <option value={13}>Python</option>
                            <option value={14}>
                              DSA (Data Structures &amp; Algorithm)
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            placeholder="Phone"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeM_1nUTx2DaBUxSR5xXgoTjKfE71wt0trYPAHYSf8t5QWB8g/viewform">
                          <button type="button">Register Now</button>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 faq-items">
                <div className="site-heading text-left">
                  <h2>Frequently Asked Question</h2>
                </div>
                {/* Start Accordion */}
                <div className="acd-items acd-arrow">
                  <div className="panel-group symb" id="accordion">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#ac1"
                          >
                            What is the medium of instruction?
                          </a>
                        </h4>
                      </div>
                      <div id="ac1" className="panel-collapse collapse in">
                        <div className="panel-body">
                          <p>
                            Medium of instruction and program delivery is 100%
                            English and we expect candidates to know English as
                            a mandatory language to apply for the program.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#ac2"
                          >
                            Do I get a certificate at the end the course?
                          </a>
                        </h4>
                      </div>
                      <div id="ac2" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Upon successful completion of this course, you will
                            be awarded with an industry-recognized certification
                            from SEOAK.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#ac3"
                          >
                            What if i have a question or any doubts?
                          </a>
                        </h4>
                      </div>
                      <div id="ac3" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            You have various options to contact us, You can
                            contact us through WhatsApp, Contact Number, Email.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#ac4"
                          >
                            What is the refund policy?
                          </a>
                        </h4>
                      </div>
                      <div id="ac4" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            You can check our{" "}
                            <a href="./refund-policy.html">refund policy</a>{" "}
                            here.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Accordion */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Registration & Faq  */}
      <form
        id="one-on-one"
        className="mfp-hide white-popup-block promise-points"
      >
        <h4>ONE ON ONE INTERACTION</h4>
        <div>
          <ul>
            <li>
              we believe in providing a personalized and engaging learning
              experience, and this new feature is designed to bring the
              classroom right to your doorstep.
            </li>
            <li>
              During these one-on-one sessions, you will have the undivided
              attention of your instructor. This means you can clarify doubts,
              seek additional explanations, or ask for further examples, all at
              your own pace.
            </li>
            <li>
              We understand that everyone has different learning styles and
              needs. With one-on-one interactions, your educator can adapt their
              teaching approach to match your preferred learning style, ensuring
              you grasp the concepts effectively.
            </li>
            <li>
              We believe that one-on-one interactions will enhance your learning
              experience and enable you to reach your full potential.
            </li>
          </ul>
        </div>
      </form>
      <form
        id="real-time"
        className="mfp-hide white-popup-block promise-points"
      >
        <h4>REAL TIME PROJECTS</h4>
        <div>
          <ul>
            <li>
              We understand that theoretical knowledge is important, but
              practical application is equally crucial in today's dynamic
              world.That's why we are bringing you the opportunity to work on
              real-world projects that will sharpen your skills and prepare you
              for success.
            </li>
            <li>
              Real-time projects offer you the chance to apply what you have
              learned in a hands-on, real-world context.
            </li>
            <li>
              Through these projects, you will learn to analyze situations,
              think critically, and come up with innovative solutions, enhancing
              your problem-solving abilities.
            </li>
            <li>
              Our real-time projects are designed to mirror the challenges and
              requirements of the industry. By working on these projects, you
              will gain insights into the current trends, technologies, and best
              practices, making you job-ready and adaptable to the ever-evolving
              professional landscape.
            </li>
            <li>
              Get ready to unleash your potential and embark on an exciting
              journey of learning, growth, and innovation with our real-time
              projects.
            </li>
          </ul>
        </div>
      </form>
      <form
        id="lms-access"
        className="mfp-hide white-popup-block promise-points"
      >
        <h4>LMS ACCESS TO ALL THE COURSES</h4>
        <div>
          <ul>
            <li>
              We provide you with unlimited access to all our courses through
              our Learning Management System (LMS)!
            </li>
            <li>
              We believe that knowledge should be easily accessible and that you
              should have the freedom to explore and learn at your own pace.
            </li>
            <li>
              With our LMS, you now have the opportunity to explore a diverse
              range of courses, covering various subjects and disciplines.
            </li>
            <li>
              Our LMS allows you to access the courses anytime, anywhere, and on
              any device. Whether you prefer learning in the comfort of your
              home, during your daily commute, or even on vacation, our platform
              is designed to fit seamlessly into your lifestyle.
            </li>
            <li>
              Our LMS provides a wealth of learning resources to complement your
              courses. You'll have access to interactive quizzes, assignments,
              videos, e-books, and supplementary materials that deepen your
              understanding of the subject matter.
            </li>
          </ul>
        </div>
      </form>
      <form
        id="live-projects"
        className="mfp-hide white-popup-block promise-points"
      >
        <h4>LIVE PROJECTS</h4>
        <div>
          <ul>
            <li>
              We believe that hands-on application of knowledge is crucial in
              today's competitive landscape, and our Live Projects feature is
              designed to bridge the gap between theory and practice.
            </li>
            <li>
              Live Projects enable you to work on actual projects that simulate
              real-life scenarios. This hands-on experience allows you to apply
              the concepts you've learned in a practical setting, providing you
              with invaluable insights and skills
            </li>
            <li>
              By working on these projects, you will develop skills that are
              highly sought after by employers, making you job-ready and
              adaptable in today's fast-paced professional world.
            </li>
            <li>
              Live Projects often involve teamwork and collaboration, providing
              you with the opportunity to work with fellow students
            </li>
          </ul>
        </div>
      </form>
      <form
        id="scholarships"
        className="mfp-hide white-popup-block promise-points"
      >
        <h4>SCHOLARSHIPS</h4>
        <div>
          <ul>
            <li>
              We are delighted to announce that SEOAK is introducing
              scholarships to support your educational journey and make quality
              learning accessible to all.
            </li>
            <li>
              Our scholarships provide financial assistance to deserving
              students who demonstrate a strong passion for learning and a
              commitment to course exellence.
            </li>
            <li>
              We believe in equal opportunities for all students, regardless of
              their socio-economic background. Our scholarships are designed to
              level the playing field, providing support to talented students
              who may not have the means to pursue their educational aspirations
              otherwise.
            </li>
            <li>
              As a scholarship recipient, you will have access to our premium
              learning resources, including courses, study materials, and
              interactive tools.{" "}
            </li>
            <li>
              We encourage you to explore our scholarship opportunities and
              apply. Your dedication and commitment to learning deserve to be
              recognized and supported.
            </li>
          </ul>
        </div>
      </form>
      <form
        id="updated-curriculam"
        className="mfp-hide white-popup-block promise-points"
      >
        <h4>UPDATED CURRICULUMS</h4>
        <div>
          <ul>
            <li>
              we have revamped our curriculums to provide you with the most
              updated and relevant content for your educational journey.{" "}
            </li>
            <li>
              Our team of experts has worked tirelessly to ensure that our
              curriculums incorporate the latest advancements, trends, and
              insights in each subject area. You can trust that you are learning
              the most up-to-date information, empowering you to stay relevant
              and competitive.
            </li>
            <li>
              We understand the importance of preparing you for real-world
              challenges. Our updated curriculums focus on developing skills
              that are in high demand across various industries.
            </li>
            <li>
              We recognize that every student is unique, with different learning
              styles and needs. Our updated curriculums incorporate personalized
              learning approaches, allowing you to learn at your own pace and
              explore topics that interest you the most.
            </li>
          </ul>
        </div>
      </form>
      <form
        id="certified-mentors"
        className="mfp-hide white-popup-block promise-points"
      >
        <h4>CERTIFIED MENTORS</h4>
        <div>
          <ul>
            <li>
              We have partnered with Certified Mentors who are experts in their
              respective fields, ready to empower you with personalized guidance
              and mentorship throughout your educational journey.
            </li>
            <li>
              Our Certified Mentors bring a wealth of expertise and real-world
              experience to the table.
            </li>
            <li>
              Our Certified Mentors understand that every student is unique,
              with different strengths, weaknesses, and learning styles. They
              provide personalized guidance tailored to your specific needs,
              ensuring that you receive the support necessary to overcome
              challenges and achieve your goals.
            </li>
            <li>
              They act as mentors, providing guidance, motivation, and
              inspiration to help you navigate through your educational journey.{" "}
            </li>
            <li>
              Our Certified Mentors are committed to your growth and success.
              They provide ongoing support and feedback, tracking your progress,
              and helping you overcome challenges along the way.
            </li>
          </ul>
        </div>
      </form>
      <form
        id="paid-internships"
        className="mfp-hide white-popup-block promise-points"
      >
        <h4>PAID INTERNSHIPS</h4>
        <div>
          <ul>
            <li>
              SEOAK is introducing a unique and rewarding internship program
              that offers paid internships for students at every level, from
              startups to multinational corporations, based on their performance
              and achievements
            </li>
            <li>
              SEOAK is now offering paid internships to students like you,
              providing you with a valuable opportunity to apply your knowledge,
              develop skills, and make a real impact in the world of education
              and technology.
            </li>
            <li>
              Our paid internships offer you the chance to gain hands-on
              experience in a professional setting.
            </li>
            <li>
              Our paid internships provide you with invaluable practical
              experience in real-world settings. You will have the opportunity
              to work on meaningful projects, contribute to business operations,
              and gain hands-on experience in your chosen field.
            </li>
            <li>
              Performance based paid internship will be provided to the
              students.
            </li>
          </ul>
        </div>
      </form>
      {/* Start Footer 
    ============================================= */}
      <footer className="bg-dark default-padding-top text-light">
        <div className="container">
          <div className="row">
            <div className="f-items">
              <div className="col-md-4 item">
                <div className="f-item">
                  <img src="assets/img/logo-light.png" alt="Logo" />
                  <p>
                    At Seoak, we take pride in our team of highly talented
                    professionals who possess over 15 years of combined
                    experience in the fields of Information Technology and
                    Corporate Training. Our primary objective is to bridge the
                    growing gap between industry requirements and the skills
                    possessed by prospective employees, particularly graduates
                    interested in the area of Information Technology.
                  </p>
                  <p className="text-italic">
                    Please write your email and get our amazing updates, news
                    and support
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
                      <a href="full-stack-development.html">Full Stack</a>
                    </li>
                    <li>
                      <a href="data-science.html">Data Science</a>
                    </li>
                    <li>
                      <a href="cloud-computing.html">Cloud Computing</a>
                    </li>
                    <li>
                      <a href="cyber-security.html">Cyber Security</a>
                    </li>
                    <li>
                      <a href="advanced-ai.html">Advanced AI</a>
                    </li>
                    <li>
                      <a href="chat-gpt.html">Chat GPT</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 item">
                <div className="f-item link">
                  <h4>Use Full Links</h4>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about-us.html">About us</a>
                    </li>
                    <li>
                      <a href="certified-courses.html">Certified Courses</a>
                    </li>
                    <li>
                      <a href="#">Our Gallery</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact us</a>
                    </li>
                    <li>
                      <a href="faq.html">Faq's</a>
                    </li>
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
                  {/* <div class="opening-info">
                          <h5>Opening Hours</h5>
                          <ul>
                              <li> <span> Tue - Sun :  </span>
                                <div class="pull-right"> 10.00 am - 08.00 pm </div>
                              </li>
                              <li> <span> Mon : </span>
                                <div class="pull-right closed"> Closed </div>
                              </li>
                          </ul>
                      </div> */}
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
        {/* Start Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-6">
                  <p>
                    © Copyright 2023. All Rights Reserved by{" "}
                    <a href="#">SEOAK</a> Developed By <a href="#">RAAB</a>
                  </p>
                </div>
                <div className="col-md-6 text-right link">
                  <ul>
                    <li>
                      <a href="./terms-and-conditions.html">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a href="./privacy-policy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="./refund-policy.html">Refund Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Bottom */}
      </footer>
      {/* End Footer */}
      {/* jQuery Frameworks
    ============================================= */}
    </>
  );
};

export default CyberSecurity;
