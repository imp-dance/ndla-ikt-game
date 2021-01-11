import React, { Fragment as F } from "react";

export type Task = {
  number: number;
  title: string;
  label: {
    initial: React.ReactNode;
    completed: React.ReactNode;
  };
};

export const tasks: Task[] = [
  {
    number: 1,
    title: "Oppgavene",
    label: {
      initial: "Sett VLAN nummer på alle tre nettverkene i simuleringen",
      completed: (
        <F>
          <strong>Flott!</strong> <span className="icon-green">✔</span> Gå til
          neste oppgave.
        </F>
      ),
    },
  },
  {
    number: 2,
    title: "Oppgavene",
    label: {
      initial: (
        <F>
          Lag gyldig forbindelse mellom <strong>Ruter</strong> via{" "}
          <strong>Svitsj 1</strong> til <strong>Drift PC</strong>. Kun{" "}
          <strong>Drift nettverk</strong> skal foreløpig ha tilgang.
        </F>
      ),
      completed: (
        <F>
          <strong>Riktig!</strong> <span className="icon-green">✔</span> Gå til
          neste oppgave.
        </F>
      ),
    },
  },
  {
    number: 3,
    title: "Oppgavene",
    label: {
      initial: (
        <F>
          Konfigurer korrekt VLAN forbindelse fra <strong>Ruter</strong>, via{" "}
          <strong>Svitsj 1</strong> og <strong>Svitsj 2</strong> til{" "}
          <strong>Ansatt Gruppe</strong>. Husk at du samtidig må utvide{" "}
          <strong>Drift nettverk</strong> til <strong>Svitsj 2</strong>.
        </F>
      ),
      completed: (
        <F>
          <strong>Bra jobba!</strong> <span className="icon-green">✔</span> Gå
          til neste oppgave.
        </F>
      ),
    },
  },
  {
    number: 4,
    title: "Oppgavene",
    label: {
      initial: (
        <F>
          Konfigurer korrekt VLAN mot <strong>Server</strong>, slik at både{" "}
          <strong>ansatte</strong> og <strong>drift</strong> får tilgang.
        </F>
      ),
      completed: (
        <F>
          <strong>Helt riktig!</strong> <span className="icon-green">✔</span> Gå
          til neste oppgave.
        </F>
      ),
    },
  },
  {
    number: 5,
    title: "Oppgavene",
    label: {
      initial: (
        <F>
          Konfigurer <strong>Konsulent Gruppe</strong> og skaff disse tilgang
          til <strong>Gjestenettverk</strong>.
          <br />
          Husk at du samtidig må gi <strong>Drift nettverk</strong> tilgang til{" "}
          <strong>Svitsj 3</strong>
        </F>
      ),
      completed: (
        <F>
          <strong>Bra jobba!</strong> <span className="icon-green">✔</span> Gå
          til neste oppgave.
        </F>
      ),
    },
  },
  {
    number: 6,
    title: "Oppgavene",
    label: {
      initial: (
        <F>
          Kople til <strong>Aksesspunkt</strong> mot alle VLAN.
          <br />
          Opprett <strong>Ansatt-</strong> og <strong>Gjest</strong> trådløst{" "}
          nettverk og tildel disse passende VLAN ved å trykke på{" "}
          <strong>trådløs ikonet</strong> over <strong>Aksesspunkt</strong>.
        </F>
      ),
      completed: (
        <F>
          <strong>Helt riktig!</strong> <span className="icon-green">✔</span> Gå{" "}
          til neste oppgave.
        </F>
      ),
    },
  },
];

export const getTask = (taskNum: number): Task => {
  return tasks.filter((task) => task.number === taskNum)[0];
};

export default tasks;
