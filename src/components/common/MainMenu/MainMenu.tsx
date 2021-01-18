import * as React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

export interface IMainMenuProps {
  onOppgave: () => void;
  onEkspert: () => void;
}

export function MainMenu(props: IMainMenuProps) {
  return (
    <StyledMainMenu>
      <h1>Velkommen</h1>
      <h3>
        Simuleringen vil gi en forståelse for hvordan VLAN skal konfigureres i
        et tenkt nettverk.
      </h3>
      <p>
        Vi anbefaler alle å trykke <strong>Oppgaver</strong> først for å få en
        trinnvis innføring med 6 korte oppgaver.
      </p>
      <p>
        Velg <strong>Ekspertkonfigurasjon</strong> dersom du ønsker å teste
        simuleringen uten hjelp.
      </p>
      <p>Lykke til!</p>
      <footer>
        <Button onClick={props.onOppgave}>Oppgave</Button>
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
