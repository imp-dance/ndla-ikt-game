import React from "react";
import styled from "styled-components";
import Cloud2IMG from "../../../assets/background/Cloud_2.svg";
import Cloud1IMG from "../../../assets/background/Cloud_3.svg";
import SmallTreeIMG from "../../../assets/background/tree_1.svg";
import LargeTreeIMG from "../../../assets/background/tree_2.svg";
import MediumTreeIMG from "../../../assets/background/tree_3.svg";
import BirdIMG from "../../../assets/background/Bird.svg";
import WindIMG from "../../../assets/background/Wind.svg";
import SunIMG from "../../../assets/background/Sun.svg";
import SmallCircleIMG from "../../../assets/background/Circle_Small.svg";

type Props = {
  disabled: boolean;
};

const Background: React.FC<Props> = ({ disabled }) => {
  return (
    <BGContainer
      style={{
        opacity: disabled ? "0.5" : "1",
        transition: "all 0.2s ease-in-out",
      }}
    >
      <Cloud1 src={Cloud1IMG} role="presentation" />
      <Tree1 src={SmallTreeIMG} role="presentation" />
      <Tree2 src={LargeTreeIMG} role="presentation" />
      <Bird src={BirdIMG} role="presentation" />
      <Circle
        pos={{
          bottom: "22%",
          left: "15%",
        }}
        size="16px"
        break="max-width: 1390px"
      />
      <Circle
        pos={{
          bottom: "10%",
          left: "10%",
        }}
        size="13px"
        break="max-width: 1390px"
      />
      <Circle
        pos={{
          bottom: "35%",
          left: "3%",
        }}
        size="11px"
        break="max-width: 1450px"
      />
      <Circle
        pos={{
          bottom: "60%",
          left: "5%",
        }}
        size="13px"
        break="max-width: 1450px"
      />
      <Circle
        pos={{
          bottom: "55%",
          left: "12%",
        }}
        size="10px"
        break="max-width: 1450px"
      />
      <Circle
        pos={{
          bottom: "78%",
          left: "30%",
        }}
        size="13px"
        break="max-height: 900px"
      />
      <Circle
        pos={{
          bottom: "73%",
          right: "28%",
        }}
        size="13px"
        break="max-height: 970px"
      />

      <Circle
        pos={{
          bottom: "22%",
          right: "15%",
        }}
        size="16px"
        break="max-width: 1500px"
      />
      <Circle
        pos={{
          bottom: "10%",
          right: "14%",
        }}
        size="13px"
        break="max-width: 1500px"
      />
      <Circle
        pos={{
          bottom: "32%",
          right: "3%",
        }}
        size="11px"
        break="max-width: 1450px"
      />
      <Circle
        pos={{
          bottom: "60%",
          right: "5%",
        }}
        size="13px"
        break="max-width: 1450px"
      />
      <Wind1 src={WindIMG} role="presentation" />
      <Wind2 src={WindIMG} role="presentation" />
      <Wind3 src={WindIMG} role="presentation" />
      <Tree3 src={SmallTreeIMG} role="presentation" />
      <Tree4 src={MediumTreeIMG} role="presentation" />
      <Cloud2 src={Cloud2IMG} role="presentation" />
      <Cloud3 src={Cloud2IMG} role="presentation" />
      <Sun src={SunIMG} role="presentation" />
    </BGContainer>
  );
};

const BGContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  min-width: 650px;
`;

const BGElement = styled.img`
  //pointer-events: none;
  user-select: none;
  pointer-events: none;
`;

type CircleProps = {
  pos: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  size?: string;
  break?: string;
};

const Circle: React.FC<CircleProps> = (props) => (
  <StyledCircle src={SmallCircleIMG} {...props} />
);

const StyledCircle = styled.img<CircleProps>`
  user-select: none;
  pointer-events: none;
  position: absolute;
  top: ${(props) => props.pos.top ?? "auto"};
  right: ${(props) => props.pos.right ?? "auto"};
  left: ${(props) => props.pos.left ?? "auto"};
  bottom: ${(props) => props.pos.bottom ?? "auto"};
  width: ${(props) => props.size ?? "auto"};
  ${(props) =>
    props.break &&
    `
    @media screen and (${props.break}){
      display:none;
    }
  
  `}
`;

const Cloud1 = styled(BGElement)`
  position: absolute;
  top: 25%;
  left: 4%;
  transition: transform 0.6s ease-in-out;
  @media screen and (max-width: 1600px) {
    transform: translate(-500px, -10px);
  }
  @media (max-height: 800px) {
    transform: translate(-500px, -10px);
  }
`;

const Tree1 = styled(BGElement)`
  position: absolute;
  bottom: 40px;
  left: 2%;
  transition: transform 0.6s ease-in-out;
  @media screen and (max-width: 1400px) {
    transform: translate(-300px, -10px);
  }
`;

const Tree2 = styled(BGElement)`
  position: absolute;
  bottom: 40px;
  left: 6%;
  transition: transform 0.6s ease-in-out;
  @media screen and (max-width: 1400px) {
    transform: translate(-300px, -10px);
  }
`;
const Tree3 = styled(BGElement)`
  position: absolute;
  bottom: 40px;
  right: 6%;
  transition: transform 0.6s ease-in-out;
  @media screen and (max-width: 1500px) {
    transform: translate(300px, -10px);
  }
`;

const Tree4 = styled(BGElement)`
  position: absolute;
  bottom: 40px;
  right: 10%;
  transition: transform 0.6s ease-in-out;
  @media screen and (max-width: 1500px) {
    transform: translate(400px, -10px);
  }
`;

const Bird = styled(BGElement)`
  position: absolute;
  bottom: calc(40px + 175px);
  left: 2%;
  transition: transform 0.6s ease-in-out;
  @media screen and (max-width: 1400px) {
    transform: translate(-300px, -10px);
  }
`;

const Wind1 = styled(BGElement)`
  position: absolute;
  bottom: 45%;
  left: 2%;
  transition: transform 0.6s ease-in;
  animation: windMove1 17s ease-in infinite alternate;
  @keyframes windMove1 {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(35px, 0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
  @media screen and (max-width: 1380px) {
    transform: translate(-300px, -10px);
  }
  @media screen and (max-width: 1500px) {
    transform: translate(-300px, -10px);
    animation: none;
  }
`;

const Wind3 = styled(BGElement)`
  position: absolute;
  left: 35%;
  top: 19%;
  transition: transform 0.6s ease-in;
  animation: windMove10 25s ease infinite alternate;
  @keyframes windMove10 {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(48px, 0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
  @media screen and (max-height: 1050px) {
    transform: translate(-10px, -400px);
    animation: none;
  }
`;

const Wind2 = styled(BGElement)`
  position: absolute;
  bottom: 40%;
  right: 4%;
  transition: transform 0.6s ease-in;
  animation: windMove3 17s ease-in infinite alternate;
  @keyframes windMove3 {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(35px, 0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
  @media (max-height: 800px), (max-width: 1600px) {
    transform: translate(500px, -300px);
    animation: none;
  }
`;

const Sun = styled(BGElement)`
  position: absolute;
  top: 3%;
  left: 25%;
  transition: transform 0.6s ease-in-out;
  animation: sunAnim 18s ease-in-out infinite alternate;
  @keyframes sunAnim {
    0%,
    100% {
      transform: rotate(0deg);
      opacity: 1;
    }
    50% {
      transform: rotate(30deg);
      opacity: 0.5;
    }
  }
  @keyframes sunAnim2 {
    0%,
    100% {
      transform: translate(50px, 0px) rotate(0deg);
      opacity: 1;
    }
    50% {
      transform: translate(50px, 0px) rotate(30deg);
      opacity: 0.5;
    }
  }
  @media screen and (max-width: 1100px) {
    transform: translate(50px, 0px);
    animation-name: sunAnim2;
  }
  @media (max-width: 950px), (max-height: 800px) {
    transform: translate(-10px, -300px);
    animation: none !important;
  }
`;

const Cloud2 = styled(BGElement)`
  position: absolute;
  top: 5%;
  left: 37%;
  transition: transform 0.6s ease-in;
  animation: windMove 10s ease-in infinite alternate;
  @keyframes windMove {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(5px, 0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
  @media (max-height: 880px), (max-width: 1300px) {
    transform: translate(-30px, -300px);
    animation: none;
  }
`;

const Cloud3 = styled(BGElement)`
  position: absolute;
  top: 23%;
  right: 10%;
  transition: transform 0.6s ease-in;
  animation: windMove 10s ease-in infinite alternate;
  @keyframes windMove {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(5px, 0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
  @media (max-height: 880px), (max-width: 1300px) {
    transform: translate(-30px, -300px);
    animation: none;
  }
`;

export default Background;
