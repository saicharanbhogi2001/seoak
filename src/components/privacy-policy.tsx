export const PrivacyPolicy = () => {
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
                    +91&nbsp;79811 93524
                  </li>
                </ul>
              </div>
            </div>
            <div className="user-login text-right col-md-4">
              <a className="popup-with-form" href="#register-form">
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
                      <a href="full-stack-development.html">
                        Full Stack Web Development
                      </a>
                    </li>
                    <li>
                      <a href="live-advanced-ai.html">Data Science</a>
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
              <h1>Privacy Policy</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">
                    <i className="fas fa-home" /> Home
                  </a>
                </li>
                <li className="active">Privacy Policy</li>
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
          <h4 style={{ fontWeight: 600 }}>PRIVACY POLICY</h4>
          <p>
            In connection with your use of the Services with SEOAK (“us”, “we”,
            or “our”) may collect/ receive, store, use, share, and/or process
            certain information (“Information”) about you when you use our
            Services.
          </p>
          <p>
            We use your Information for providing and improving the Services. By
            using the Services, you agree to the collection and use of
            Information in accordance with this Privacy Policy. Unless otherwise
            defined in this Privacy Policy, terms used in this Privacy Policy
            have the same meanings as in our Terms and Conditions, accessible on
            the website. We will not use or share your Information with anyone
            except as described in this Privacy Policy.
          </p>
          <h4 style={{ fontWeight: 600 }}>INFORMATION COLLECTION</h4>
          <p>
            While using our Service, we may ask you to provide us with certain
            personally identifiable Information that can be used to contact or
            identify you. Information may include, but is not limited to:
          </p>
          <ul style={{ listStyleType: "disc", marginLeft: 32 }}>
            <li>Your name</li>
            <li>Your email address</li>
            <li>Phone number</li>
            <li>
              Your Account Data such as your profile, course opted by you etc.
            </li>
            <li>Data related to content shared by you via your Account</li>
            <li>Data about your account on other services</li>
            <li>Data through promotions and surveys conducted by us</li>
            <li>
              Data regarding any support concerns that you may have (this is
              only for internal purposed to optimize our Services)
            </li>
            <li>
              Any other information as may be disclosed by you during the use of
              Services
            </li>
            <li>Information about your device</li>
            <li>Parts of our Services you use etc, and</li>
            <li>Sensitive Personal Information</li>
          </ul>
          <p>
            We may also collect Information that your browser sends whenever you
            visit our Site ("Log Data"). This Log Data may include information
            such as:
          </p>
          <ul style={{ listStyleType: "disc", marginLeft: 32 }}>
            <li>your IP address</li>
            <li>browser type</li>
            <li>device type</li>
            <li>browser version</li>
            <li>the pages of our Site that you visit</li>
            <li>the time and date of your visit</li>
            <li>the time spent on those pages and other statistics</li>
            <li>
              approximate geographic location, including information like
              country, city, and geographic coordinates, calculated based on
              your IP address
            </li>
          </ul>
          <p>
            In order to receive payments from you, we may also collect (either
            directly or with the support of our payments partners) certain
            financial Information as may be required. In addition, we may use
            third party services such as cookies, google analytics,
            advertisements that collect, monitor and analyses this type of
            Information in order to increase the performance of our Service's.
            Use of such Information by these third party services shall be
            governed by their individual privacy policies. We encourage you to
            understand these policies as well.
          </p>
          <strong>Cookies</strong>
          <p>
            We use cookies to store and access and analyses the Information on
            the device that you use to access our Services, to personalize your
            experience, and to facilitate you to log into the Services, and to
            recognize when you return to the Services.
          </p>
          <p>
            You may opt out or refuse your browser from accessing/ storing the
            cookies or indicating when a cookie is being sent. However, it may
            be noted that some portions of our service may not be accessible to
            you if you do not accept cookies.
          </p>
          <strong>Analytics</strong>
          <p>
            We use third-party browser and mobile analytics services like Google
            Analytics on the Services. These services help us analyze your use
            of the Services by using cookies, tags, scripts, customized links,
            device or browser fingerprints etc. These services also help us
            analyzing Information such as:
          </p>
          <ul style={{ listStyleType: "disc", marginLeft: 32 }}>
            <li>the third-party website you arrive from</li>
            <li>how often you visit the Site</li>
            <li>events within the Services</li>
            <li>usage and performance data</li>
          </ul>
          <p>
            The information collected is used solely for the purpose of
            improving our Services, to better understand the behavior projected
            by our Services on different devices, and to provide information
            that may be of interest to you.
          </p>
          <p>
            The information collected is used solely for the purpose of
            improving our Services, to better understand the behavior projected
            by our Services on different devices, and to provide information
            that may be of interest to you.
          </p>
          <p>
            Google also recommends installing the Google Analytics Opt-out
            Browser Add- on for your web browser. Google Analytics Opt-out
            Browser Add-on provides visitors with the ability to prevent their
            data from being collected and used by Google Analytics.
          </p>
          <p>
            For more information on the privacy practices of Google, please
            visit the Google Privacy &amp; Terms web page.
          </p>
          <strong>Online Advertising</strong>
          <p>
            We use third-party advertising services like Facebook, Google’s ad
            services, and other ad networks and ad servers to provide you quick
            access to your previous searches and to use analytics for
            personalization and showing you targeted advertisements.
          </p>
          <p>
            These advertisements are based on your recent or over time
            activities on our Site and across other sites and services, and are
            tailored to your interests.
          </p>
          <p>
            We do not disclose information about identifiable individuals to our
            advertising services, but we may provide them with aggregate
            information about our users (for example, we may inform them that
            any given number of students in a specified age group clicked on
            their advertisement on any given day). We may also use such
            aggregate information to help our advertising services reach the
            kind of audience they want to target.
          </p>
          <h4 style={{ fontWeight: 600 }}>USE OF YOUR INFORMATION</h4>
          <p>We use your Information for purposes such as:</p>
          <ul style={{ listStyleType: "disc", marginLeft: 32 }}>
            <li>Providing our Services</li>
            <li>
              Improving our Services and developing new products, services, and
              features
            </li>
            <li>
              Analyzing trends and traffic, tracking purchases and data usage
            </li>
            <li>
              Learning more about our users by linking user’s data with
              additional data through third- party data providers or analyzing
              the data with the help of analytics service providers
            </li>
            <li>Communicating with you</li>
            <li>
              Analyzing and troubleshooting any issues you may have with our
              Services
            </li>
            <li>Protecting us against any fraud and abuse</li>
            <li>improving and update our Services as per your feedback.</li>
          </ul>
          <h4 style={{ fontWeight: 600 }}>SHARING YOUR INFORMATION</h4>
          <p>
            We may share certain Information about you: with third parties such
            as instructors, other students, companies helping us run promotions
            and surveys, and advertising companies etc.; for security, legal
            compliance, or as part of a corporate restructuring; or in other
            ways if it is aggregated or de-identified or if we get your consent.
            The Information may be shared with any third parties under the
            following circumstances or as otherwise described in this Privacy
            Policy:
          </p>
          <p>
            with your instructors: We may share information including country of
            log-in, language, device settings, the site that brought you to us,
            and your activities on the Site. We may share your email address and
            contact details with instructors or teaching assistants. with other
            students and Instructors: Depending on your settings, your shared
            content and profile data may be publicly viewable, including to
            other students and instructors. with service providers, contractors,
            and agents: We share your Information with third-party companies who
            perform services on our behalf, like payment processing, data
            analysis, marketing and advertising services (including retargeted
            advertising), email and hosting services, and customer services and
            support. These service providers may access your Information and are
            required to use it solely as we direct, to provide our requested
            service. with business partners: We have agreements with other
            websites and platforms to distribute our Services and drive traffic
            to our Site. Depending on your location, we may share your data with
            these partners. to administer promotions and surveys: we may share
            your data as necessary to administer, market, or sponsor promotions
            and surveys you choose to participate in, as required by applicable
            law (like to provide a winners list or make required filings), or in
            accordance with the rules of the promotion or survey. For Security
            and Legal Compliance: We may disclose your Information to third
            parties if we (in our sole discretion) have a good faith belief that
            the disclosure is: Permitted or required by law or judicial,
            governmental, or legal inquiry, order, or proceeding; Reasonably
            necessary to enforce our Terms of Use, Privacy Policy, and other
            legal agreements; Required to detect, prevent, or address fraud,
            abuse, misuse, potential violations of law (or rule or regulation),
            or security or technical issues; or Reasonably necessary in our
            discretion to protect against imminent harm to the rights, property,
            or safety of the Company, our users, employees, members of the
            public, or our Services. We may also disclose data about you to our
            auditors and legal advisors in order to assess our disclosure
            obligations and rights under this Privacy Policy. during a change in
            control: If the Company undergoes a business transaction like a
            merger, acquisition, corporate divestiture, or dissolution
            (including bankruptcy), or a sale of all or some of its assets, we
            may share, disclose, or transfer all of your Information to the
            successor organization during such transition or in contemplation of
            a transition (including during due diligence).
          </p>
          <h4 style={{ fontWeight: 600 }}>SECURITY</h4>
          <p>
            We use appropriate security based on the type and sensitivity of
            Information being stored. We take that you understand that there is
            always a risk of unauthorized access to Information with internet
            enabled platforms. Your password is an important part of our
            security system, and it is your responsibility to protect it. We
            therefore request you to protect your password and to contact us as
            soon as possible if you suspect any unauthorized access to your
            Account. We shall take appropriate security measures to protect
            against unauthorized access, alteration, disclosure, or destruction
            of your Information.
          </p>
          <h4 style={{ fontWeight: 600 }}>INFORMATION REVIEW</h4>
          <p>
            We request you to review the Information you provide to us from time
            to time to ensure that any Information or Sensitive Personal
            Information (as defined below) is not inaccurate or deficient. We
            are not responsible for the authenticity of any Information or
            Sensitive Personal information supplied by you. Sensitive Personal
            Information” shall mean passwords and any other information that is
            classified as sensitive under Section 3 of the Information
            Technology (Reasonable Security Practices and Procedures and
            Sensitive Personal Data or Information) Rules, 2011 (“Rules”).
          </p>
          <p>
            We shall address any discrepancies and your grievances with respect
            to Information or Sensitive Personal Information within 30 days of
            identification of such discrepancies. The Company has a Grievance
            Officer for addressing such discrepancies. The details of the
            Grievance Officer have been provided under Section 13.
          </p>
          <h4 style={{ fontWeight: 600 }}>INFORMATION RETENTION</h4>
          <p>
            We do not retain your Sensitive Personal Information for longer than
            is required for the purposes for which the information may be
            lawfully used. For any other content, we will entertain your request
            for deletion, however, there is a strong possibility that copies of
            any public content will be retained indefinitely in our systems,
            including in cached and archived pages of the Platform, or if other
            users have copied or saved that information. In addition, due to the
            nature of the internet, copies of your content, including content
            that you have removed or deleted from your account, may also exist
            elsewhere on the Internet and be retained indefinitely.
          </p>
          <p>
            We may also retain Information where relevant for internal
            processing, analytical reasons, fraud monitoring, and in some cases
            on an anonymized/ de-identified basis.
          </p>
          <h4 style={{ fontWeight: 600 }}>YOUR RIGHTS</h4>
          <p>
            You have the right around the use of your Information, including the
            option to opt out of promotional emails, cookies, and collection of
            your data by certain advertisement services. You can update or
            terminate your Account from within our Services, and can also
            contact us for individual rights requests about your Information.
          </p>
          <p>
            You have a right to ask us to review, correct and amend the
            information we collect about you at any point in time. In addition,
            you also have the right to revoke your consent to the collection of
            your information going forward.
          </p>
          <p>
            However, please note that revoking your consent may negatively
            affect your use of the Platform. For instance, we need access to
            your Account details so that you can access Services on the
            Platform, which functionality will not be available to you if you do
            not provide us such access. You may also ask us not to process your
            personal data for marketing purposes. You can exercise any of these
            rights at any time by contacting us at support@seoak.in. However, we
            require a reasonable period of 30 (thirty) days to comply with any
            of your requests.
          </p>
          <h4 style={{ fontWeight: 600 }}>THIRD PARTY LINKS</h4>
          <p>
            The Platform may, from time to time, contain links to and from the
            websites of our partner networks, advertisers, Affiliates and/or any
            other websites or mobile applications. If you follow a link to any
            of these websites, please note that these websites have their own
            privacy policies and that we do not accept any responsibility or
            liability for these policies. Please check these policies before you
            submit any personal data to these websites or mobile applications.
          </p>
          <h4 style={{ fontWeight: 600 }}>THIRD-PARTY EMBEDS</h4>
          <strong>What Are Third Party Embeds?</strong>
          <p>
            Some of the content that you see displayed on the Platform is not
            hosted by the Platform. These “embeds” are hosted by a third-party
            and embedded in the Platform. These files send data to the hosted
            site just as if you were visiting that site directly (for example,
            when you load a Platform post page with a YouTube video embedded in
            it, YouTube receives data about your activity).
          </p>
          <strong>Privacy Concerns with Third Party Embeds</strong>
          <p>
            The Platform does not control what data third parties collect or
            what they will do with it. So, third- party embeds on the Platform
            are not covered by this Privacy Policy. They are covered by the
            privacy policy of the third-party service.
          </p>
          <strong>Sharing Information with Third Party Embeds </strong>
          <p>
            Some embeds may ask you for Information, such as your email address,
            through a form. We do our best to keep bad actors off of the
            Platform. However, if you choose to submit your Information to a
            third party this way, we don’t know what they may do with it. As
            explained above, their actions are not covered by this Privacy
            Policy. So, please be careful when you see embedded forms on the
            Platform asking for your email address or any other Information.
            Make sure you understand who you are submitting your Information to
            and what they say they plan to do with it. We suggest that you do
            not submit Information to any third-party through an embedded form.
          </p>
          <h4 style={{ fontWeight: 600 }}>CHANGES TO PRIVACY POLICY</h4>
          <p>
            The Company may periodically update this Privacy Policy. We will
            post the updated Privacy Policy at this link. We will notify you
            from time to time to update you of any changes made to this Privacy
            Policy.
          </p>
          <h4 style={{ fontWeight: 600 }}>DISCLAIMER</h4>
          <p>
            We follow best procedures and take security measures to protect your
            Information and try to prevent unauthorized access. However, we
            cannot guarantee the security of your Information transmitted to the
            Platform. You agree that any transmission on the Platform is at your
            own risk.
          </p>
          <h4 style={{ fontWeight: 600 }}>COMMUNICATIONS FROM US</h4>
          <p>
            We may from time to time send you service-related announcements when
            we consider it necessary to do so (such as when we temporarily
            suspend the Platform for maintenance, or security, privacy, or
            administrative-related communications). We send these to you via
            SMS, email, push notifications and any other communication channel.
            You may not opt-out of these service-related announcements, which
            are not promotional in nature and used solely to protect your
            account and keep you informed of important changes to the Platform.
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
