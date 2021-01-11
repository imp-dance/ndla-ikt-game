import * as React from "react";

import VLAN1 from "../../../assets/symbols/VLAN1_Employee_Network.svg";
import VLAN2 from "../../../assets/symbols/VLAN2_Admin_Network.svg";
import VLAN3 from "../../../assets/symbols/VLAN3_Guest_Network.svg";
import { State as NetworkState } from "../../common/AssignNetworks/AssignNetworks";
import { Connection } from "../../../types/common";
import NetworkIcon from "../NetworkIcon/NetworkIcon";
import styled from "styled-components";
import zIndexes from "../../../styles/zIndexes";

export interface IModalProps {
  open: boolean;
  value: Connection;
  currentID: string;
  onSave: (newValues: Connection) => void;
  onClose: () => void;
  assignedNetworks?: NetworkState;
}

export default function Modal(props: IModalProps) {
  const [connections, setConnections] = React.useState<Connection>(props.value);
  const onChange = (index: number, value: string) => {
    const newConnections: any = connections.slice();
    newConnections[index] = value;
    setConnections(newConnections as Connection);
  };

  React.useEffect(() => {
    setConnections(props.value);
  }, [props.value]);

  if (!props.open) {
    return null;
  }
  return props.assignedNetworks ? (
    <>
      <ModalBackdrop />
      <ModalContainer>
        {connections.map((value, index) => (
          <ListItem
            index={index}
            connections={connections}
            assignedNetworks={props.assignedNetworks}
            onChange={onChange}
          />
        ))}
        <ButtonContainer>
          <button onClick={props.onClose}>Avbryt</button>
          <button onClick={() => props.onSave(connections)}>OK</button>
        </ButtonContainer>
      </ModalContainer>
    </>
  ) : null;
}

interface IListItemProps {
  index: number;
  assignedNetworks?: NetworkState;
  connections: Connection;
  onChange: (index: number, value: any) => void;
}

const ListItem: React.FC<IListItemProps> = ({
  index,
  connections,
  assignedNetworks,
  onChange,
}) => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return VLAN1;
      case 1:
        return VLAN2;
      case 2:
        return VLAN3;
    }
  };
  const getLabel = (index: number) => {
    switch (index) {
      case 0:
        return "Ansatt nettverk";
      case 1:
        return "Drift nettverk";
      case 2:
        return "Gjestenettverk";
    }
  };
  const key = index === 0 ? "ansatt" : index === 1 ? "admin" : "gjest";
  return (
    <label>
      <input
        type="checkbox"
        checked={connections[index]}
        onChange={(e) => onChange(index, e.target.checked)}
      />
      <NetworkIcon src={getIcon(index)} alt="Ikon for nettverk" />
      <strong>VLAN</strong>
      <input
        type="text"
        value={assignedNetworks?.[key] ?? "1"}
        readOnly
      /> - {getLabel(index)}
    </label>
  );
};

const ButtonContainer = styled.div`
  padding: var(--padding-l);
  padding-bottom: 0;
  text-align: center;
  > button {
    padding: var(--padding-s) var(--padding-xl);
    border-radius: 20px;
    font-weight: bold;
    background: var(--color-blue);
    border: 2px solid var(--color-blue);
    color: #fff;
    cursor: pointer;
    + button {
      margin-left: var(--margin-s);
    }
    &:first-child {
      background: #fff;
      color: var(--color-blue);
    }
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #deebf6;
  opacity: 0.7;
  z-index: ${zIndexes.modal - 1};
`;

const ModalContainer = styled.div`
  position: absolute;
  padding: var(--padding-xxl);
  background: #fff;
  z-index: ${zIndexes.modal};
  border: 2px solid var(--color-blue);
  border-radius: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  color: var(--color-blue);
  label {
    display: flex;
    cursor: pointer;
    align-items: center;
    user-select: none;
    margin-bottom: var(--margin-xs);
    input[type="checkbox"] {
      margin-right: var(--margin-s);
    }
    input[type="text"] {
      max-width: 2ch;
      border: 2px solid var(--color-light-blue);
      border-radius: 5px;
      margin: 0 0.5rem;
      font-weight: bold;
      color: var(--color-blue);
      text-align: center;
      user-select: none;
      pointer-events: none;
    }
  }
`;
