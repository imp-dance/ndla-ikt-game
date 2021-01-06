import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getTask, Task } from "../../../data/tasks";
import zIndexes from "../../../styles/zIndexes";
import Button from "../Button/Button";

type Props = {
  currentTask: number;
  onNextTask: () => void;
  onPrevTask: () => void;
  taskCompleted: boolean;
};

const TaskWindow: React.FC<Props> = ({
  currentTask: taskNumber,
  onNextTask,
  onPrevTask,
  taskCompleted,
}) => {
  const [task, setTask] = useState<Task>();

  useEffect(() => {
    setTask(getTask(taskNumber));
  }, [taskNumber]);

  if (!task) {
    return null;
  }
  return (
    <Container id="TASK_WINDOW">
      <TaskTitle>{task.title}</TaskTitle>
      <TaskLabel key={`${task.number}-${taskCompleted}`}>
        {taskCompleted ? task.label.completed : task.label.initial}
      </TaskLabel>

      <footer>
        <TaskAmount>
          <span>{task.number} /</span> 6
        </TaskAmount>
        <NextTaskContainer>
          <Button disabled={!taskCompleted} onClick={onNextTask}>
            Neste oppgave
          </Button>
        </NextTaskContainer>
      </footer>
    </Container>
  );
};

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
  span {
    color: var(--color-light-blue);
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
