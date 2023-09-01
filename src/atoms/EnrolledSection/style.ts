import styled from "styled-components";
export const EnrolledContainer = styled.div`
  margin: 0 auto;
  width: 100vw;
  background-color: #002147;
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  .fun-fact {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: -1px 3px 10px 0 rgba(0, 0, 0, 0.06);
    overflow: hidden;
    padding: 30px 20px;
    flex-direction: column;
  }
  .info {
    padding-left: 20px;
  }
  .icon i {
    color: #ffb606;
    display: inline-block;
    font-size: 50px;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }
  .info .timer {
    color: #ffffff;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 5px;
    line-height: 1.2;
    padding-left: 15px;
  }
  .info span {
    display: block;
    font-family: "Poppins", sans-serif;
  }
`;
