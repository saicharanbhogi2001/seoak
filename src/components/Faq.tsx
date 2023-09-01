import { FooterSection } from "../atoms/Footer/index.tsx";
import HeaderInformation from "../atoms/header.tsx";
import NavigationComponent from "../atoms/Navigation/index.tsx";
import FaqImage from "../assets/img/about-bg.jpg";
const Faq = () => {
  return (
    <>
      <HeaderInformation />
      <NavigationComponent />
      <div
        className="breadcrumb-area shadow dark text-center bg-fixed text-light"
        style={{ backgroundImage: `url(${FaqImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Faq</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">
                    <i className="fas fa-home" /> Home
                  </a>
                </li>
                <li className="active">Faq</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb */}
      {/* Start Faq With Left Sidebar 
    ============================================= */}
      <div className="faq-area course-details-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-md faq-content">
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
                          English and we expect candidates to know English as a
                          mandatory language to apply for the program.
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
                          Upon successful completion of this course, you will be
                          awarded with an industry-recognized certification from
                          SEOAK.
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
                          <a href="/refund-policy">refund policy</a> here.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Accordion */}
            </div>
            {/* Start Sidebar */}
          </div>
          {/* End Sidebar */}
        </div>
      </div>
      {/* End Faq */}
      <FooterSection />
    </>
  );
};
export default Faq;
