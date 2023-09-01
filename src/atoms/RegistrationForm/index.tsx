import { styled } from "styled-components";
import "../../index.css";
interface RegistrationFormProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}
const RegistrationFormContainer = styled.div`
  .drop-down {
    width: 100%;
  }
`;
const options = [
  {
    course: "Choose Subject",
  },
  { course: "Full Stack Web Development" },
  {
    course: "Data Science",
  },
  { course: "Cloud Computing" },
  {
    course: "Cyber Security",
  },
  { course: "Advanced AI" },
  {
    course: "Chat GPT",
  },
  { course: "C Language" },
  {
    course: "C++ Language",
  },
  { course: "Java Programming" },
  {
    course: "Power BI",
  },
  { course: "Python" },
  { course: "DSA (Data Structures & Algorithm)" },
];
export const RegistrationForm = ({
  firstName = "",
  lastName = "",
  email = "",
  phone = "",
}: RegistrationFormProps) => {
  return (
    <>
      <RegistrationFormContainer>
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
                            <select className="drop-down">
                              {options.map((option: any, index: number) => {
                                return (
                                  <option value={index + 1}>
                                    {option.course}
                                  </option>
                                );
                              })}
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
                          <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeM_1nUTx2DaBUxSR5xXgoTjKfE71wt0trYPAHYSf8t5QWB8g/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button type="button">Register Now</button>
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
      </RegistrationFormContainer>
    </>
  );
};
