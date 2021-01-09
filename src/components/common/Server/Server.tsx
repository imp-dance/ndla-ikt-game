import React from "react";
import styled from "styled-components";

import { Pos } from "../../../types/common";
import ServerIMG from "../../../assets/symbols/Server.svg";
import ServerLabel from "../../../assets/labels/server_label.svg";

type Props = {
  pos: Pos;
  buildingStyles: React.CSSProperties;
  faded?: boolean;
};

const Server: React.FC<Props> = ({ pos, buildingStyles, faded }) => {
  return (
    <StyledServer
      {...pos}
      style={buildingStyles}
      className={`${faded ? "faded" : ""}`}
    >
      <img className="label" src={ServerLabel} alt="" />
      <img src={ServerIMG} alt="Server" />
    </StyledServer>
  );
};

const StyledServer = styled.div<Pos>`
  position: absolute;
  width: calc(calc(var(--bWidth) / 100) * 7);
  bottom: calc(calc(var(--bHeight) / 100) * ${(props) => props.bottom});
  left: ${(props) =>
    props.left ? `calc(calc(var(--bWidth) / 100) * ${props.left})` : `auto`};
  right: ${(props) =>
    props.right ? `calc(calc(var(--bHeight) / 100) * ${props.right})` : `auto`};
  > img {
    width: 100%;
    user-select: none;
    pointer-events: none;
  }
  .label {
    position: absolute;
    bottom: calc(100% + calc(calc(var(--bHeight) / 100) * 1));
    left: 50%;
    transform: translate(-50%, 0px);
    width: calc(calc(var(--bWidth) / 100) * 6);
  }
`;

export default Server;
