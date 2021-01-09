import React from "react";
import styled from "styled-components";
import Lines, { Line } from "../../Lines/Lines";
import DisplayWires from "../../DisplayWires/DisplayWires";
import { Connection } from "../../../../types/common";

type Props = {
  active?: boolean;
  buildingStyles: React.CSSProperties;
  input: Connection;
  output: Connection;
  faded?: boolean;
};

const LANToSwitch1: React.FC<Props> = ({
  active,
  buildingStyles,
  input,
  output,
  faded,
}) => {
  return (
    <DisplayWires
      input={input}
      output={output}
      faded={faded}
      buildingStyles={buildingStyles}
      pos={{
        bottom: 43.2,
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
      bottom: calc(calc(var(--bHeight) / 100) * 11);
      height: calc(calc(var(--bHeight) / 100) * 5);
    }
    &:nth-child(2) {
      height: calc(calc(var(--bHeight) / 100) * 4.5);
    }
  }
`;

export default LANToSwitch1;