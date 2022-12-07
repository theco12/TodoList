import styled from "styled-components";

const Button = styled.div`
  width: 160px;
  height: 50px;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  color: ${(props) => props.color || "gray"};
  background: ${(props) => props.background || "white"};
`;

export default Button;
