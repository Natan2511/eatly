import React from 'react';
import styled from 'styled-components';

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.a`
  color: var(--text-color);
  padding: 18px;
  border-radius: 17.83px;
  background: rgb(108, 95, 188);
  text-decoration: none;
  display: inline-block;
  text-align: center;

  @media screen and (min-width: 721px) and (max-width: 1280px) {
    padding: 13px;
    border-radius: 12.68px;
  }

  &:hover,
  &:focus{
    transition: all 500ms ease;
    transform: scale(1.1);
  }
`;

export default Button;
