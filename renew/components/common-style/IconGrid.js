import styled from "styled-components";

const IconGrid = styled.div`
  display: flex;
  text-align: center;
  position: absolute;
  right: 0;
  left: 0;
  top: ${(props) => props.top};
  margin: 0 auto;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: block;
    top: ${(props) => props.MobileTop};
  }
`;
export default IconGrid;
