import styled from "styled-components";

const TitleGrid = styled.div`
  width: 100%;
  position: absolute;
  top: ${(props) => props.top};

  @media screen and (max-width: 768px) {
    top: ${(props) => props.MobileTop};
  }
`;

export default TitleGrid;
