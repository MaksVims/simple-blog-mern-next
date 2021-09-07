import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 7px 15px;
  border-radius: ${props => props.theme.radius.min};
  border: 1px solid ${props => props.theme.colors.lightgray};
`

const AppInput = (props) => {
  return <Input {...props} />;
};

export default AppInput;
