import React, { useEffect, useState } from "react";
import styled from "styled-components";
import zIndexes from "../../../styles/zIndexes";
import VLAN1 from "../../../assets/symbols/VLAN1_Employee_Network.svg";
import VLAN2 from "../../../assets/symbols/VLAN2_Admin_Network.svg";
import VLAN3 from "../../../assets/symbols/VLAN3_Guest_Network.svg";
import NetworkIcon from "../NetworkIcon/NetworkIcon";

type Props = {
  onChange: (newVal: State) => void;
  disabled?: boolean;
  faded?: boolean;
  isNN?: boolean;
};

export type State = {
  admin: string;
  ansatt: string;
  gjest: string;
};

type StateKey = "admin" | "ansatt" | "gjest";

const AssignNetworks: React.FC<Props> = ({
  onChange: onValuesUpdate,
  disabled,
  faded,
  isNN,
}) => {
  const [state, setState] = useState<State>({
    admin: "",
    ansatt: "",
    gjest: "",
  });

  const validateNumber = (input: string) => {
    const validCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let isValid = true;
    if (input.length >= 3) {
      isValid = false;
    }
    for (let i = 0; i < input.length; i++) {
      if (!validCharacters.includes(input.charAt(i))) {
        isValid = false;
      }
    }
    return isValid;
  };

  const onChange = (key: StateKey, value: string) => {
    if (validateNumber(value)) {
      setState({ ...state, [key]: value });
    }
  };

  useEffect(() => {
    if (
      !multipleSame("ansatt") &&
      !multipleSame("admin") &&
      !multipleSame("gjest")
    ) {
      onValuesUpdate(state);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const multipleSame = (key: StateKey) => {
    const value = state[key];
    if (!value) {
      return false;
    }
    let multipleSame = false;
    const allOtherKeys = ["admin", "ansatt", "gjest"].filter(
      (item) => item !== key
    );
    allOtherKeys.forEach((otherKey: any) => {
      if (state[otherKey as StateKey] === value) {
        multipleSame = true;
      }
    });
    return multipleSame;
  };

  const classname = faded ? "faded" : "";

  return (
    <Container id="ASSIGN_NETWORKS" className={classname}>
      <ul>
        <li>
          <NetworkIcon src={VLAN1} alt="VLAN 1 Ikon" />
          <strong>VLAN</strong>
          <input
            type="text"
            value={state.ansatt}
            onChange={(e) => onChange("ansatt", e.target.value)}
            disabled={disabled}
            className={multipleSame("ansatt") ? "wrong" : ""}
          />
          - {isNN ? "Tilsett" : "Ansatt"} nettverk
        </li>
        <li>
          <NetworkIcon src={VLAN2} alt="VLAN 2 Ikon" />
          <strong>VLAN</strong>
          <input
            type="text"
            value={state.admin}
            onChange={(e) => onChange("admin", e.target.value)}
            disabled={disabled}
            className={multipleSame("admin") ? "wrong" : ""}
          />
          - Drift nettverk
        </li>
        <li>
          <NetworkIcon src={VLAN3} alt="VLAN 3 Ikon" />
          <strong>VLAN</strong>
          <input
            type="text"
            value={state.gjest}
            onChange={(e) => onChange("gjest", e.target.value)}
            disabled={disabled}
            className={multipleSame("gjest") ? "wrong" : ""}
          />
          - Gjestenettverk
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  border: 3px solid var(--color-blue);
  background: var(--color-white);
  padding: 15px;
  position: absolute;
  top: 5vmin;
  left: 5vmin;
  border-radius: 16px;
  font-size: 0.8rem;
  @media screen and (max-width: 1600px) {
    border-width: 2px;
  }

  z-index: ${zIndexes.assignNetwork};
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: var(--margin-xxs);
      input {
        max-width: 2ch;
        border: 2px solid var(--color-light-blue);
        border-radius: 5px;
        margin: 0 0.5rem;
        font-weight: bold;
        color: var(--color-blue);
        text-align: center;
        &:disabled {
          opacity: 0.8;
          cursor: not-allowed;
          user-select: none;
        }
        &.wrong {
          border-color: var(--color-danger);
          &:focus {
            border-color: var(--color-danger);
            outline: none;
          }
        }
      }
    }
  }
`;

export default AssignNetworks;
