import React from "react";
import styled from "styled-components";

import { Pos } from "../../../types/common";
import Connector from "../Connector/Connector";
import SwitchImg from "../../../assets/symbols/Switcher.svg";
import Switch1Label from "../../../assets/labels/svitsj_1_label.svg";
import Switch2Label from "../../../assets/labels/svitsj_2_label.svg";
import Switch3Label from "../../../assets/labels/svitsj_3_label.svg";
import Lines, { Line } from "../Lines/Lines";

type Props = {
  id: number;
  pos: Pos;
  buildingStyles: React.CSSProperties;
  onConnectorClick: (id: string) => void;
  activeState?: {
    topRight: boolean;
    bottomRight: boolean;
    topLeft: boolean;
    bottomLeft: boolean;
  };
  faded?: boolean;
};

const Switch: React.FC<Props> = ({
  id,
  pos,
  buildingStyles,
  activeState,
  faded,
  onConnectorClick,
}) => {
  const labels = [Switch1Label, Switch2Label, Switch3Label];
  const linesActive = activeState ?? {
    topRight: true,
    bottomRight: true,
    topLeft: true,
    bottomLeft: true,
  };
  const connectorPos = {
    topRight: {
      bottom: 5.8,
      left: 12,
    },
    bottomRight: {
      bottom: -5.8,
      left: 12,
    },
    bottomLeft: {
      bottom: id === 3 ? -3.4 : -5.8,
      right: 14.2,
    },
    topLeft: {
      bottom: id === 3 ? 8.8 : 5.8,
      right: 14.2,
    },
  };

  return (
    <StyledSwitch
      {...pos}
      style={buildingStyles}
      className={`${faded ? "faded" : ""}`}
    >
      <img src={labels[id - 1]} alt="Label" className="label" />
      <Lines style={buildingStyles} className="topLines">
        {id !== 3 ? <Line active faded={!linesActive.topRight} /> : <div />}
        <Line active faded={!linesActive.topLeft} />
        <Line active faded={!linesActive.topLeft} />
        {id !== 3 ? <Line active faded={!linesActive.topRight} /> : <div />}
      </Lines>
      <img src={SwitchImg} alt="Switch" />
      {id !== 3 && (
        <Connector
          pos={connectorPos.topRight}
          buildingStyles={buildingStyles}
          faded={!linesActive.topRight}
          id="SwitchRuter"
          onClick={() => onConnectorClick(`svitsj${id}.topRight`)}
        />
      )}

      {id !== 3 && (
        <Connector
          pos={connectorPos.bottomRight}
          buildingStyles={buildingStyles}
          faded={!linesActive.bottomRight}
          id="Switch1to2"
          onClick={() => onConnectorClick(`svitsj${id}.bottomRight`)}
        />
      )}
      <Connector
        pos={connectorPos.topLeft}
        buildingStyles={buildingStyles}
        faded={!linesActive.topLeft}
        id="SwitchServer"
        onClick={() => onConnectorClick(`svitsj${id}.topLeft`)}
      />
      <Connector
        pos={connectorPos.bottomLeft}
        buildingStyles={buildingStyles}
        faded={!linesActive.bottomLeft}
        id="drift-pc"
        onClick={() => onConnectorClick(`svitsj${id}.bottomLeft`)}
      />
      <Lines style={buildingStyles} className="bottomLines">
        {id !== 3 ? <Line active faded={!linesActive.bottomRight} /> : <div />}
        <Line active faded={!linesActive.bottomLeft} />
        <Line active faded={!linesActive.bottomLeft} />
        {id !== 3 ? <Line active faded={!linesActive.bottomRight} /> : <div />}
      </Lines>
    </StyledSwitch>
  );
};

const StyledSwitch = styled.div<Pos>`
  > img {
    width: 100%;
    user-select: none;
    pointer-events: none;
  }
  .label {
    position: absolute;
    bottom: 100%;
    width: calc(calc(var(--bWidth) / 100) * 7);
    left: 50%;
    transform: translate(-50%, calc(calc(var(--bHeight) / 100) * -2.5));
    user-select: none;
    pointer-events: none;
  }
  position: absolute;
  width: calc(calc(var(--bWidth) / 100) * 7);
  bottom: calc(calc(var(--bHeight) / 100) * ${(props) => props.bottom});
  left: ${(props) =>
    props.left ? `calc(calc(var(--bHeight) / 100) * ${props.left})` : `auto`};
  right: ${(props) =>
    props.right ? `calc(calc(var(--bHeight) / 100) * ${props.right})` : `auto`};

  > .topLines {
    > div:nth-child(1) {
      width: calc(calc(var(--bWidth) / 100) * 1.8);
      left: 100%;
      margin-left: calc(calc(calc(var(--bWidth) / 100) * 1) * -1);
      bottom: calc(calc(var(--bHeight) / 100) * 3);
    }
    > div:nth-child(2) {
      width: calc(calc(var(--bWidth) / 100) * 1.8);
      right: 100%;
      margin-right: calc(calc(calc(var(--bWidth) / 100) * 1) * -1);
      bottom: calc(calc(var(--bHeight) / 100) * 3);
    }
    > div:nth-child(3) {
      height: calc(calc(var(--bHeight) / 100) * 3);
      right: 100%;
      margin-right: calc(calc(calc(var(--bWidth) / 100) * 1) * -1);
      bottom: 0;
    }
    > div:nth-child(4) {
      height: calc(calc(var(--bHeight) / 100) * 3);
      left: 100%;
      margin-left: calc(calc(calc(var(--bWidth) / 100) * 1) * -1);
      bottom: 0;
    }
  }

  > .bottomLines {
    > div:nth-child(1) {
      width: calc(calc(var(--bWidth) / 100) * 1.8);
      left: 100%;
      margin-left: calc(calc(calc(var(--bWidth) / 100) * 1) * -1);
      top: calc(calc(var(--bHeight) / 100) * 3);
    }
    > div:nth-child(2) {
      width: calc(calc(var(--bWidth) / 100) * 1.8);
      right: 100%;
      margin-right: calc(calc(calc(var(--bWidth) / 100) * 1) * -1);
      top: calc(calc(var(--bHeight) / 100) * 3);
    }
    > div:nth-child(3) {
      height: calc(calc(var(--bHeight) / 100) * 3);
      right: 100%;
      margin-right: calc(calc(calc(var(--bWidth) / 100) * 1) * -1);
      top: 0;
    }
    > div:nth-child(4) {
      height: calc(calc(var(--bHeight) / 100) * 3);
      left: 100%;
      margin-left: calc(calc(calc(var(--bWidth) / 100) * 1) * -1);
      top: 0;
    }
  }
`;

export default Switch;
