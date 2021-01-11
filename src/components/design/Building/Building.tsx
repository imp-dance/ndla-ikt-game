import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import useWatchElementSize from "../../../hooks/useWatchElementSize";
import zIndexes from "../../../styles/zIndexes";
import Frame1 from "../../../assets/foreground/frame_1.svg";
import Frame2 from "../../../assets/foreground/frame_2.svg";
import Window from "../../../assets/foreground/Window.svg";

type Props = {
  disabled?: boolean;
  content?: (buildingStyles: React.CSSProperties) => React.ReactNode;
  loading?: boolean;
};

const Building: React.FC<Props> = ({ disabled, content, loading }) => {
  const buildingRef = useRef<HTMLImageElement>(null);
  const [buildingHeight, buildingWidth] = useWatchElementSize(buildingRef, {
    watchChildChanges: false,
    watchResize: true,
  });
  const buildingHeightStyles = {
    "--bHeight": buildingHeight + "px",
    "--bWidth": buildingWidth + "px",
  } as React.CSSProperties;
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [loading]);
  return (
    <StyledBuilding disabled={disabled} id="BUILDING">
      <img
        src={Frame2}
        role="presentation"
        alt="Building frame white"
        className="b-f-2"
      />
      <img
        src={Frame1}
        role="presentation"
        alt="Building frame blue"
        ref={buildingRef}
        className="b-f-1"
      />
      {buildingHeight && (
        <>
          <img
            src={Window}
            role="presentation"
            alt="Building window"
            style={buildingHeightStyles}
            className="b-window"
          />
          {!loading && content && content(buildingHeightStyles)}
        </>
      )}
      <div className="lines-below" />
    </StyledBuilding>
  );
};

const StyledBuilding = styled.div<Props>`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0px);
  width: 1000px;
  height: calc(100vh - 200px);
  transition: opacity 0.3s ease-in-out;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  z-index: ${zIndexes.building};
  @media screen and (max-height: 620px) {
    height: 620px;
  }
  @media screen and (min-width: 1400px) {
    width: 1060px;
  }
  @media screen and (max-width: 1050px) {
    width: calc(100% - 30px);
    min-width: calc(100% - 30px);
  }
  img {
    max-width: 100%;
    display: block;
  }
  *[class^="b-"] {
    position: absolute;
    user-select: none;
    pointer-events: none;
  }
  img[class^="b-f"] {
    // Building frames
    bottom: 13px;
    left: 0;
    right: 0;
    max-height: 100vh;
    width: 100%;
    @media screen and (max-height: 620px) {
      /* 
      height: 620px; */
      max-height: 620px;
    }
  }
  img.b-f-1 {
    --offset: 20px;
    width: calc(100% - calc(var(--offset) * 2));
    left: var(--offset);
    bottom: 10px;
  }
  img.b-window {
    width: 8%;
    bottom: calc(calc(var(--bHeight) / 100) * 55);
    right: calc(calc(var(--bWidth) / 100) * 6);
  }
`;

export default Building;
