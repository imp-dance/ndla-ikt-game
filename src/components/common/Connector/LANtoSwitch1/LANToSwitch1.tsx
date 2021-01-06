import React from "react";
import styled from "styled-components";
import Connector from "../Connector";
import Lines, { Line } from "../../Lines/Lines";
import DisplayWires from "../../DisplayWires/DisplayWires";

type Props = {
  active?: boolean;
  buildingStyles: React.CSSProperties;
};

const LANToSwitch1: React.FC<Props> = ({ active, buildingStyles }) => {
  return (
    <DisplayWires
      input={[true, true, true]}
      output={[true, true, true]}
      buildingStyles={buildingStyles}
      pos={{
        bottom: 41,
        left: 63.6,
      }}
    >
      <LineContainer>
        <Lines>
          <Line active={active} />
          <Line active={active} />
        </Lines>
      </LineContainer>
    </DisplayWires>
  );
};

const LineContainer = styled.div`
  .line {
    left: 50%;
    transform: translate(-50%, 0px);
    &:nth-child(1) {
      bottom: calc(calc(var(--bHeight) / 100) * 10);
      height: calc(calc(var(--bHeight) / 100) * 6);
    }
    &:nth-child(2) {
      height: calc(calc(var(--bHeight) / 100) * 5);
    }
  }
`;

export default LANToSwitch1;
