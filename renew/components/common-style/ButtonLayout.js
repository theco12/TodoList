import styled from "styled-components";

const ButtonLayout = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  justify-content: center;
  text-align: center;
  bottom: 50px;
  @media screen and (max-width: 768px) {
    bottom: 100px;
  }
`;

export default ButtonLayout;
