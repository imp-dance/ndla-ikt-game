import React from "react";
import styled from "styled-components";

import { Connection, Pos } from "../../../types/common";
import WiresVertical from "../../../assets/symbols/Wires_Vertical.svg";
import WiresHorizontal from "../../../assets/symbols/Wires_Horizontal.svg";
import AnsattSymb from "../../../assets/symbols/VLAN1_Employee_Network.svg";
import AdminSymb from "../../../assets/symbols/VLAN2_Admin_Network.svg";
import GjestSymb from "../../../assets/symbols/VLAN3_Guest_Network.svg";

type Props = {
  buildingStyles: React.CSSProperties;
  horizontal?: boolean;
  faded?: boolean;
  input: Connection;
  output: Connection;
  pos: Pos;
};

const DisplayWires: React.FC<Props> = ({
  buildingStyles,
  horizontal,
  input,
  output,
  pos,
  children,
  faded,
}) => {
  const altText = `
    Ledningstatus in:
    Ansatt nettverk: ${input[0] ? "på" : "av"}.
    Admin nettverk: ${input[1] ? "på" : "av"}.
    Gjestenettverk: ${input[2] ? "på" : "av"}.
    Ledningstatus ut:
    Ansatt nettverk: ${output[0] ? "på" : "av"}.
    Admin nettverk: ${output[1] ? "på" : "av"}.
    Gjestenettverk: ${output[2] ? "på" : "av"}.
  `;

  const [ansattInn, adminInn, gjestInn] = input;
  const [ansattUt, adminUt, gjestUt] = output;

  return (
    <StyledWires
      style={buildingStyles}
      left={pos.left}
      bottom={pos.bottom}
      right={pos.right}
      className={`${faded ? "faded" : ""}`}
    >
      <img src={horizontal ? WiresHorizontal : WiresVertical} alt={altText} />
      {ansattInn && (
        <In src={AnsattSymb} className="__ansatt" horizontal={horizontal} />
      )}
      {adminInn && (
        <In src={AdminSymb} className="__admin" horizontal={horizontal} />
      )}
      {gjestInn && (
        <In className="__gjest" src={GjestSymb} horizontal={horizontal} />
      )}
      {ansattUt && (
        <Ut src={AnsattSymb} className="__ansatt" horizontal={horizontal} />
      )}
      {adminUt && (
        <Ut src={AdminSymb} className="__admin" horizontal={horizontal} />
      )}
      {gjestUt && (
        <Ut className="__gjest" src={GjestSymb} horizontal={horizontal} />
      )}
      {children}
    </StyledWires>
  );
};

type InOutProps = {
  horizontal?: boolean;
  src?: string;
  className?: string;
};

const In: React.FC<InOutProps> = (props) => {
  return (
    <StyledIn {...props}>
      <img src={props.src} alt="" role="presentation" />
      <img src={props.src} alt="" role="presentation" />
    </StyledIn>
  );
};

const Ut: React.FC<InOutProps> = (props) => {
  return (
    <StyledUt {...props}>
      <img src={props.src} alt="" role="presentation" />
      <img src={props.src} alt="" role="presentation" />
    </StyledUt>
  );
};

const StyledIn = styled.div<InOutProps>`
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? "row" : "column")};
  width: ${(props) => (props.horizontal ? "15.5%" : "17.9%")};
  position: absolute;
  top: 14.5%;
  > img {
    margin: ${(props) => (props.horizontal ? "0 25% 0 0" : "0 0 35% 0")};
    user-select: none;
    pointer-events: none;
  }
  ${(props) =>
    !props.horizontal &&
    `
    &.__ansatt {
      right: 14%;
    }
    &.__admin {
      right: 40%;
    }
    &.__gjest {
      right: 67%;
    }
  `}
  ${(props) =>
    props.horizontal &&
    `
    left: 13%;
    &.__ansatt {
      top: 12%;
    }
    &.__admin {
      top: 41%;
    }
    &.__gjest {
      top: 66%;
    }
    
  `}
`;

const StyledUt = styled.div<InOutProps>`
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? "row" : "column")};
  width: ${(props) => (props.horizontal ? "15.5%" : "17.9%")};
  position: absolute;
  bottom: 8%;
  > img {
    margin: ${(props) => (props.horizontal ? "0 25% 0 0" : "0 0 35% 0")};
    user-select: none;
    pointer-events: none;
  }
  ${(props) =>
    !props.horizontal &&
    `
    &.__ansatt {
      right: 14%;
    }
    &.__admin {
      right: 40%;
    }
    &.__gjest {
      right: 67%;
    }
  `}
  ${(props) =>
    props.horizontal &&
    `
    right: 32%;
    &.__ansatt {
      bottom:68%;
    }
    &.__admin {
      bottom: 40%;
    }
    &.__gjest {
      bottom: 14%;
    }
    
  `}
`;

const StyledWires = styled.div<Pos>`
  position: absolute;
  width: calc(calc(var(--bWidth) / 100) * 5);
  bottom: calc(calc(var(--bHeight) / 100) * ${(props) => props.bottom});
  left: ${(props) =>
    props.left ? `calc(calc(var(--bHeight) / 100) * ${props.left})` : `auto`};
  right: ${(props) =>
    props.right ? `calc(calc(var(--bHeight) / 100) * ${props.right})` : `auto`};
  img {
    width: 100%;
    user-select: none;
    pointer-events: none;
  }
`;

export default DisplayWires;
