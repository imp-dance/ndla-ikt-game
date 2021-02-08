import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getTask, Task } from "../../../data/tasks";
import zIndexes from "../../../styles/zIndexes";
import TimerIMG from "../../../assets/symbols/timer.svg";
import HomeIMG from "../../../assets/symbols/home.svg";
import HelpIMG from "../../../assets/symbols/help.svg";
import Button from "../Button/Button";

type Props = {
  currentTask: number;
  onNextTask: () => void;
  onPrevTask: () => void;
  onHelp: () => void;
  onHome: () => void;
  onReset: () => void;
  onShowFinishScreen: () => void;
  taskCompleted: boolean;
  expertMode?: boolean;
  startExpertMode: () => void;
  expertModeStarted: boolean;
  time: number;
  finishedTime?: number;
  isNN: boolean;
};

const TaskWindow: React.FC<Props> = ({
  currentTask: taskNumber,
  onNextTask,
  onPrevTask,
  onHome,
  onReset,
  onHelp,
  taskCompleted,
  expertMode,
  startExpertMode,
  expertModeStarted,
  time,
  finishedTime,
  onShowFinishScreen,
  isNN,
}) => {
  const [task, setTask] = useState<Task>();

  useEffect(() => {
    setTask(getTask(taskNumber));
  }, [taskNumber]);

  if (!task) {
    return null;
  }
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  const doubleDigitify = (input: number) => {
    return input.toString().padStart(2, "0");
  };
  const displayTime = `${doubleDigitify(minutes)}:${doubleDigitify(seconds)}`;
  let displayFinishedTime = "";
  if (finishedTime) {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    displayFinishedTime = `${doubleDigitify(minutes)}:${doubleDigitify(
      seconds
    )}`;
  }
  const label = isNN ? task.labelNN : task.label;
  return (
    <Container id="TASK_WINDOW">
      <TopMenu>
        <button onClick={onHome}>
          <img src={HomeIMG} alt="Tilbake til hjem" />
        </button>
        <button onClick={onHelp}>
          <img src={HelpIMG} alt="Hjelp" />
        </button>
      </TopMenu>
      {!expertMode && (
        <>
          <TaskTitle>{isNN ? "Oppgåvene" : task.title}</TaskTitle>
          <TaskLabel key={`${task.number}-${taskCompleted}`}>
            {taskCompleted ? label.completed : label.initial}
          </TaskLabel>
          <footer>
            <TaskAmount>
              <span>{task.number} /</span> 6{" "}
            </TaskAmount>
            <NextTaskContainer>
              {taskNumber > 1 && (
                <Button
                  onClick={onReset}
                  disabled={taskCompleted}
                  style={
                    {
                      marginRight: "var(--margin-s)",
                      opacity: "0.9",
                    } as React.CSSProperties
                  }
                >
                  Nullstill
                </Button>
              )}
              {taskNumber === 6 ? (
                <Button onClick={onShowFinishScreen} disabled={!taskCompleted}>
                  Fullfør
                </Button>
              ) : (
                <Button disabled={!taskCompleted} onClick={onNextTask}>
                  {isNN ? "Neste oppgåve" : "Neste oppgave"}
                </Button>
              )}
            </NextTaskContainer>
          </footer>
        </>
      )}
      {expertMode && (
        <>
          <TaskTitle>Ekspertkonfigurasjon</TaskTitle>
          <TaskLabel>
            {finishedTime ? (
              <>
                <p>
                  <strong>Imponerende!</strong>{" "}
                  <span className="icon-green">✔</span> Du har konfigurert
                  nettverket riktig og {isNN ? "heilt" : "helt"}
                  {isNN ? "utan" : "uten"} hjelp.
                </p>
                <p>
                  {isNN ? "Din tid:" : "Tida di:"}
                  <strong>
                    <u>
                      {finishedTime} sekund{!isNN && "er"}
                    </u>
                  </strong>
                  .
                </p>
                <p>
                  Trykk <strong>Avslutt</strong> for å gå tilbake til{" "}
                  {isNN ? "hovudmenyen" : "hovedmenyen"}.
                </p>
              </>
            ) : (
              <p>
                {isNN
                  ? "Konfigurer heile nettverket utan hjelp. Sjekk kor raskt du kan gjere dette!"
                  : "Konfigurer hele nettverket uten hjelp. Sjekk hvor raskt du kan gjøre dette!"}
              </p>
            )}
          </TaskLabel>
          <footer>
            <TaskAmount>
              <img src={TimerIMG} alt="Illustration of clock" />
              {finishedTime ? displayFinishedTime : displayTime}
            </TaskAmount>
            <NextTaskContainer>
              {finishedTime ? (
                <Button onClick={onHome}>Avslutt</Button>
              ) : (
                <Button disabled={expertModeStarted} onClick={startExpertMode}>
                  Start konfigurering
                </Button>
              )}
            </NextTaskContainer>
          </footer>
        </>
      )}
    </Container>
  );
};

const TopMenu = styled.div`
  position: absolute;
  top: 30px;
  right: 50px;
  display: flex;
  align-items: center;
  gap: var(
    --margin-xs
  ); /* 
  @media (max-height: 700px) and (max-width: 770px) {
    right: 40px;
  } */
  button {
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    img {
      max-height: 20px;
    }
  }
`;

const Container = styled.div`
  background: var(--color-white);
  padding: 30px 50px;
  width: 460px;
  min-height: 130px;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  z-index: ${zIndexes.taskWindow};
  button {
    font-size: 0.8em;
  }
  @media screen and (max-width: 1000px) {
    width: 350px;
    min-height: 110px;
    font-size: 0.8rem;
  }
  footer {
    display: flex;
    align-items: center;
  }
`;

const TaskAmount = styled.div`
  font-weight: bold;
  color: var(--color-blue);
  margin-right: auto;
  display: flex;
  align-items: center;
  span {
    color: var(--color-light-blue);
    display: inline-block;
    margin-right: 3px;
  }
  img {
    max-width: 2em;
    margin-right: 0.5em;
  }
`;

const TaskLabel = styled.p`
  margin: 0;
  margin-top: 0.5rem;
  margin-bottom: auto;
  font-size: 0.9em;
  line-height: 1.5em;
  animation: fadeIn 0.2s ease-in-out;
  @keyframes fadeIn {
    from {
      transform: translate(0px, 5px);
      opacity: 0;
    }
  }
`;

const TaskTitle = styled.h2`
  margin: 0;
  color: var(--color-blue);
  font-size: 1.2em;
`;

const NextTaskContainer = styled.div``;

export default TaskWindow;
