import { styled } from "styled-components";
export const CourseDescriptionContainer = styled.div`
  padding: 25px;
  display: flex;
  gap: 25px;
  flex-direction: column;
  align-items: center;
  .title {
    width: 100%;
    color: #002147;
    font-weight: normal;
    line-height: 1.2;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0;
    margin: 0;
  }
  .children {
    color: #666666;
    line-height: 26px;
    margin: 0 0 15px;
    text-transform: none;
    font-weight: 400;
  }
  .unorderd-list {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .list-styles {
    display: flex;
    gap: 15px;
  }
`;
// const learningOutcomes = [
//   { title: "Over 48 lectures and 72 hours of content!" },
//   { title: "Theoretical and practical training included real-time projects." },
//   {
//     title:
//       "Best suitable for beginners to advanced level users and who learn faster when demonstrated.",
//   },
//   {
//     title:
//       "Course content is Designed by considering current trending technologies and the job market.",
//   },
//   { title: " Practical assignments at the end of every session." },
//   {
//     title:
//       " Practical real-time experience with live projects for every end of the topic.",
//   },
//   { title: "Unlimited resources, with overall six courses LMS." },
// ];
// const certification = [
//   {
//     title: `This certificate validates the student's ability to apply
// theoretical concepts to real-world projects and demonstrates their
// competence in specific areas of expertise.`,
//   },
//   {
//     title: `Upcoming collaborations with Nascom, NSDC, and Skillindia, which
//     help students to get placed in their dream companies.`,
//   },
//   {
//     title: `A internship certificate from a reputable company like SEOAK
//     carries weight and credibility within the industry.`,
//   },
//   {
//     title: `It signifies that the student has received practical training and
//     exposure to industry-relevant tools, technologies, and practices,
//     making them more attractive to potential employers.`,
//   },
//   {
//     title: `Including an internship certificate on a resume or CV adds weight
//     and value to the student's profile.`,
//   },
//   {
//     title: `Completing an internship in our company provides students with
//     opportunities to network with professionals in the field.`,
//   },
//   {
//     title: `Students can connect with mentors, industry experts, and fellow
//     interns, expanding their professional network and gaining valuable
//     contacts for future career development.`,
//   },
//   {
//     title: ` Receiving an internship certificate from our company is an
//     accomplishment that can boost a student's confidence.`,
//   },
//   {
//     title: `
//   A internship certificate from our company enhances a student's
//   employability. It demonstrates to potential employers that they
//   have gained practical experience and have been exposed to the
//   latest industry trends and technologies.
//   `,
//   },
//   {
//     title: ` Our certificates encourage lifelong learning and continuous
//   professional development.
//   `,
//   },
// ];
interface CourseDescriptionProps {
  courseDescriptionText?: string;
  paraElements: JSX.Element[];
  outComes: string[]; // Assuming outComes is an array of strings
}

export const CourseDescription = ({
  courseDescriptionText,
  paraElements,
  outComes,
}: CourseDescriptionProps) => {
  return (
    <CourseDescriptionContainer>
      {/* <h4 className="title">{title}</h4>
      <p className="children">{children}</p> */}
      <div className="tab-content tab-content-info">
        <div id="tab1" className="tab-pane fade active in">
          <div className="info title">
            <h4>Course Description</h4>
            <p>{courseDescriptionText}</p>
            <h4>Certification</h4>
            {paraElements}
            <br />
            <h4>Learning Outcomes</h4>
            <ul className="unorderd-list">{outComes}</ul>
          </div>
        </div>
      </div>
    </CourseDescriptionContainer>
  );
};
