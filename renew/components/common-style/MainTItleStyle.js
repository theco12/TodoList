import styled from "styled-components";

const MainTItleStyle = styled.h4`
  font-size: 25px;
  position: absolute;
  right: 0;
  left: 0;
  text-align: center;
  margin: 0 auto;
  z-index: 999;
  color: ${(props) => props.color};
`;

export default MainTItleStyle;
