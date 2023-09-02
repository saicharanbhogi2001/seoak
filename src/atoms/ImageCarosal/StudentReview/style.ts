import styled from "styled-components";

export const ReviewContainer = styled.div`
  display: flex;
  gap: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  box-shadow: -1px 3px 10px 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;
  padding: 20px 30px 10px 30px;
  .info {
    color: white;
  }
  .student-domain {
    color: #ffb606;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    text-transform: uppercase;
  }
`;
