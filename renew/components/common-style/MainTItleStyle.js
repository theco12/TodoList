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

  @media screen and (max-width: 768px) {
    font-size: 18px;
    letter-spacing: -0.5px;
    max-width: 300px;
  }
`;

export default MainTItleStyle;
