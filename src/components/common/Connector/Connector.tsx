import React from "react";
import styled from "styled-components";

import ConnectorIMG from "../../../assets/symbols/Connector.svg";

type Props = {
  input: [boolean, boolean, boolean];
  onOutput: (output: [boolean, boolean, boolean]) => void;
  pos: Pos;
  buildingStyles: React.CSSProperties;
};

const Connector: React.FC<Props> = ({
  input,
  onOutput,
  pos,
  buildingStyles,
}) => {
  return (
    <StyledButton
      style={buildingStyles}
      bottom={pos.bottom}
      left={pos.left}
      right={pos.right}
    >
      <img src={ConnectorIMG} alt="Connect button symbol" />
    </StyledButton>
  );
};

type Pos = {
  bottom: number;
  left?: number;
  right?: number;
};

const StyledButton = styled.button<Pos>`
  border: none;
  background: transparent;
  cursor: pointer;
  position: absolute;
  width: calc(calc(var(--bWidth) / 100) * 5);
  bottom: calc(calc(var(--bHeight) / 100) * ${(props) => props.bottom});
  left: ${(props) =>
    props.left ? `calc(calc(var(--bHeight) / 100) * ${props.left})` : `auto`};
  right: ${(props) =>
    props.right ? `calc(calc(var(--bHeight) / 100) * ${props.right})` : `auto`};
`;

export default Connector;
