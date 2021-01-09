import React from "react";
import styled from "styled-components";
import Cloud2IMG from "../../../assets/background/Cloud_2.svg";
import Cloud1IMG from "../../../assets/background/Cloud_3.svg";
import Tree1IMG from "../../../assets/background/Tree.svg";
import BirdIMG from "../../../assets/background/Bird.svg";
import WindIMG from "../../../assets/background/Wind.svg";
import SunIMG from "../../../assets/background/Sun.svg";

type Props = {
  disabled: boolean;
};

const Background: React.FC<Props> = ({ disabled }) => {
  return (
    <div
      style={{
        opacity: disabled ? "0.5" : "1",
        transition: "all 0.2s ease-in-out",
      }}
    >
      <Cloud1 src={Cloud1IMG} role="presentation" />
      <Tree1 src={Tree1IMG} role="presentation" />
      <Bird src={BirdIMG} role="presentation" />
      <Wind1 src={WindIMG} role="presentation" />
      <Wind2 src={WindIMG} role="presentation" />
      <Cloud2 src={Cloud2IMG} role="presentation" />
      <Cloud3 src={Cloud2IMG} role="presentation" />
      <Sun src={SunIMG} role="presentation" />
    </div>
  );
};

const BGElement = styled.img`
  //pointer-events: none;
  user-select: none;
  pointer-events: none;
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
  animation: windMove 5s ease-in infinite alternate;
  @keyframes windMove {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(18px, 0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
  @media screen and (max-width: 1400px) {
    transform: translate(-300px, -10px);
  }
  @media screen and (max-width: 1500px) {
    transform: translate(-300px, -10px);
    animation: none;
  }
`;

const Wind2 = styled(BGElement)`
  position: absolute;
  top: 20%;
  left: 30%;
  transition: transform 0.6s ease-in;
  animation: windMove 6s ease-in infinite alternate;
  @keyframes windMove {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(8px, 0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
  @media (max-height: 930px), (max-width: 1300px) {
    transform: translate(-30px, -300px);
    animation: none;
  }
`;

const Sun = styled(BGElement)`
  position: absolute;
  top: 3%;
  left: 25%;
  transition: transform 0.6s ease-in-out;
  @media screen and (max-width: 1100px) {
    transform: translate(50px, 0px);
  }
  @media (max-width: 950px), (max-height: 800px) {
    transform: translate(-10px, -300px);
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
