import React from 'react';
import styled from "styled-components";
import Image from "next/image";

const StyleBtn = styled.a`
  padding: 10px 15px;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 117px;
  position: absolute;
  top: 30px;
  left: 0;
  z-index: 20;
  transition: box-shadow .3s;
  border-radius: ${props => props.theme.radius.small};
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary};

  &:hover, &:focus {
    box-shadow: ${props => props.theme.hover.shadow};
    transition: box-shadow .3s;
  }
`

const BtnBack = ({children, ...props}) => {
  return (
    <StyleBtn {...props}>
      <Image
        src="/static/arrow.svg"
        alt="arrow"
        width={24}
        height={15}
      />
      {children}
    </StyleBtn>
  );
};

export default BtnBack;
