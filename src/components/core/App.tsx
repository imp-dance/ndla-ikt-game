import React, { useEffect, useState, Fragment as F, useRef } from "react";
import AssignNetworks from "../common/AssignNetworks/AssignNetworks";
import TaskWindow from "../common/TaskWindow/TaskWindow";
import { State as NetworkState } from "../common/AssignNetworks/AssignNetworks";
import Router from "../common/Router/Router";
import Building from "../design/Building/Building";
import { images } from "../../data/images";
import Loader from "../common/Loader/Loader";
import CloudWWW from "../common/CloudWWW/CloudWWW";
import styled from "styled-components";
import zIndexes from "../../styles/zIndexes";
import Connector from "../common/Connector/Connector";
import DisplayWires from "../common/DisplayWires/DisplayWires";
import Background from "../design/Background/Background";
import LANToSwitch1 from "../common/Connector/LANtoSwitch1/LANToSwitch1";

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  const [currentTask, setCurrentTask] = useState(1);
  const [assignedNetworks, setAssignedNetworks] = useState<NetworkState>();
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  // Task 1
  useEffect(() => {
    if (currentTask === 1) {
      if (
        assignedNetworks?.admin &&
        assignedNetworks?.ansatt &&
        assignedNetworks?.gjest
      ) {
        completeTask(1);
      } else {
        unCompleteTask(1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assignedNetworks]);

  const completeTask = (taskNumber: number) => {
    if (!completedTasks.includes(taskNumber)) {
      setCompletedTasks([...completedTasks, taskNumber]);
    }
  };

  const unCompleteTask = (taskNumber: number) => {
    if (completedTasks.includes(taskNumber)) {
      setCompletedTasks(completedTasks.filter((tn) => tn !== taskNumber));
    }
  };

  const goToNextTask = () => {
    setCurrentTask(currentTask + 1);
  };

  const goToPrevTask = () => {
    if (currentTask - 1 !== 0) {
      setCurrentTask(currentTask - 1);
    }
  };

  /*   const requestFullscreen = () => {
    if (appRef && appRef.current && !document.fullscreenElement) {
      appRef.current.requestFullscreen();
    }
  };

  const exitFullscreen = () => {
    console.log(document.fullscreenElement);
    if (appRef && appRef.current && document.fullscreenElement !== null) {
      document.exitFullscreen();
    }
  }; */

  return (
    <div className="App" ref={appRef}>
      <Loader images={images} />
      <Background disabled={!completedTasks.includes(1) || currentTask === 1} />
      <AssignNetworks
        onChange={setAssignedNetworks}
        disabled={currentTask !== 1}
      />
      <TaskWindow
        currentTask={currentTask}
        onNextTask={goToNextTask}
        onPrevTask={goToPrevTask}
        taskCompleted={completedTasks.includes(currentTask)}
      />
      <Building
        disabled={!completedTasks.includes(1) || currentTask === 1}
        content={(buildingStyles: React.CSSProperties) => (
          <F>
            <CloudWWW buildingStyles={buildingStyles} />
            <Router buildingStyles={buildingStyles} />
            <Connector
              input={[true, true, true]}
              onOutput={(a) => console.log(a)}
              buildingStyles={buildingStyles}
              pos={{
                bottom: 56,
                left: 63.7,
              }}
            />
            <F>
              {/* Wires from */}{" "}
              <LANToSwitch1 buildingStyles={buildingStyles} />
            </F>
          </F>
        )}
      />
      <BottomLine
        style={{
          opacity:
            !completedTasks.includes(1) || currentTask === 1 ? "0.6" : "1",
        }}
      />
    </div>
  );
}

const BottomLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 40px;
  height: 3px;
  transition: opacity 0.2s ease-in-out;
  background: var(--color-blue);
  z-index: ${zIndexes.building + 1};
`;

export default App;
