import React from "react";
import styled from "styled-components";
import WWW from "../../../assets/symbols/www.svg";
import Lines, { Line } from "../Lines/Lines";

type Props = {
  buildingStyles: React.CSSProperties;
};

const CloudWWW: React.FC<Props> = ({ buildingStyles }) => {
  return (
    <StyledCloud style={buildingStyles}>
      <img src={WWW} alt="Internet symbol" />
      <Lines>
        <Line active />
      </Lines>
    </StyledCloud>
  );
};

const StyledCloud = styled.div`
  position: absolute;
  width: calc(calc(var(--bWidth) / 100) * 21);
  bottom: calc(calc(var(--bHeight) / 100) * 66);
  left: calc(calc(var(--bWidth) / 100) * 4);
  img {
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
