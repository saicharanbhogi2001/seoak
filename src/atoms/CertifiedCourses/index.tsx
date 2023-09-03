import { styled } from "styled-components";

const CertifiedCourseContainer = styled.div`
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
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .course-title {
      cursor: pointer;
      color: #666666;
      display: block;
      position: relative;
      text-transform: capitalize;
      z-index: 1;
    }
    .dashed-line {
      border-bottom: 1px dashed #999999;
      margin-bottom: 10px;
      padding-bottom: 10px;
    }
  }
`;

interface CertifiedProps {
  title: string;
}

export const CertifiedCourseSection = ({ title = "" }: CertifiedProps) => {
  const handleRoute = (course: any) => {
    // navigate(`/${course}`);
    console.log(course);
  };
  const courselist = [
    { title: "Cloud Computing" },
    { title: "C++ Language" },
    { title: "Power BI" },
    { title: "Full Stack Development" },
  ];
  return (
    <CertifiedCourseContainer>
      <div className="title">
        <h4>{title}</h4>
      </div>
      <div className="course-section">
        {courselist.map((course) => (
          <div key={course.title}>
            <div
              className="course-title"
              onClick={() => handleRoute(course.title)}
            >
              {course.title}
            </div>
            <div className="dashed-line"></div>
          </div>
        ))}
      </div>
    </CertifiedCourseContainer>
  );
};
