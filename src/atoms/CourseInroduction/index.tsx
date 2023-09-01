import { styled } from "styled-components";
import DataScience from "../../assets/img/datascience.png";
const CourseIntroductionCOntainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  .title {
    position: relative;
    h4 {
      display: inline-block;
      font-weight: 600;
      font-size: 28px;
      padding-bottom: 15px;
      font-family: "Poppins", sans-serif;
      z-index: 1;
    }
  }
  .header {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  .course-meta {
    display: flex;
    width: 100%;
    align-items: center;
  }
  .rating-section {
    display: flex;
    width: 50%;
    gap: 15%;
  }
  .dashed-line {
    margin-top: 10px;
    height: 60px;
    border-left: 1px dashed #999999;
    float: left;
    font-family: "Poppins", sans-serif;
  }
`;
export const CourseIntroduction = () => {
  return (
    <CourseIntroductionCOntainer>
      <div className="title">
        <h4>Data Science</h4>
      </div>
      <div className="image-section">
        <img src={DataScience} alt="" />
      </div>
      <div className="course-meta">
        <div className="rating-section">
          <div className="item category">
            <h4 className="header">Category</h4>
            <a href="#">Programming</a>
          </div>
          <div className="dashed-line"></div>
          <div className="item rating">
            <h4 className="header">Rating</h4>
            <div className="rating">
              <i
                style={{
                  color: "#ffb606",
                }}
                className="fas fa-star star-color"
              ></i>
              <i
                style={{
                  color: "#ffb606",
                }}
                className="fas fa-star"
              ></i>
              <i
                style={{
                  color: "#ffb606",
                }}
                className="fas fa-star"
              ></i>
              <i
                style={{
                  color: "#ffb606",
                }}
                className="fas fa-star"
              ></i>
              <i
                style={{
                  color: "#ffb606",
                }}
                className="fas fa-star-half-alt"
              ></i>
            </div>
            <span>4.5 (16)</span>
          </div>
          <div className="dashed-line"></div>
          <div className="item price">
            <h4 className="header">Price</h4>
            <span>5000₹</span>
          </div>
        </div>
        <div>
          <div className="align-right">
            <a
              className="btn btn-dark effect btn-sm"
              href="https://wa.me/+917483758735"
            >
              <i className="fas fa-chart-bar" /> Enroll
            </a>
          </div>
        </div>
      </div>
    </CourseIntroductionCOntainer>
  );
};
