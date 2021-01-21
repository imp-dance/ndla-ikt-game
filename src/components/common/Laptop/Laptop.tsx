import React from "react";
import styled from "styled-components";
import classnames from "classnames";

import { Pos } from "../../../types/common";
import LaptopIMG from "../../../assets/symbols/Laptop.svg";
import LabelAnsatt from "../../../assets/labels/ansatt_tradlost_label.svg";
import LabelGjest from "../../../assets/labels/gjest_tradlost_label.svg";
import MobileIMG from "../../../assets/symbols/Mobile.svg";
import Lines, { Line } from "../Lines/Lines";

type Props = {
  pos: Pos;
  buildingStyles: React.CSSProperties;
  faded?: boolean;
  active?: boolean;
  hasPhone?: boolean;
};

const PC: React.FC<Props> = ({
  pos,
  buildingStyles,
  faded,
  active,
  hasPhone,
}) => {
  const [isActive, setActive] = React.useState(active);
  const labelImg = hasPhone ? LabelGjest : LabelAnsatt;

  React.useEffect(() => {
    if (!isActive && active) {
      setActive(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);
  const classname = classnames({ faded: faded }, { blink: isActive });
  return (
    <StyledPC {...pos} style={buildingStyles} className={classname}>
      {hasPhone && (
        <img src={MobileIMG} className="mobile" alt="Mobile illustration" />
      )}
      <img src={labelImg} alt="" className="label" />
      <img src={LaptopIMG} alt="PC illustration" />
      <Lines>
        <Line
          active={active}
          className={hasPhone ? "middle" : "left"}
          faded={faded}
        />
      </Lines>
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
    user-select: none;
    pointer-events: none;
  }
  .label {
    max-width: 500px !important;
    position: absolute;
    bottom: calc(100% + calc(calc(var(--bHeight) / 100) * 1));
    left: 50%;
    transform: translate(-50%, 0px);
    width: calc(calc(var(--bWidth) / 100) * 9);
  }
  .line {
    height: calc(calc(var(--bHeight) / 100) * 3.7);
    left: 50%;
    &.left {
      left: 15%;
    }
    top: 100%;
  }
  .mobile {
    position: absolute;
    left: 100%;
    width: calc(calc(var(--bWidth) / 100) * 2.5);
    bottom: 50%;
  }
`;

export default PC;
