import React from "react";
import styled from "styled-components";

import { Pos } from "../../../types/common";
import PCIMG from "../../../assets/symbols/PC.svg";
import PCLabelDrift from "../../../assets/labels/drift_pc_label.svg";
import PCLabelAnsatt from "../../../assets/labels/ansatt_tradlost_label.svg";
import PCLabelGjest from "../../../assets/labels/gjest_tradlost_label.svg";

type Props = {
  pos: Pos;
  buildingStyles: React.CSSProperties;
  id: number;
  faded?: boolean;
};

const PC: React.FC<Props> = ({ pos, buildingStyles, id, faded }) => {
  const labels = [PCLabelAnsatt, PCLabelDrift, PCLabelGjest];
  return (
    <StyledPC {...pos} style={buildingStyles} className={faded ? "faded" : ""}>
      <img src={labels[id - 1]} alt="" className="label" />
      <img src={PCIMG} alt="PC illustration" />
    </StyledPC>
  );
};

const StyledPC = styled.div<Pos>`
  position: absolute;
  width: calc(calc(var(--bWidth) / 100) * 8);
  bottom: calc(calc(var(--bHeight) / 100) * ${(props) => props.bottom});
  left: ${(props) =>
    props.left ? `calc(calc(var(--bHeight) / 100) * ${props.left})` : `auto`};
  right: ${(props) =>
    props.right ? `calc(calc(var(--bHeight) / 100) * ${props.right})` : `auto`};
  > img {
    width: 100%;
    user-select: none;
    pointer-events: none;
  }
  .label {
    position: absolute;
    bottom: calc(100% + calc(calc(var(--bHeight) / 100) * 1));
    left: 50%;
    transform: translate(-50%, 0px);
    width: calc(calc(var(--bWidth) / 100) * 7);
  }
`;

export default PC;
