import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Cup from "../../../assets/symbols/Cup.svg";

type Props = {
  isNN?: boolean;
  onExpertMode: () => void;
  onMenu: () => void;
};

export const Finished: React.FC<Props> = ({ isNN, onExpertMode, onMenu }) => {
  return (
    <Container>
      <Main>
        <h2>Bra jobba, du har fullført alle oppg{isNN ? "å" : "a"}vene!</h2>
        <img src={Cup} alt="Vinner bilde" className="cup" />
        <p>
          Du kan {isNN ? "no" : "nå"} prøve deg på{" "}
          <strong>Ekspertkonfigurasjon</strong>. Her kan du fritt konfigurere{" "}
          {isNN ? "heile" : "hele"} nettverket ut{isNN ? "a" : "e"}n hjelp.
        </p>
        <footer>
          <Button onClick={onExpertMode}>Ekspertkonfigurasjon</Button>
          <Button onClick={onMenu}>Hov{isNN ? "u" : "e"}dmeny</Button>
        </footer>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #deebf6;
  z-index: 200;
  min-height: 640px;
  animation: fadeIns 0.2s ease-in-out;
  @keyframes fadeIns {
    from {
      opacity: 0;
    }
  }
`;

const Main = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 640px;
  animation: scaleUp 0.6s ease-in-out;
  @keyframes scaleUp {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.95);
    }
  }
  @media (max-height: 700px) and (max-width: 770px) {
    transform: translate(-50%, 0px);
    top: var(--margin-xl);
    font-size: 1rem;
    max-width: 650px;
    min-height: 580px !important;
    h2 {
      font-size: 2rem !important;
    }
  }
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  color: var(--color-blue);
  max-height: calc(100vh - calc(var(--margin-l) * 2));
  padding-bottom: calc(var(--margin-l) * 2);
  overflow-y: auto;
  .cup {
    display: block;
    max-width: 120px;
    margin: var(--margin-s) auto;
    animation: cupAnim 1.1s ease-out;
    @keyframes cupAnim {
      0% {
        opacity: 0;
        transform: scale(0.5);
      }
      79% {
        opacity: 1;
        transform: scale(1);
      }
      80%,
      90% {
        transform: rotate(5deg);
      }

      85%,
      95% {
        transform: rotate(-5deg);
      }
    }
  }
  h2 {
    font-size: 3rem;
    text-align: center;
  }
  p {
    margin-bottom: var(--margin-l);
    line-height: 1.5em;
  }
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: var(--margin-xl);
  }
  button {
    font-size: 1rem;
    width: calc(50% - 50px);
    border: 3px solid var(--color-blue);
    + button {
      margin-top: 1rem;
      background: #fff;
      color: var(--color-blue);
    }
  }
`;
