import * as React from "react";

import { State as NetworkState } from "../AssignNetworks/AssignNetworks";
import styled from "styled-components";
import zIndexes from "../../../styles/zIndexes";

export interface IModalProps {
  open: boolean;
  value: APConnection;
  currentID: string;
  onSave: (newValues: APConnection) => void;
  onClose: () => void;
  assignedNetworks?: NetworkState;
  isNN?: boolean;
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
        <h3>Aksesspunkt konfigurasjon</h3>
        <br />
        <table>
          <thead>
            <tr>
              <th>Aktiver</th>
              <th>Nettverksnavn / SSID</th>
              <th>VLAN</th>
            </tr>
          </thead>
          <tbody>
            {[2, 1, 0].map((value) => (
              <ListItem
                key={value}
                index={value}
                connections={connections}
                assignedNetworks={props.assignedNetworks}
                onChange={onChange}
                isNN={props.isNN}
              />
            ))}
          </tbody>
        </table>
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
  isNN?: boolean;
}

const ListItem: React.FC<IListItemProps> = ({
  index,
  connections,
  assignedNetworks,
  onChange,
  isNN,
}) => {
  const getLabel = (index: number) => {
    switch (index) {
      case 0:
        return isNN ? "Tilsett trådlaust" : "Ansatt trådløst";
      case 1:
        return `Drift ${isNN ? "trådlaust" : "trådløst"}`;
      case 2:
        return `Gjest ${isNN ? "trådlaust" : "trådløst"}`;
    }
  };

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={connections.enabled[index]}
          onChange={(e) => onChange(index, { checked: e.target.checked })}
        />
      </td>
      <td>
        <strong
          onClick={() =>
            onChange(index, { checked: !connections.enabled[index] })
          }
          style={{
            opacity: connections.enabled[index] ? "1" : "0.6",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          {getLabel(index)}
        </strong>
      </td>
      <td>
        <input
          type="text"
          value={connections.networks[index]}
          style={{ opacity: connections.enabled[index] ? "1" : "0.6" }}
          onChange={(e) => onChange(index, { network: e.target.value })}
        />
      </td>
    </tr>
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
  h3 {
    margin: 0;
    font-size: 1.4em;
  }
  label {
    display: flex;
    align-items: center;
    margin-bottom: var(--margin-xs);
    width: 100%;
  }
  input[type="checkbox"] {
    margin-right: var(--margin-s);
    margin: 0 auto;
  }
  input[type="text"] {
    max-width: 2ch;
    border: 2px solid var(--color-light-blue);
    border-radius: 5px;
    font-weight: bold;
    color: var(--color-blue);
    text-align: center;
  }
  td,
  th {
    padding: 3px;
    text-align: center;
  }
`;
