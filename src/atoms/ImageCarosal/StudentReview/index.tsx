import { ReviewContainer } from "./style";
import studentReviewone from "../../../assets/img/studentsreviewone.png";

interface StudentReviewProps {
  domainInfo: string;
  studentName: string;
  studentDomain: string;
}

export const StudentReview = ({
  domainInfo = "",
  studentDomain = "",
  studentName = "",
}: StudentReviewProps) => {
  return (
    <ReviewContainer>
      <div>
        <img src={studentReviewone} alt="img" />
      </div>
      <div className="student-section">
        <p className="info">{domainInfo}</p>
        <h4 className="stuudent-name">{studentName}</h4>
        <p className="student-domain">{studentDomain}</p>
      </div>
    </ReviewContainer>
  );
};
