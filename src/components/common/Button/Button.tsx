import React from "react";
import styled from "styled-components";

type Props = {
  onClick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({ ...rest }) => {
  return <StyledButton {...rest}></StyledButton>;
};

const StyledButton = styled.button`
  background: var(--color-blue);
  color: var(--color-white);
  font-weight: bold;
  padding: var(--padding-m) var(--padding-xxl);
  border-radius: var(--padding-xxl);
  border: none;
  cursor: pointer;

  &:disabled {
    background: var(--color-light-blue);
  }
`;

export default Button;
