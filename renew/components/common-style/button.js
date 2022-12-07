import styled from "styled-components";

const Button = styled.div`
  width: 160px;
  height: 50px;
  border-radius: 50px;
  text-align: center;
  padding: 15px 0;
  font-size: 14px;
  margin: 0 10px;
  cursor: pointer;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
`;

export default Button;
