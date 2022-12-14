import styled from "styled-components";

const Grid = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  margin: 0 auto;
  position: relative;
  background-color: ${(props) => props.bg};

  @media screen and (max-width: 768px) {
    max-width: 400px;
    height: ${(props) => props.MobileHeight};
  }
`;

export default Grid;
