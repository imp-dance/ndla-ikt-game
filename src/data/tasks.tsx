import React, { Fragment as F } from "react";

export type Task = {
  number: number;
  title: string;
  label: {
    initial: React.ReactNode;
    completed: React.ReactNode;
  };
  labelNN: {
    initial: React.ReactNode;
    completed: React.ReactNode;
  };
};

export const tasks: Task[] = [
  {
    number: 1,
    title: "Oppgavene",
    label: {
      initial: (
        <F>
          Sett VLAN-nummer på alle tre nettverkene i simuleringen.
          <br />
          <br />
          Trykk på ikonet oppe i høgre hjørne for hjelp.
        </F>
      ),
      completed: (
        <F>
          <strong>Flott!</strong> <span className="icon-green">✔</span> Gå til
          neste oppgave.
        </F>
      ),
    },
    labelNN: {
      initial: (
        <F>
          Set VLAN-nummer på alle tre nettverka i simuleringa.
          <br />
          <br />
          Trykk på ikonet oppe i høgre hjørne for hjelp.
        </F>
      ),
      completed: (
        <F>
          <strong>Flott!</strong> <span className="icon-green">✔</span> Gå til
          neste oppgåve.
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
          Sett opp en <strong>VLAN-forbindelse</strong> for det logiske
          nettverket <strong>Drift nettverk</strong> mellom{" "}
          <strong>Ruter</strong> og <strong>Drift PC</strong>
        </F>
      ),
      completed: (
        <F>
          <strong>Riktig!</strong> <span className="icon-green">✔</span> Gå til
          neste oppgave.
        </F>
      ),
    },
    labelNN: {
      initial: (
        <F>
          Set opp eit <strong>VLAN-samband</strong> for det logiske nettverket{" "}
          <strong>Drift nettverk</strong> mellom <strong>Ruter</strong> og{" "}
          <strong>Drift PC</strong>.
        </F>
      ),
      completed: (
        <F>
          <strong>Rett!</strong> <span className="icon-green">✔</span> Gå til
          neste oppgåve.
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
          Koble opp det logiske nettverket <strong>Ansatt nettverk</strong> fra{" "}
          <strong>Ruter</strong> til <strong>Ansatt gruppe</strong> via{" "}
          <strong>Svitsj 1</strong> og <strong>Svitsj 2</strong>.
          <br />
          Gi også <strong>Svitsj 2</strong> tilgang til{" "}
          <strong>Drift nettverk</strong> slik at enheten kan styres via dette
          nettverket.
        </F>
      ),
      completed: (
        <F>
          <strong>Bra jobba!</strong> <span className="icon-green">✔</span> Gå
          til neste oppgave.
        </F>
      ),
    },
    labelNN: {
      initial: (
        <F>
          Kople opp det logiske nettverket <strong>Tilsett nettverk</strong> frå{" "}
          <strong>Ruter</strong> til <strong>Tilsett gruppe</strong> via{" "}
          <strong>Svitsj 1</strong> og <strong>Svitsj 2</strong>.
          <br />
          Gi også <strong>Svitsj 2</strong> tilgang til{" "}
          <strong>Drift nettverk</strong> slik at eininga kan styrast via dette
          nettverket.
        </F>
      ),
      completed: (
        <F>
          <strong>Bra jobba!</strong> <span className="icon-green">✔</span> Gå
          til neste oppgåve.
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
          <strong>Ansatt gruppe</strong> og <strong>Drift gruppe</strong> får
          tilgang.
        </F>
      ),
      completed: (
        <F>
          <strong>Helt riktig!</strong> <span className="icon-green">✔</span> Gå
          til neste oppgave.
        </F>
      ),
    },
    labelNN: {
      initial: (
        <F>
          Konfigurer korrekt VLAN mot <strong>Server</strong>, slik at både{" "}
          <strong>Tilsett gruppe</strong> og <strong>Drift gruppe</strong> får
          tilgang.
        </F>
      ),
      completed: (
        <F>
          <strong>Heilt rett!</strong> <span className="icon-green">✔</span> Gå
          til neste oppgåve.
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
          Konfigurer <strong>Konsulent Gruppe</strong> og skaff gruppa tilgang
          til <strong>Gjest nettverk</strong>.
          <br />
          Husk at du samtidig må gi <strong>Drift nettverk</strong> tilgang til{" "}
          <strong>Svitsj 3</strong>.
        </F>
      ),
      completed: (
        <F>
          <strong>Bra jobba!</strong> <span className="icon-green">✔</span> Gå
          til neste oppgave.
        </F>
      ),
    },
    labelNN: {
      initial: (
        <F>
          Konfigurer <strong>Konsulent Gruppe</strong> og skaff gruppa tilgang
          til <strong>Gjest nettverk</strong>.
          <br />
          Hugs at du samstundes må gi <strong>Drift nettverk</strong> tilgang
          til <strong>Svitsj 3</strong>.
        </F>
      ),
      completed: (
        <F>
          <strong>Flott!</strong> <span className="icon-green">✔</span> Gå til
          neste oppgåve.
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
          Koble til <strong>Aksesspunkt</strong> mot alle VLAN.
          <br />
          Opprett nettverkene <strong>Ansatt trådløst</strong> og{" "}
          <strong>Gjest trådløst</strong> og tildel dem passende VLAN ved å
          trykke på <strong>trådløs-ikonet</strong> over{" "}
          <strong>Aksesspunkt</strong>.
        </F>
      ),
      completed: (
        <F>
          <strong>Helt riktig!</strong> <span className="icon-green">✔</span>
        </F>
      ),
    },
    labelNN: {
      initial: (
        <F>
          Kople til <strong>Aksesspunkt</strong> mot alle VLAN.
          <br />
          Opprett nettverka <strong>Tilsett trådlaust</strong> og{" "}
          <strong>Gjest trådlaust</strong>
          og tildel dei passande VLAN ved å trykke på{" "}
          <strong>trådlaus-ikonet</strong> over <strong>Aksesspunkt</strong>.
        </F>
      ),
      completed: (
        <F>
          <strong>Helt rett!</strong> <span className="icon-green">✔</span>
        </F>
      ),
    },
  },
];

export const getTask = (taskNum: number): Task => {
  return tasks.filter((task) => task.number === taskNum)[0];
};

export default tasks;
