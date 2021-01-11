import React from "react";
import styled from "styled-components";
import Lines, { Line } from "../../Lines/Lines";
import DisplayWires from "../../DisplayWires/DisplayWires";
import { Connection } from "../../../../types/common";

type Props = {
  active?: [boolean, boolean];
  buildingStyles: React.CSSProperties;
  input: Connection;
  output: Connection;
  faded?: boolean;
};

const SwitchToSwitch: React.FC<Props> = ({
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
        bottom: 32.5,
        left: 84,
      }}
      horizontal
    >
      <LineContainer>
        <Lines>
          <Line active={active && active[1]} horizontal />
          <Line active={active && active[0]} horizontal />
          <Line active={active && active[0]} />
          <Line active={active && active[0]} horizontal />
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
      bottom: calc(calc(var(--bHeight) / 100) * 3.3);
      left: calc(calc(var(--bWidth) / 100) * 8.7);
      width: calc(calc(var(--bWidth) / 100) * 8);
    }
    &:nth-child(2) {
      width: calc(calc(var(--bWidth) / 100) * 5);
      bottom: calc(calc(var(--bHeight) / 100) * 3.3);
      left: calc(calc(var(--bWidth) / 100) * -2.5);
    }
    &:nth-child(3) {
      height: calc(calc(var(--bHeight) / 100) * 12.4);
      bottom: calc(calc(var(--bHeight) / 100) * -8.6);
      left: calc(calc(var(--bWidth) / 100) * -4.8);
    }
    &:nth-child(4) {
      bottom: calc(calc(var(--bHeight) / 100) * -8.8);
      width: calc(calc(var(--bWidth) / 100) * 2.9);
      left: calc(calc(var(--bWidth) / 100) * -6.4);
      right: 50%;
    }
  }
`;

export default SwitchToSwitch;
