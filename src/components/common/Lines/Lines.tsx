import React from "react";
import styled from "styled-components";

type Props = {};

const Lines: React.FC<Props> = ({ children }) => {
  return <LinesContainer className="lines">{children}</LinesContainer>;
};

const LinesContainer = styled.div`
  --lineSize: 2px;
  position: relative;
`;

type LineProps = {
  active?: boolean;
  className?: string;
  style?: React.CSSProperties;
  horizontal?: boolean;
};

export const Line: React.FC<LineProps> = ({ active, ...rest }) => {
  return <StyledLine active={active} className="line" {...rest} />;
};

const StyledLine = styled.div<LineProps>`
  position: absolute;
  width: var(--lineSize);
  height: var(--lineSize);
  background: ${(props) =>
    props.active
      ? `
      var(--color-blue);
    `
      : props.horizontal
      ? `repeating-linear-gradient(
      90deg,
      var(--color-blue),
      var(--color-blue) 5px,
      rgba(0, 0, 0, 0) 5px,
      rgba(0, 0, 0, 0) 10px
    )`
      : `
    repeating-linear-gradient(
      0deg,
      var(--color-blue),
      var(--color-blue) 5px,
      rgba(0, 0, 0, 0) 5px,
      rgba(0, 0, 0, 0) 10px
    )`};
`;

export default Lines;
