/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import { Grid } from "@mui/material";
// import Dialog from "@mui/material";
import PromiseCard from "../../atoms/PromiseCard";
const PromiseCardContainer = styled.div`
  width: 100vw;
  background-color: #f9f9f9;
  .promise-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px 25px 50px 25px;
  }
  .title {
    position: relative;
    h4 {
      display: inline-block;
      font-weight: 600;
      margin-bottom: 20px;
      padding-bottom: 15px;
      position: relative;
      text-transform: uppercase;
      font-size: 30px;
      z-index: 1;
      &::before {
        background: #ffb606 none repeat scroll 0 0;
        bottom: 0;
        content: "";
        height: 2px;
        left: 50%;
        margin-left: -40px;
        position: absolute;
        width: 40px;
        z-index: 1;
      }
      &::after {
        background: #ffb606 none repeat scroll 0 0;
        bottom: 0;
        content: "";
        height: 2px;
        left: 50%;
        margin-left: 5px;
        position: absolute;
        width: 40px;
      }
    }
  }
  .cards-section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
// const PopupCard = styled(Card)`
//   padding: 50px 25px 50px 25px;
// `;
export const PromiseCardsSection = () => {
  return (
    <PromiseCardContainer>
      <div className="promise-section">
        <div className="title">
          <h4>Our Promise For You</h4>
        </div>
        <Grid
          container
          rowSpacing={4}
          //   columnSpacing={1}
          className="cards-section"
        >
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <PromiseCard
              title={"REAL TIME PROJECTS"}
              logo={"flaticon-interaction"}
              backcolor={"#1ec1d9"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <PromiseCard
              title={"REAL TIME PROJECTS"}
              logo={"flaticon-interaction"}
              backcolor={"#1ec1d9"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <PromiseCard
              title={"REAL TIME PROJECTS"}
              logo={"flaticon-interaction"}
              backcolor={"#1ec1d9"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <PromiseCard
              title={"REAL TIME PROJECTS"}
              logo={"flaticon-interaction"}
              backcolor={"#1ec1d9"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <PromiseCard
              title={"REAL TIME PROJECTS"}
              logo={"flaticon-interaction"}
              backcolor={"#1ec1d9"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <PromiseCard
              title={"REAL TIME PROJECTS"}
              logo={"flaticon-interaction"}
              backcolor={"#1ec1d9"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <PromiseCard
              title={"REAL TIME PROJECTS"}
              logo={"flaticon-interaction"}
              backcolor={"#1ec1d9"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <PromiseCard
              title={"REAL TIME PROJECTS"}
              logo={"flaticon-interaction"}
              backcolor={"#1ec1d9"}
            />
          </Grid>
        </Grid>
      </div>
    </PromiseCardContainer>
  );
};
