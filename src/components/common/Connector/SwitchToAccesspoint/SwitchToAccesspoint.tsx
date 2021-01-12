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

const SwitchToAccesspoint: React.FC<Props> = ({
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
        bottom: 45,
        right: 50.9,
      }}
    >
      <LineContainer>
        <Lines>
          <Line active={active} />
          <Line active={active} />
          <Line active={active} horizontal />
        </Lines>
      </LineContainer>
    </DisplayWires>
  );
};

const LineContainer = styled.div`
  .line {
    left: 50%;
    transform: translate(-50%, 0px);
    &:nth-child(2) {
      height: calc(calc(var(--bHeight) / 100) * 6.4);
    }
    &:nth-child(1) {
      bottom: calc(calc(var(--bHeight) / 100) * 10.1);
      height: calc(calc(var(--bHeight) / 100) * 7);
    }
    &:nth-child(3) {
      bottom: calc(calc(var(--bHeight) / 100) * 17.1);
      width: calc(calc(var(--bWidth) / 100) * 3.5);
      left: calc(calc(var(--bWidth) / 100) * 0.9);
    }
  }
`;

export default SwitchToAccesspoint;
