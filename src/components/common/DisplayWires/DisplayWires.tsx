import React from "react";
import styled from "styled-components";

import WiresVertical from "../../../assets/symbols/Wires_Vertical.svg";

type Props = {
  buildingStyles: React.CSSProperties;
  horizontal?: boolean;
  input: [boolean, boolean, boolean];
  output: [boolean, boolean, boolean];
  pos: Pos;
};

const DisplayWires: React.FC<Props> = ({
  buildingStyles,
  horizontal,
  input,
  output,
  pos,
  children,
}) => {
  const altText = `
    Ledningstatus in:
    Ansatt nettverk: ${input[0] ? "på" : "av"}.
    Admin nettverk: ${input[1] ? "på" : "av"}.
    Gjestenettverk: ${input[2] ? "på" : "av"}.
    Ledningstatus ut:
    Ansatt nettverk: ${output[0] ? "på" : "av"}.
    Admin nettverk: ${output[1] ? "på" : "av"}.
    Gjestenettverk: ${output[2] ? "på" : "av"}.
  `;
  return (
    <StyledWires
      style={buildingStyles}
      left={pos.left}
      bottom={pos.bottom}
      right={pos.right}
    >
      <img src={WiresVertical} alt={altText} />
      {children}
    </StyledWires>
  );
};

type Pos = {
  bottom: number;
  left?: number;
  right?: number;
};

const StyledWires = styled.div<Pos>`
  position: absolute;
  width: calc(calc(var(--bWidth) / 100) * 5);
  bottom: calc(calc(var(--bHeight) / 100) * ${(props) => props.bottom});
  left: ${(props) =>
    props.left ? `calc(calc(var(--bHeight) / 100) * ${props.left})` : `auto`};
  right: ${(props) =>
    props.right ? `calc(calc(var(--bHeight) / 100) * ${props.right})` : `auto`};
  img {
    width: 100%;
    user-select: none;
  }
`;

export default DisplayWires;
