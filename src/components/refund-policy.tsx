import HeaderInformation from "../atoms/header.tsx";
export const RefundPolicy = () => {
  return (
    <>
      <HeaderInformation />
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
          <li class="search">
            <a href="#"><i class="fa fa-search"></i></a>
          </li>
        </ul>
      </div> */}
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
                        full-stack-development
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
                      <a href="live-full-stack-development.html">
                        Full Stack Web Development
                      </a>
                    </li>
                    <li>
                      <a href="live-data-science.html">Data Science</a>
                    </li>
                    <li>
                      <a href="live-cloud-computing.html">Cloud Computing</a>
                    </li>
                    <li>
                      <a href="live-cyber-security.html">Cyber Security</a>
                    </li>
                    <li>
                      <a href="live-advanced-ai.html">Advanced AI</a>
                    </li>
                    <li>
                      <a href="live-chat-gpt.html">Chat GPT</a>
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
      {/* Start Breadcrumb 
      ============================================= */}
      <div
        className="breadcrumb-area shadow dark text-center bg-fixed text-light"
        style={{ backgroundImage: "url(assets/img/about-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Refund Policy</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">
                    <i className="fas fa-home" /> Home
                  </a>
                </li>
                <li>
                  <a href="#">Page</a>
                </li>
                <li className="active">Refund Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb */}
      {/* Start Faq With Left Sidebar 
      ============================================= */}
      <div className="default-padding">
        <div className="container">
          <h4 style={{ fontWeight: 600 }}>PAYMENTS, CREDITS, AND REFUNDS</h4>
          <div>
            <strong>Pricing</strong>
          </div>
          <p>
            The prices of the Courses and other Services are informed to you on
            the Platform, and may vary from time to time. Pricing may also be
            determined based on other considerations such as (but not limited
            to):
          </p>
          <p>
            applicable promotions or discount vouchers; a user’s credits on the
            platform; their location at the time of the use of the Platform or
            the declared country of residence at the time of creating an
            Account; currency of payment; or applicable taxes and fees or fees
            which may be incurred by us for bank transfers, or currency
            conversion. We may also agree to provide bulk rates for
            institutional purchases, which may be accessible based on your email
            id, specific links or other forms of access as developed by us.
          </p>
          <p>
            The price applicable to a course will be the price at the time you
            complete your purchase of the course (at checkout).
          </p>
          <strong>Payments</strong>
          <p>
            You agree to pay the fees for the Services that you purchase. To
            achieve this, you agree to share with us/ our authorized payments
            partners with your personal and financial information that may be
            necessary, and authorize us to charge your debit or credit card or
            process other means of payment (such as direct debit, or mobile
            wallet) for such fees.
          </p>
          <p>
            You agree that you are authorized to use the payment instrument or
            payment method by which you make any payment to us, and that such
            payment method has been duly and validly issued.
          </p>
          <p>
            We may continue to provide you access to a Course or any other
            Services, even if your payment to us fails, subject to you making
            the payment within the time period prescribed by us. We reserve the
            right to disable access to any Service for which we have not
            received adequate payments.
          </p>
          <p>
            We may also issue you credits for high performance, your
            participation in contests, referral programs, events, or other
            activities on the Platforms. You may use such ‘credits’ towards
            paying for a Service on the Platform. We would request you to refer
            to the Credits Policy to know more about term, duration, and nature
            of such Credits.
          </p>
          <strong>
            PLEASE NOTE THAT ANY CREDITS ISSUED BY US ARE NOT REDEEMABLE FOR
            CASH AND CANNOT BE TRANSFERRED TO ANY THIRD PARTY AS PAYMENT FOR ANY
            GOOD OR SERVICE.
          </strong>
          <br />
          <strong>Refunds</strong>
          <p>
            We are happy to provide you with a refund of 100% refund for a
            Course, within 24hrs of the start of a batch. If you want to claim a
            refund, please do so by:
          </p>
          <p>
            Drop an email on: support@seoak.inwith a subject “ONLINE COURSE
            REFUND | REGISTERED EMAIL ID” Please do not forget to provide the
            registered email ID in the subject
          </p>
          <p>Give your reason the refund, for your internal purposes.</p>
          <p>
            Please ensure that the email is received within 24hrs from the day
            you register.
          </p>
          <p>
            Refunds will be processed within 10 to 20 working days of receiving
            the refund email with the necessary details (and subject line). This
            refund process is applicable on all standalone courses, combo
            courses, and career track courses. The refund will not be processed
            for individual modules of combo course or career track course
          </p>
          <h4 style={{ fontWeight: 600 }}>SEOAK’ RIGHTS TO CONTENT YOU POST</h4>
          <p>
            You retain ownership of content you post to our Platform, including
            your feedback, messages, notes, text, documents, presentations, ,
            and other content that you upload, publish or display. We’re allowed
            to share your content to anyone through any media, including
            promoting it via advertising on other websites. You agree that you
            own the rights to any content shared on the Platform.
          </p>
          <p>
            We may, at our discretion, delete or remove (without notice) any
            user content in its sole discretion, for any reason or no reason,
            including without limitation user content that in the sole judgment
            of the Company violates these Terms.
          </p>
          <p>
            You also hereby grant each user of the Platform (subject to such
            limitations, if any, that may apply with respect to Private Content)
            a non-exclusive license to access your content through the Platform,
            and to use, reproduce, distribute, prepare derivative works of, and
            display such content as permitted through the functionality of the
            Platform and under these Terms.
          </p>
          <h4 style={{ fontWeight: 600 }}>USING PLATFORM AT YOUR OWN RISK</h4>
          <p>
            We do not provide any warranty or guarantee relating to any of our
            Services, and they are provided on an ‘as-is’ basis. You agree to
            use the Platform and avail any Service at your own risk.
          </p>
          <p>
            We request you to be careful and prudent in your interactions with
            Instructors, or support officers. Please do not share any
            information, including personal details such as where you live, your
            financial information or other details. We are not liable for
            disputes, claims, losses, injuries, or damage of any kind that might
            arise out of or relate to the conduct of instructors or students.
          </p>
          <p>
            When you use our Services, you will find links to other websites
            that we don’t own or control, such as payment service providers,
            advertisers, recruitment platforms. We are not responsible for
            availability, reliability, accuracy of any third-party services. We
            strongly recommend that you read the applicable terms and conditions
            for their use prior to accessing them.
          </p>
        </div>
      </div>
      {/* End Faq */}
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
                    Excellence decisively nay man yet impression for contrasted
                    remarkably. There spoke happy for you are out. Fertile how
                    old address did showing because sitting replied six. Had
                    arose guest visit going off child she new.
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
                  <div className="opening-info">
                    <h5>Opening Hours</h5>
                    <ul>
                      <li>
                        <span> Tue - Sun : </span>
                        <div className="pull-right">10.00 am - 08.00 pm</div>
                      </li>
                      <li>
                        <span> Mon : </span>
                        <div className="pull-right closed">Closed</div>
                      </li>
                    </ul>
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
                    © Copyright 2023. All Rights Reserved by
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
                      <a href="#">Return Policy</a>
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
