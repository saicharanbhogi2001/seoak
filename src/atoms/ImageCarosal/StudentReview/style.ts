import styled from "styled-components";

export const ReviewContainer = styled.div`
  width: 400px;
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: -1px 3px 10px 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;
  padding: 30px;
  border-radius: 5px;
  gap: 10px;
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
