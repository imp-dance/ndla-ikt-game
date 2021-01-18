import React from "react";
import styled from "styled-components";
import Lines, { Line } from "../../Lines/Lines";
import DisplayWires from "../../DisplayWires/DisplayWires";
import { Connection } from "../../../../types/common";

type Props = {
  active?: [boolean, boolean];
  faded?: boolean;
  buildingStyles: React.CSSProperties;
  input: Connection;
  output: Connection;
};

const APToAnsatt: React.FC<Props> = ({
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
        bottom: 66,
        left: 98,
      }}
      horizontal
      faded={faded}
    >
      <LineContainer>
        <Lines>
          <Line active={active && active[1]} horizontal faded={faded} />
          <Line active={active && active[0]} horizontal faded={faded} />
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
      width: calc(calc(var(--bWidth) / 100) * 3.4);
    }
    &:nth-child(2) {
      right: 100%;
      width: calc(calc(var(--bWidth) / 100) * 3.4);
    }
  }
`;

export default APToAnsatt;
