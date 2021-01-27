import React from "react";
import styled from "styled-components";
import classnames from "classnames";

import { Pos } from "../../../types/common";
import PCIMG from "../../../assets/symbols/PC.svg";
import PCsIMG from "../../../assets/symbols/PCs.svg";
import PCLabelDrift from "../../../assets/labels/drift_pc_label.svg";
import PCLabelAnsatt from "../../../assets/labels/ansatt_tradlost_label.svg";
import PCLabelGjest from "../../../assets/labels/gjest_tradlost_label.svg";
import PCLabelAGroup from "../../../assets/labels/ansatt_gruppe_label.svg";
import PCLabelAGroupNN from "../../../assets/labels/tilsett_gruppe.svg";
import PCLabelKGroup from "../../../assets/labels/konsulent_gruppe_label.svg";

type Props = {
  pos: Pos;
  buildingStyles: React.CSSProperties;
  id: number;
  faded?: boolean;
  active?: boolean;
  isNN?: boolean;
};

const PC: React.FC<Props> = ({
  pos,
  buildingStyles,
  id,
  faded,
  active,
  isNN,
}) => {
  const [isActive, setActive] = React.useState(active);
  const labels = [
    PCLabelAnsatt,
    PCLabelDrift,
    PCLabelGjest,
    isNN ? PCLabelAGroupNN : PCLabelAGroup,
    PCLabelKGroup,
  ];
  const getWidth = (id: number) => {
    switch (true) {
      case id <= 3:
      default:
        return 8;
      case id === 4:
        return 11;
      case id === 5:
        return 13;
    }
  };
  React.useEffect(() => {
    if (!isActive && active) {
      setActive(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);
  const classname = classnames({ faded: faded }, { blink: isActive });
  return (
    <StyledPC {...pos} style={buildingStyles} className={classname}>
      <img
        src={labels[id - 1]}
        alt=""
        className="label"
        style={{ "--width": getWidth(id) } as React.CSSProperties}
      />
      <img src={id > 3 ? PCsIMG : PCIMG} alt="PC illustration" />
    </StyledPC>
  );
};

const StyledPC = styled.div<Pos>`
  position: absolute;
  width: calc(calc(var(--bWidth) / 100) * 7);
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
    max-width: 500px !important;
    position: absolute;
    bottom: calc(100% + calc(calc(var(--bHeight) / 100) * 1));
    left: 50%;
    transform: translate(-50%, 0px);
    width: calc(calc(var(--bWidth) / 100) * var(--width));
  }
`;

export default PC;
