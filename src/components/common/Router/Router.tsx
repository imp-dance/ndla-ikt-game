import React from "react";
import styled from "styled-components";

import RouterIMG from "../../../assets/symbols/Router.svg";
import RouterLabel from "../../../assets/labels/ruter_label.svg";
import Lines, { Line } from "../Lines/Lines";

type Props = {
  buildingStyles: React.CSSProperties;
  faded?: boolean;
};

const Router: React.FC<Props> = ({ buildingStyles, faded }) => {
  return (
    <StyledRouter
      className={`b-Router ${faded ? "faded" : ""}`}
      style={buildingStyles}
    >
      <span className="leftText">WAN</span>
      <img src={RouterLabel} className="ruter-label" alt="Router" />
      <img src={RouterIMG} className="ruter" alt="Router" />
      <span className="rightText">LAN</span>
      <Lines>
        <Line active faded={faded} />
        <Line active faded={faded} />
        <Line horizontal active faded={faded} />
        <Line horizontal active faded={faded} />
      </Lines>
    </StyledRouter>
  );
};

const StyledRouter = styled.div`
  position: absolute;
  width: 6%;
  bottom: calc(calc(var(--bHeight) / 100) * 65);
  left: calc(calc(var(--bWidth) / 100) * 31);
  .ruter-label {
    position: absolute;
    bottom: 100%;
    max-width: calc(calc(var(--bWidth) / 100) * 6.5);
    left: 50%;
    transform: translate(-50%, calc(calc(var(--bHeight) / 100) * -1));
    user-select: none;
    pointer-events: none;
  }
  .ruter {
    width: 100%;
    user-select: none;
    pointer-events: none;
  }
  > span {
    display: block;
    position: absolute;
    user-select: none;
    pointer-events: none;
    top: 50%;
    transform: translate(0px, -50%);
    padding: 0 var(--padding-xs);
    font-weight: bold;
    color: var(--color-blue);
    font-size: clamp(0.7vmin, 0.8em, 1vmax);
    &.leftText {
      right: 100%;
    }
    &.rightText {
      left: 100%;
    }
  }
  .lines {
    > div:nth-child(1) {
      height: calc(calc(var(--bHeight) / 100) * 4.1);
      top: calc(100% - 1px);
      left: 5px;
    }
    > div:nth-child(2) {
      height: calc(calc(var(--bHeight) / 100) * 4.1);
      top: calc(100% - 1px);
      right: 5px;
    }
    > div:nth-child(3) {
      top: calc(calc(100% + calc(calc(var(--bHeight) / 100) * 4)) - 2px);
      width: calc(calc(var(--bWidth) / 100) * 14.1);
      right: calc(100% - 7px);
    }
    > div:nth-child(4) {
      top: calc(calc(100% + calc(calc(var(--bHeight) / 100) * 4)) - 2px);
      width: calc(calc(var(--bWidth) / 100) * 1.9);
      left: calc(100% - 7px);
    }
  }
`;

export default Router;
