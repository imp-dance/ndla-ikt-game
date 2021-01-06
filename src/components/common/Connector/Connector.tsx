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
  children,
}) => {
  return (
    <ConnectorWrapper
      style={buildingStyles}
      bottom={pos.bottom}
      left={pos.left}
      right={pos.right}
    >
      <StyledButton>
        <img src={ConnectorIMG} alt="Connect button symbol" />
        {children}
      </StyledButton>
    </ConnectorWrapper>
  );
};

type Pos = {
  bottom: number;
  left?: number;
  right?: number;
};

const ConnectorWrapper = styled.div<Pos>`
  position: absolute;
  width: calc(calc(var(--bWidth) / 100) * 5);
  bottom: calc(calc(var(--bHeight) / 100) * ${(props) => props.bottom});
  left: ${(props) =>
    props.left ? `calc(calc(var(--bHeight) / 100) * ${props.left})` : `auto`};
  right: ${(props) =>
    props.right ? `calc(calc(var(--bHeight) / 100) * ${props.right})` : `auto`};
`;

const StyledButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
  img {
    user-select: none;
    width: 100%;
  }
`;

export default Connector;
