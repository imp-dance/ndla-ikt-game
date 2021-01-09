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
import Background from "../design/Background/Background";
import LANToSwitch1 from "../common/Connector/LANtoSwitch1/LANToSwitch1";
import SwitchToDriftPC from "../common/Connector/SwitchToDriftPC/SwitchToDriftPC";
import Switch from "../common/Switch/Switch";
import Server from "../common/Server/Server";
import PC from "../common/PC/PC";
import SwitchToServer from "../common/Connector/SwitchToServer/SwitchToServer";

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [currentTask, setCurrentTask] = useState(1);
  const [assignedNetworks, setAssignedNetworks] = useState<NetworkState>();
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [fadedItems, setFadedItems] = useState<string[]>([
    "server",
    "aksesspunkt",
    "ansatt-tradlost",
    "gjest-tradlost",
    "svitsj1",
    "svitsj2",
    "svitsj3",
    "konsulent-gruppe",
    "ansatt-gruppe",
    "ruter",
    "drift-pc",
  ]);

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
    switch (currentTask) {
      case 1:
        setFadedItems([
          "server",
          "aksesspunkt",
          "ansatt-tradlost",
          "gjest-tradlost",
          "svitsj2",
          "svitsj3",
          "konsulent-gruppe",
          "ansatt-gruppe",
        ]);
        break;
    }
    setCurrentTask(currentTask + 1);
  };

  const goToPrevTask = () => {
    if (currentTask - 1 !== 0) {
      setCurrentTask(currentTask - 1);
    }
  };

  const onConnectorClick = (id: string) => {
    console.log(id);
  };

  /*   const requestFullscreen = () => {
    if (appRef && appRef.current && !document.fullscreenElement) {
      appRef.current.requestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (appRef && appRef.current && document.fullscreenElement !== null) {
      document.exitFullscreen();
    }
  }; */

  return (
    <div className="App" ref={appRef}>
      <Loader images={images} onLoadFinished={() => setLoading(false)} />
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
        disabled={false}
        content={(buildingStyles: React.CSSProperties) => (
          <F>
            <CloudWWW
              buildingStyles={buildingStyles}
              faded={fadedItems.includes("ruter")}
            />
            <Router
              buildingStyles={buildingStyles}
              faded={fadedItems.includes("ruter")}
            />
            <Connector
              input={[true, true, true]}
              onOutput={(a) => console.log(a)}
              buildingStyles={buildingStyles}
              pos={{
                bottom: 58,
                left: 64.2,
              }}
              id="RuterConnector"
              faded={fadedItems.includes("ruter")}
              onClick={onConnectorClick}
            />
            <LANToSwitch1
              input={[false, false, false]}
              output={[false, false, false]}
              faded={fadedItems.includes("ruter")}
              buildingStyles={buildingStyles}
            />
            <Switch
              onConnectorClick={onConnectorClick}
              id={1}
              pos={{
                bottom: 27,
                left: 52.1,
              }}
              buildingStyles={buildingStyles}
              input={{
                topRight: [false, false, false],
                bottomRight: [false, false, false],
                bottomLeft: [false, false, false],
                topLeft: [false, false, false],
              }}
              output={{
                topRight: (output) => console.log(output),
                bottomRight: (output) => console.log(output),
                bottomLeft: (output) => console.log(output),
                topLeft: (output) => console.log(output),
              }}
              faded={fadedItems.includes("svitsj1")}
              activeState={{
                topRight: !fadedItems.includes("ruter"),
                bottomRight: !fadedItems.includes("svitsj2"),
                bottomLeft: !fadedItems.includes("drift-pc"),
                topLeft: !fadedItems.includes("server"),
              }}
            />
            <SwitchToDriftPC
              input={[false, false, false]}
              output={[false, false, false]}
              buildingStyles={buildingStyles}
              faded={fadedItems.includes("drift-pc")}
            />
            <SwitchToServer
              input={[false, false, false]}
              output={[false, false, false]}
              buildingStyles={buildingStyles}
              faded={fadedItems.includes("server")}
            />
            <Connector
              input={[true, true, true]}
              onOutput={(a) => console.log(a)}
              buildingStyles={buildingStyles}
              faded={fadedItems.includes("server")}
              pos={{
                bottom: 33,
                left: 21.2,
              }}
              id="ServerConnector"
              onClick={onConnectorClick}
            />
            <Server
              buildingStyles={buildingStyles}
              pos={{
                bottom: 28,
                left: 3.8,
              }}
              faded={fadedItems.includes("server")}
            />
            <PC
              id={2}
              buildingStyles={buildingStyles}
              faded={fadedItems.includes("drift-pc")}
              pos={{
                bottom: 5,
                left: 26,
              }}
            />
            <Switch
              id={2}
              onConnectorClick={onConnectorClick}
              pos={{
                bottom: 27,
                left: 112,
              }}
              faded={fadedItems.includes("svitsj2")}
              buildingStyles={buildingStyles}
              input={{
                topRight: [false, false, false],
                bottomRight: [false, false, false],
                bottomLeft: [false, false, false],
                topLeft: [false, false, false],
              }}
              output={{
                topRight: (output) => console.log(output),
                bottomRight: (output) => console.log(output),
                bottomLeft: (output) => console.log(output),
                topLeft: (output) => console.log(output),
              }}
            />
            <BottomLineBreaker style={buildingStyles} />
          </F>
        )}
        loading={loading}
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

const BottomLineBreaker = styled.div`
  position: absolute;
  left: 50%;

  width: calc(calc(var(--bWidth) / 100) * 2.5);
  transform: translate(calc(calc(var(--bWidth) / 100) * -7.5), 0px);
  height: 3px;
  bottom: 10px;
  z-index: ${zIndexes.building + 5};
  background: var(--color-light-blue-2);
`;

const BottomLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 40px;
  height: 3px;
  transition: opacity 0.2s ease-in-out;
  background: var(--color-blue);
  z-index: ${zIndexes.building - 1};
`;

export default App;
