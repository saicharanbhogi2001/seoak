import styled from "styled-components";

interface ProgressCardProps {
  title?: string;
  logo?: string;
  backcolor?: string;
}

const ProgressCardContainer = styled.div<ProgressCardProps>`
  width: 250px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-color: ${(props) => props.backcolor};
  border-radius: 5px;
  transition: opacity 0.3s;
  border-radius: 8px;

  &:hover {
    opacity: 0.7;
  }
  .logo-section {
    display: flex;
    gap: 15px;
  }
`;

const ProgressCard = ({
  title = "",
  logo = "",
  backcolor = "",
}: ProgressCardProps) => {
  return (
    <ProgressCardContainer backcolor={backcolor}>
      <div className="logo-section">
        <i className={logo} />
        <span>{title}</span>
      </div>
    </ProgressCardContainer>
  );
};

export default ProgressCard;
