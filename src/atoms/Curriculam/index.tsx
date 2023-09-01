import { styled } from "styled-components";
import { ChevronDown, ChevronRight } from "react-feather";
import { useState } from "react";
import { Grid } from "@mui/material";
const CurriculamContainer = styled.div`
  padding: 25px;
  display: flex;
  gap: 25px;
  flex-direction: column;

  .header {
    color: #002147;
    font-weight: normal;
    line-height: 1.2;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0;
    margin: 0;
  }
  .course-content {
    padding: 20px;
    border: 1px solid #e7e7e7;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    .course-list-items {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #f7f7f7 none repeat scroll 0 0;
      padding: 10px 15px;
    }
  }
`;
interface CurriculaProps {
  title: string;
  videoTitles: string;
}

export const Curriculam = ({
  title = "",
  videoTitles = "",
}: CurriculaProps) => {
  const [accordianState, setAccordianState] = useState(false);
  const curriculam = [
    {
      title:
        "Data Science is an interdisciplinary field that combines statistics, mathematics, programming, and domain expertise to extract valuable insights and knowledge from data. It involves analyzing and interpreting large volumes of data to make informed business decisions, solve complex problems, and drive innovation. Data Science has applications in various industries, including finance, healthcare, marketing, and technology.",
    },
  ];
  return (
    <CurriculamContainer>
      {curriculam.map((iter) => (
        <p>{iter.title}</p>
      ))}
      <h4 className="header">LIST OF COURSES</h4>
      <div className="course-content">
        <h4 className="header">{title}kdsnksdmk</h4>
        <div onClick={() => setAccordianState((p) => !p)}>
          {accordianState ? (
            <ChevronDown size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </div>
      </div>
      {accordianState && (
        <div className="course-content">
          <div id="ac1" className="panel-collapse ">
            {/* <Grid container rowGap={1} className="course-list-items">
              <Grid item xs={12} sm={3} md={2} lg={2}>
                <i className="fas fa-play" />
              </Grid>
              <Grid item xs={12} sm={3} md={2} lg={2}>
                <span>Lecture 1.1</span>
              </Grid>
              <Grid item xs={12} sm={3} md={2} lg={2}>
                <h5>Introduction of AI</h5>
              </Grid>
              <Grid item xs={12} sm={3} md={2} lg={2}>
                <span>Duration: 1 hours 10 min</span>
              </Grid>
              <Grid item xs={12} sm={3} md={2} lg={2}>
                <a href="#">Preview</a>
              </Grid>
              {/* 
              <i className="fas fa-play" />
              <span>Lecture 1.1</span>
              <h5>Introduction of AI</h5>
              <span>Duration: 1 hours 10 min</span>
              <div className="item info"></div> */}

          </div>
        </div>
      )}
    </CurriculamContainer>
  );
};
