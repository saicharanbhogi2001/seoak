import { styled } from "styled-components";
import advancedai from "../../assets/img/popularcoursesartificialintellegence.png";
import fullstack from "../../assets/img/popularcoursesFullStack.png";
import DataScience from "../../assets/img/popularcoursesdatascience.png";

const PopularCoursesContainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  .title {
    position: relative;
    h4 {
      display: inline-block;
      font-weight: 600;
      margin-bottom: 20px;
      padding-bottom: 15px;
      position: relative;
      text-transform: uppercase;
      z-index: 1;
      &::before {
        background: #ffb606 none repeat scroll 0 0;
        bottom: 0;
        content: "";
        height: 2px;
        left: 0;
        position: absolute;
        width: 30px;
      }
      &::after {
        background: #ffb606 none repeat scroll 0 0;
        bottom: 0;
        content: "";
        height: 2px;
        left: 35px;
        position: absolute;
        width: 10px;
      }
    }
  }
  .course-section {
    padding-top: 20px;
    display: flex;
    gap: 25px;
  }
  .star-color {
    color: #ffb606 none repeat scroll 0 0;
  }
  .image-section {
    height: 100px;
    width: 100px;
  }
  .header-text {
    color: #002147;
    text-transform: capitalize;
    font-weight: 600;
  }
`;

export const PopularCourses = () => {
  const popularcourses = [
    {
      title: "Advanced Ai",
      logo: advancedai,
    },
    {
      title: "Full Stack",
      logo: fullstack,
    },
    {
      title: " Data Science",
      logo: DataScience,
    },
  ];
  return (
    <PopularCoursesContainer>
      <div className="title">
        <h4>POPULAR COURSES</h4>
      </div>
      {popularcourses.map((course) => (
        <div className="course-section" key={course.title}>
          <div className="image-section">
            <img src={course.logo} alt={`${course.title} Logo`} />
          </div>
          <div className="rating-section">
            <h4 className="header-text">{course.title}</h4>
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
          </div>
        </div>
      ))}
    </PopularCoursesContainer>
  );
};
