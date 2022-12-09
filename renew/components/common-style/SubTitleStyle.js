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
`;

export default SubTitleStyle;
