import React from "react";
import styled from "styled-components";
import WWW from "../../../assets/symbols/www.svg";
import WWWLabel from "../../../assets/labels/internet_label.svg";
import Lines, { Line } from "../Lines/Lines";

type Props = {
  buildingStyles: React.CSSProperties;
  faded?: boolean;
};

const CloudWWW: React.FC<Props> = ({ buildingStyles, faded }) => {
  return (
    <StyledCloud style={buildingStyles} className={`${faded ? "faded" : ""}`}>
      <img src={WWWLabel} alt="Internet label" className="WWW-label" />
      <img src={WWW} alt="Internet symbol" className="WWW" />
      <Lines>
        <Line active />
      </Lines>
    </StyledCloud>
  );
};

const StyledCloud = styled.div`
  position: absolute;
  width: calc(calc(var(--bWidth) / 100) * 21);
  bottom: calc(calc(var(--bHeight) / 100) * 67);
  left: calc(calc(var(--bWidth) / 100) * 3.9);
  .WWW-label {
    width: calc(calc(var(--bWidth) / 100) * 7);
    position: absolute;
    bottom: 100%;
    left: 100%;
    transform: translate(
      calc(-50% + calc(calc(var(--bHeight) / 100) * -2)),
      0px
    );
    user-select: none;
    pointer-events: none;
  }
  .WWW {
    user-select: none;
    pointer-events: none;
    width: 100%;
  }
  .lines {
    > div:nth-child(1) {
      height: calc(calc(var(--bHeight) / 100) * 6);
      top: 100%;
      left: 65%;
    }
  }
`;

export default CloudWWW;
