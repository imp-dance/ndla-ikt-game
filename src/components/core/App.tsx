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
import SwitchToSwitch from "../common/Connector/SwitchToSwitch/SwitchToSwitch";
import Modal from "../common/Modal/Modal";
import { Connection } from "../../types/common";

type ConnectionState = {
  [key: string]:
    | [boolean, boolean, boolean]
    | {
        topRight?: [boolean, boolean, boolean];
        bottomRight?: [boolean, boolean, boolean];
        bottomLeft: [boolean, boolean, boolean];
        topLeft: [boolean, boolean, boolean];
      };
};

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  const [connectionState, setConnectionState] = useState<ConnectionState>({
    server: [false, false, false],
    aksesspunkt: [false, false, false],
    "ansatt-tradlost": [false, false, false],
    "gjest-tradlost": [false, false, false],
    svitsj1: {
      topRight: [false, false, false],
      bottomRight: [false, false, false],
      bottomLeft: [false, false, false],
      topLeft: [false, false, false],
    },
    svitsj2: {
      topRight: [false, false, false],
      bottomRight: [false, false, false],
      bottomLeft: [false, false, false],
      topLeft: [false, false, false],
    },
    svitsj3: {
      bottomLeft: [false, false, false],
      topLeft: [false, false, false],
    },
    "konsulent-gruppe": [false, false, false],
    "ansatt-gruppe": [false, false, false],
    ruter: [false, false, false],
    "drift-pc": [false, false, false],
  });
  const [loading, setLoading] = useState(true);
  const [currentTask, setCurrentTask] = useState(1);
  const [assignedNetworks, setAssignedNetworks] = useState<NetworkState>();
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalID, setModalID] = useState<string>("");
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

  const updateConnection = (id: string, values: Connection) => {
    // id: svitsj1.topLeft | konsulent-gruppe | etc...
    const isSwitch = id.startsWith("svitsj");
    const newState = { ...connectionState };
    if (!isSwitch) {
      (newState as any)[id] = values;
    } else {
      const [realId, partOfSwitch] = [id.split(".")[0], id.split(".")[1]];
      (newState as any)[realId][partOfSwitch] = values;
    }
    setConnectionState(newState);
  };

  const getConnection = (id: string) => {
    const isSwitch = id.startsWith("svitsj");
    if (!isSwitch) {
      return (connectionState as any)[id];
    } else {
      const [realId, partOfSwitch] = [id.split(".")[0], id.split(".")[1]];
      const connection = (connectionState as any)[realId][partOfSwitch];
      return connection;
    }
  };

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

  // Task 2
  useEffect(() => {
    if (currentTask === 2) {
      // LAN -> Switch 1
      const condition1 = arraysEqual(
        [false, true, false],
        connectionState.ruter as any[]
      );
      // Switch 1 -> LAN
      const condition2 = arraysEqual(
        [false, true, false],
        (connectionState["svitsj1"] as any).topRight as any[]
      );
      // Switch 1 -> DriftPC
      const condition3 = arraysEqual(
        [false, true, false],
        (connectionState["svitsj1"] as any).bottomLeft as any[]
      );
      if (condition1 && condition2 && condition3) {
        completeTask(2);
      } else {
        unCompleteTask(2);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTask, connectionState]);

  // Faded items
  useEffect(() => {
    if (currentTask === 2) {
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
    }
    if (currentTask === 3) {
      setFadedItems([
        "server",
        "aksesspunkt",
        "ansatt-tradlost",
        "gjest-tradlost",
        "svitsj3",
        "konsulent-gruppe",
        "ansatt-gruppe",
      ]);
    }
  }, [currentTask]);

  // Dotted / Active lines
  const getLineActive = (id: string): boolean => {
    if (currentTask === 2) {
      const ruterCondition = arraysEqual(
        [false, true, false],
        connectionState.ruter as any[]
      );
      const switchCondition = arraysEqual(
        [false, true, false],
        (connectionState["svitsj1"] as any).topRight as any[]
      );
      const driftCondition = arraysEqual(
        [false, true, false],
        (connectionState["svitsj1"] as any).bottomLeft as any[]
      );
      if (id === "ruter") {
        return ruterCondition;
      }
      if (id === "svitsj1.topRight") {
        return ruterCondition && switchCondition;
      }
      if (id === "drift-pc") {
        return ruterCondition && switchCondition && driftCondition;
      }
    }
    if (currentTask === 3) {
      const ruterCondition = arraysEqual(
        [true, true, false],
        connectionState.ruter as any[]
      );
      const switch1Condition = arraysEqual(
        [true, true, false],
        (connectionState["svitsj1"] as any).topRight as any[]
      );
      if (id === "ruter") {
        return ruterCondition;
      }
      if (id === "svitsj1.topRight") {
        return ruterCondition && switch1Condition;
      }
      if (id === "svitsj1.bottomRight") {
        return ruterCondition && switch1Condition;
      }
    }
    return false;
  };

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

  const onConnectorClick = (id: string) => {
    setModalID(id);
    setModalOpen(true);
  };

  const onModalSave = (newValues: Connection) => {
    updateConnection(modalID, newValues);
    setModalOpen(false);
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
            <F>
              {" "}
              {/* Left side building */}
              <CloudWWW
                buildingStyles={buildingStyles}
                faded={fadedItems.includes("ruter")}
              />
              <Router
                buildingStyles={buildingStyles}
                faded={fadedItems.includes("ruter")}
              />
              <Connector
                buildingStyles={buildingStyles}
                pos={{
                  bottom: 58,
                  left: 64.2,
                }}
                id="ruter"
                faded={fadedItems.includes("ruter")}
                onClick={onConnectorClick}
              />
              <LANToSwitch1
                input={getConnection("ruter")}
                output={getConnection("svitsj1.topRight")}
                faded={fadedItems.includes("ruter")}
                buildingStyles={buildingStyles}
                active={[
                  getLineActive("ruter"),
                  getLineActive("svitsj1.topRight"),
                ]}
              />
              <Switch
                onConnectorClick={onConnectorClick}
                id={1}
                pos={{
                  bottom: 27,
                  left: 52.1,
                }}
                buildingStyles={buildingStyles}
                faded={fadedItems.includes("svitsj1")}
                activeState={{
                  topRight: !fadedItems.includes("ruter"),
                  bottomRight: !fadedItems.includes("svitsj2"),
                  bottomLeft: !fadedItems.includes("drift-pc"),
                  topLeft: !fadedItems.includes("server"),
                }}
              />
              <SwitchToDriftPC
                input={getConnection("svitsj1.bottomLeft")}
                output={getConnection("svitsj1.bottomLeft")}
                buildingStyles={buildingStyles}
                faded={fadedItems.includes("drift-pc")}
                active={getLineActive("drift-pc")}
              />
              <SwitchToServer
                input={[false, false, false]}
                output={[false, false, false]}
                buildingStyles={buildingStyles}
                faded={fadedItems.includes("server")}
              />
              <Connector
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
            </F>
            <F>
              {" "}
              {/* Right side building */}
              <SwitchToSwitch
                input={[false, false, false]}
                output={[false, false, false]}
                faded={fadedItems.includes("svitsj2")}
                active={[getLineActive("svitsj1.bottomRight"), getLineActive("svitsj2.topLeft")]}
                buildingStyles={buildingStyles}
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
              />
            </F>
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
      {modalID && getConnection(modalID) && (
        <Modal
          open={modalOpen}
          assignedNetworks={assignedNetworks}
          onSave={onModalSave}
          onClose={() => setModalOpen(false)}
          value={getConnection(modalID)}
          currentID={modalID}
        />
      )}
    </div>
  );
}

const BottomLineBreaker = styled.div`
  position: absolute;
  left: 50%;

  width: calc(calc(var(--bWidth) / 100) * 2.45);
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

function arraysEqual(a: any[], b: any[]) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export default App;
