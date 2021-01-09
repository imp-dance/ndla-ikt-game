import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type Props = {
  images: string[];
  onLoadFinished: () => void;
};

const Loader: React.FC<Props> = ({ images, onLoadFinished }) => {
  const [loading, setLoading] = useState(true);
  const [ellipsis, setEllipsis] = useState("");
  const counter = useRef(0);
  const mounted = useRef(true);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= images.length) {
      setTimeout(() => setLoading(false), 100);
      onLoadFinished();
    }
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      if (!mounted.current || !loading) {
        clearInterval(interval);
      } else {
        switch (ellipsis) {
          case "":
            setEllipsis(".");
            break;
          case ".":
            setEllipsis("..");
            break;
          case "..":
            setEllipsis("...");
            break;
          case "...":
          default:
            setEllipsis("");
            break;
        }
      }
    }, 420);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ellipsis]);

  useEffect(() => {
    return () => {
      if (mounted && mounted.current) {
        mounted.current = false;
      }
    };
  }, []);
  return (
    <StyledLoader
      className={loading ? "loading" : "notLoading"}
      aria-labelledby="loadingLabel"
      role="dialog"
      aria-modal="true"
      aria-hidden={!loading}
    >
      <h2 id="loadingLabel">Laster inn{ellipsis}</h2>
      <div style={{ display: "none" }}>
        {images.map((url) => (
          <img
            key={url}
            alt="Ignore, just for loading"
            src={url}
            onLoad={imageLoaded}
          />
        ))}
      </div>
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  z-index: 200;

  display: grid;
  grid-template: 1/1;
  justify-content: center;
  align-items: center;

  &.notLoading {
    animation: fadeOut 0.2s ease-in-out;
    animation-fill-mode: both;
    pointer-events: none;
    user-select: none;
    @keyframes fadeOut {
      to {
        opacity: 0;
        transform: translate(0px, 5px);
      }
    }
  }
  h2 {
    font-size: 7vmin;
  }
`;

export default Loader;
