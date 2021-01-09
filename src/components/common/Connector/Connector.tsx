import React from "react";
import styled from "styled-components";

import { Pos } from "../../../types/common";
import ConnectorIMG from "../../../assets/symbols/Connector.svg";

type Props = {
  input: [boolean, boolean, boolean];
  onOutput: (output: [boolean, boolean, boolean]) => void;
  pos: Pos;
  buildingStyles: React.CSSProperties;
  faded?: boolean;
  onClick: (id: string) => void;
  id: string;
};

const Connector: React.FC<Props> = ({
  input,
  onOutput,
  pos,
  buildingStyles,
  children,
  faded,
  onClick,
  id,
}) => {
  return (
    <ConnectorWrapper
      style={buildingStyles}
      bottom={pos.bottom}
      left={pos.left}
      right={pos.right}
      className={`${faded ? "faded" : ""}`}
    >
      <StyledButton onClick={onClick ? () => onClick(id ?? "") : undefined}>
        <img src={ConnectorIMG} alt="Connect button symbol" />
        {children}
      </StyledButton>
    </ConnectorWrapper>
  );
};

const ConnectorWrapper = styled.div<Pos>`
  position: absolute;
  width: calc(calc(var(--bWidth) / 100) * 4.3);
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
