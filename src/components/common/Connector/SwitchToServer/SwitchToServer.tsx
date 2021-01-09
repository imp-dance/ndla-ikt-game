import React from "react";
import styled from "styled-components";
import Lines, { Line } from "../../Lines/Lines";
import DisplayWires from "../../DisplayWires/DisplayWires";
import { Connection } from "../../../../types/common";

type Props = {
  active?: boolean;
  faded?: boolean;
  buildingStyles: React.CSSProperties;
  input: Connection;
  output: Connection;
};

const SwitchToServer: React.FC<Props> = ({
  active,
  buildingStyles,
  faded,
  input,
  output,
}) => {
  return (
    <DisplayWires
      input={input}
      output={output}
      buildingStyles={buildingStyles}
      pos={{
        bottom: 33,
        left: 32,
      }}
      horizontal
      faded={faded}
    >
      <LineContainer>
        <Lines>
          <Line active={active} horizontal faded={faded} />
          <Line active={active} horizontal faded={faded} />
        </Lines>
      </LineContainer>
    </DisplayWires>
  );
};

const LineContainer = styled.div`
  .line {
    bottom: calc(calc(var(--bHeight) / 100) * 3);
    transform: translate(0px, -50%);
    &:nth-child(1) {
      left: 100%;
      width: calc(calc(var(--bWidth) / 100) * 3.2);
    }
    &:nth-child(2) {
      right: 100%;
      width: calc(calc(var(--bWidth) / 100) * 7.6);
    }
  }
`;

export default SwitchToServer;
