import * as React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

export interface IMainMenuProps {
  onOppgave: () => void;
  onEkspert: () => void;
  isNN: boolean;
}

export function MainMenu(props: IMainMenuProps) {
  return (
    <StyledMainMenu>
      <h1>VLAN-simulering</h1>
      <h3>
        {props.isNN
          ? "Denne simuleringa let deg setje opp VLAN i eit tenkt bedriftsnettverk."
          : "Denne simuleringen lar deg sette opp VLAN i et tenkt bedriftsnettverk."}
      </h3>
      <p>
        {props.isNN ? (
          <>
            Vel <strong>Oppgåver</strong> for å få ei trinnvis innføring gjennom
            seks korte oppgåver. Førstegongsbrukarar bør starte her.
          </>
        ) : (
          <>
            Velg <strong>Oppgaver</strong> for å få en trinnvis innføring
            gjennom seks korte oppgaver. Førstegangsbrukere bør starte her.
          </>
        )}
      </p>
      <p>
        {props.isNN ? (
          <>
            Vel <strong>Ekspertkonfigurasjon</strong> dersom du vil teste
            simuleringa utan hjelp.
          </>
        ) : (
          <>
            Velg <strong>Ekspertkonfigurasjon</strong> dersom du vil teste
            simuleringen uten hjelp.
          </>
        )}
      </p>
      <p>Lykke til!</p>
      <footer>
        <Button onClick={props.onOppgave}>
          {props.isNN ? "Oppgåver" : "Oppgaver"}
        </Button>
        <Button onClick={props.onEkspert}>Ekspertkonfigurasjon</Button>
      </footer>
    </StyledMainMenu>
  );
}

const StyledMainMenu = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-blue);
  text-align: center;
  min-width: 550px;
  @media screen and (max-height: 670px) {
    transform: translate(-50%, -60%);
  }
  h1 {
    font-size: 3rem;
  }
  h3,
  p {
    font-size: 1.1rem;
    max-width: 470px;
    &:last-of-type {
      margin-bottom: 2rem;
    }
    margin: 0 auto;
  }
  p:last-of-type {
    margin-top: 2rem;
  }
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
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

export default MainMenu;
