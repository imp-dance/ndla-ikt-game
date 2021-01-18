import React from "react";
import styled from "styled-components";
import classnames from "classnames";

type Props = {
  style?: React.CSSProperties;
  className?: string;
};

const Lines: React.FC<Props> = ({ children, className }) => {
  return (
    <LinesContainer className={"lines " + className ?? ""}>
      {children}
    </LinesContainer>
  );
};

const LinesContainer = styled.div`
  --lineSize: 3px;
  @media screen and (max-width: 1000px) {
    --lineSize: 2px;
  }
  position: relative;
`;

type LineProps = {
  active?: boolean;
  className?: string;
  style?: React.CSSProperties;
  horizontal?: boolean;
  faded?: boolean;
};

export const Line: React.FC<LineProps> = ({
  active,
  style,
  faded,
  className,
  ...rest
}) => {
  const classname = classnames("line", { faded }, className);
  return (
    <StyledLine active={active} className={classname} style={style} {...rest} />
  );
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
