import PromiseCard from "../PromiseCard";
import { EnrolledContainer } from "./style";
import { useSpring, animated } from "react-spring";
import { RegistrationForm } from "../RegistrationForm";
import { FooterSection } from "../Footer";
import NavigationComponent, { Header } from "../HeaderNavbar";
import { CourseDescription } from "../CourseDescription";
import { Curriculam } from "../Curriculam";
import { CertifiedCourseSection } from "../CertifiedCourses";
import { PopularCourses } from "../PopularCourses";
import { CourseIntroduction } from "../CourseInroduction";
import { Grid } from "@mui/material";

interface NumberProps {
  n: number;
}
function NumberIncrementor({ n }: NumberProps) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const title = "COURSE DESCRIPTION";
const description =
  "Data Science is an interdisciplinary field that combines statistics, mathematics, programming, and domain expertise to extract valuable insights and knowledge from data. It involves analyzing and interpreting large volumes of data to make informed business decisions, solve complex problems, and drive innovation. Data Science has applications in various industries, including finance, healthcare, marketing, and technology. The Data Science Fundamentals course provides students with a comprehensive understanding of the core concepts and techniques used in data science.";

const enrolledsection = [
  {
    icon: "flaticon-contract",
    value: 1000,
    description: "No Of Students Enrolled",
  },
  {
    icon: "flaticon-professor",
    value: 100,
    description: "Mentors Enrolled",
  },
  {
    icon: "flaticon-online",
    value: 250,
    description: "Job Placements",
  },
  {
    icon: "flaticon-reading",
    value: 1000,
    description: "Certificates Issued",
  },
];
export const EnrolledCountSection = () => {
  return (
    <>
      {/* <Header /> */}
      <NavigationComponent />
      <EnrolledContainer>
        <Grid container rowSpacing={1} columnSpacing={2}>
          {enrolledsection.map((item) => (
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <div className="column" key={item.icon}>
                <div className="fun-fact">
                  <div className="icon">
                    <i className={item.icon} />
                  </div>
                  <div className="info">
                    <div className="timer">
                      <NumberIncrementor n={item.value} />
                    </div>
                    <span className="medium">{item.description}</span>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </EnrolledContainer>
      {/* <PromiseCard
        title={"REAL TIME PROJECTS"}
        logo={"flaticon-interaction"}
        backcolor={"#1ec1d9"}
      /> */}
      {/* <RegistrationForm /> */}
      {/* <FooterSection />
      <CourseDescription title={title} children={description} />
      <Curriculam title={""} videoTitles={""} />
      <CertifiedCourseSection title={"CertifiedCourseSection "} />
      <PopularCourses />
      <CourseIntroduction /> */}
    </>
  );
};
