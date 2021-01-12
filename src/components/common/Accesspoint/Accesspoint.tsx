import React from "react";
import styled from "styled-components";

import { Pos } from "../../../types/common";
import AccessPointIMG from "../../../assets/symbols/Accesspoint.svg";
import AccessPointLabel from "../../../assets/labels/aksesspunkt_label.svg";

type Props = {
  pos: Pos;
  buildingStyles: React.CSSProperties;
  faded?: boolean;
};

const AccessPoint: React.FC<Props> = ({ pos, buildingStyles, faded }) => {
  return (
    <StyledAccessPoint
      {...pos}
      style={buildingStyles}
      className={`${faded ? "faded" : ""}`}
    >
      <img className="label" src={AccessPointLabel} alt="" />
      <img src={AccessPointIMG} alt="AccessPoint" />
    </StyledAccessPoint>
  );
};

const StyledAccessPoint = styled.div<Pos>`
  position: absolute;
  width: calc(calc(var(--bWidth) / 100) * 3.5);
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
    bottom: calc(calc(var(--bHeight) / 100) * 1);
    right: calc(100% + calc(calc(var(--bWidth) / 100) * 1));
    width: calc(calc(var(--bWidth) / 100) * 10);
    max-width: 1000px;
  }
`;

export default AccessPoint;
