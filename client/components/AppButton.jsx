import React from 'react';
import styled from "styled-components";

export const StyleButton = styled.button`
  padding: 8px 37px;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
  transition: box-shadow .3s;
  background: ${props => props.bg || props.theme.colors.blue};
  color: ${props => props.color || props.theme.colors.white};
  border-radius: ${props => props.theme.radius.small};

  &:hover, &:focus {
    box-shadow: ${props => props.theme.hover.shadow};
    transition: box-shadow .3s;
  }
`

const AppButton = ({children, ...props}) => {
  return (
    <StyleButton {...props}>
      {children}
    </StyleButton>
  );
};

export default AppButton;
