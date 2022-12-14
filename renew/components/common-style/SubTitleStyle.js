import styled from "styled-components";

const SubTitleStyle = styled.p`
  font-size: 18px;
  margin-top: 80px;
  position: absolute;
  right: 0;
  left: 0;
  text-align: center;
  z-index: 999;
  color: ${(props) => props.color};

  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-top: 100px;
  }
`;

export default SubTitleStyle;
