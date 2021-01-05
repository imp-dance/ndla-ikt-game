import React from "react";
import styled from "styled-components";

import RouterIMG from "../../../assets/symbols/Router.svg";
import Lines, { Line } from "../Lines/Lines";

type Props = {
  buildingStyles: React.CSSProperties;
};

const Router: React.FC<Props> = ({ buildingStyles }) => {
  return (
    <StyledRouter className="b-Router" style={buildingStyles}>
      <span className="leftText">WAN</span>
      <img src={RouterIMG} alt="Router" />
      <span className="rightText">LAN</span>
      <Lines>
        <Line active />
        <Line active />
        <Line horizontal active />
        <Line horizontal active />
      </Lines>
    </StyledRouter>
  );
};

const StyledRouter = styled.div`
  position: absolute;
  width: 6%;
  bottom: calc(calc(var(--bHeight) / 100) * 62);
  left: calc(calc(var(--bWidth) / 100) * 31);
  > img {
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
    padding: 0 var(--padding-s);
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
      height: calc(calc(var(--bHeight) / 100) * 2.1);
      top: calc(100% - 1px);
      left: 5px;
    }
    > div:nth-child(2) {
      height: calc(calc(var(--bHeight) / 100) * 2.1);
      top: calc(100% - 1px);
      right: 5px;
    }
    > div:nth-child(3) {
      top: calc(calc(100% + calc(calc(var(--bHeight) / 100) * 2)) - 2px);
      width: calc(calc(var(--bWidth) / 100) * 13.97);
      right: calc(100% - 7px);
    }
    > div:nth-child(4) {
      top: calc(calc(100% + calc(calc(var(--bHeight) / 100) * 2)) - 2px);
      width: calc(calc(var(--bWidth) / 100) * 2);
      left: calc(100% - 7px);
    }
  }
`;

export default Router;
