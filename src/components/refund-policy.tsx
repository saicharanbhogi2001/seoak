import { FooterSection } from "../atoms/Footer/index.tsx";
import HeaderInformation from "../atoms/header.tsx";
import NavigationComponent from "../atoms/Navigation/index.tsx";
import image1 from "../assets/img/slide-bg-2.jpeg";

export const RefundPolicy = () => {
  return (
    <>
      <HeaderInformation />
      <NavigationComponent />
      <div
        className="breadcrumb-area shadow dark text-center bg-fixed text-light"
        style={{ backgroundImage: `url(${image1})` }}
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
      <FooterSection />
    </>
  );
};
