import * as React from "react";

import VLAN1 from "../../../assets/symbols/VLAN1_Employee_Network.svg";
import VLAN2 from "../../../assets/symbols/VLAN2_Admin_Network.svg";
import VLAN3 from "../../../assets/symbols/VLAN3_Guest_Network.svg";
import { State as NetworkState } from "../AssignNetworks/AssignNetworks";
import NetworkIcon from "../NetworkIcon/NetworkIcon";
import styled from "styled-components";
import zIndexes from "../../../styles/zIndexes";

export interface IModalProps {
  open: boolean;
  value: APConnection;
  currentID: string;
  onSave: (newValues: APConnection) => void;
  onClose: () => void;
  assignedNetworks?: NetworkState;
}

type APConnection = {
  enabled: [boolean, boolean, boolean];
  networks: [string, string, string];
};

export default function Modal(props: IModalProps) {
  const [connections, setConnections] = React.useState<APConnection>(
    props.value
  );
  const onChange = (index: number, value: any) => {
    const newConnection = { ...props.value };
    if (value.network !== undefined) {
      newConnection.networks[index] = value.network;
    }
    if (value.checked !== undefined) {
      newConnection.enabled[index] = value.checked;
    }
    setConnections(newConnection as APConnection);
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
        {[0, 1, 2].map((value, index) => (
          <ListItem
            key={index}
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
  connections: APConnection;
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

  return (
    <label>
      <input
        type="checkbox"
        checked={connections.enabled[index]}
        onChange={(e) => onChange(index, { checked: e.target.checked })}
      />
      <NetworkIcon src={getIcon(index)} alt="Ikon for nettverk" />
      <strong>VLAN</strong>
      <input
        type="text"
        value={connections.networks[index]}
        onChange={(e) => onChange(index, { network: e.target.value })}
      />{" "}
      - {getLabel(index)}
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
    align-items: center;
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
    }
  }
`;
