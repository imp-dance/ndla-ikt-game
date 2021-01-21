import React from "react";
import styled from "styled-components";

import { Pos } from "../../../types/common";
import ConnectorIMG from "../../../assets/symbols/Connector.svg";
import WifiIMG from "../../../assets/symbols/Wifi_Connection.svg";

type Props = {
  pos: Pos;
  buildingStyles: React.CSSProperties;
  faded?: boolean;
  onClick: (id: string, type?: string, needsID?: boolean) => void;
  id: string;
  type?: "wire" | "wifi";
  needsID?: boolean;
};

const Connector: React.FC<Props> = ({
  pos,
  buildingStyles,
  children,
  faded,
  onClick,
  id,
  type,
  needsID,
}) => {
  if (!type) {
    type = "wire"; // default
  }
  const img = type === "wire" ? ConnectorIMG : WifiIMG;
  return (
    <ConnectorWrapper
      style={buildingStyles}
      bottom={pos.bottom}
      left={pos.left}
      right={pos.right}
      className={`${faded ? "faded" : ""}`}
    >
      <StyledButton
        onClick={onClick ? () => onClick(id ?? "", type, needsID) : undefined}
      >
        <img
          src={img}
          alt={`${type === "wire" ? "Connect" : "Wifi"} button symbol`}
        />
        {children}
      </StyledButton>
    </ConnectorWrapper>
  );
};

const ConnectorWrapper = styled.div<Pos>`
  position: absolute;
  transform: translate(calc(calc(var(--bWidth) / 100) * 0.7), 0px);
  width: calc(calc(var(--bWidth) / 100) * 3);
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
  transition: transform 0.2s ease-in-out;
  padding: 0;
  margin: 0;
  img {
    user-select: none;
    width: 100%;
  }
`;

export default Connector;
