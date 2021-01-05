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
];

export const getTask = (taskNum: number): Task => {
  return tasks.filter((task) => task.number === taskNum)[0];
};

export default tasks;
