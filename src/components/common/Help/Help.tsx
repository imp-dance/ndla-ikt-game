import React from "react";
import styled from "styled-components";
import ConnectorIMG from "../../../assets/symbols/Connector.svg";
import WifiIMG from "../../../assets/symbols/Wifi_Connection.svg";
import CloseIMG from "../../../assets/symbols/close.svg";
import NextIMG from "../../../assets/symbols/next.svg";
import PreviousIMG from "../../../assets/symbols/previous.svg";
import VLANex1 from "../../../assets/examples/VLAN_box_1.svg";
import VLANex2 from "../../../assets/examples/VLAN_box_2.svg";
import WiresEx1 from "../../../assets/examples/wire_connector_1.svg";
import WiresEx2 from "../../../assets/examples/wire_connector_2.svg";
import WiresEx3 from "../../../assets/examples/wire_connector_3.svg";

type Props = {
  onClose: () => void;
  isNN: boolean;
};

const Help: React.FC<Props> = ({ onClose, isNN }) => {
  const [pageNum, setPageNum] = React.useState(1);
  const nextPage = () => {
    if (pageNum === 2) {
      return;
    }
    setPageNum(2);
  };
  const prevPage = () => {
    if (pageNum === 1) {
      return;
    }
    setPageNum(1);
  };
  return (
    <Container>
      <CloseButton onClick={onClose}>
        <img src={CloseIMG} alt="Lukk hjelp" />
      </CloseButton>
      <Main>
        <h2>Hjelp</h2>
        {pageNum === 1 && (
          <>
            {isNN ? (
              <>
                <p>
                  VLAN er ein teknikk for å{" "}
                  <strong>
                    dela opp eit fysisk nettverk i fleire logiske nettverk
                  </strong>
                  . Dette blir brukt for å kontrollera kva einingane skal få
                  tilgang til i nettverket .
                </p>
                <p>
                  Vi har allerde sett opp tre tenkte nettverk:{" "}
                  <strong>Ansatt-, Drift- og Gjestenettverk</strong>.<br />
                  Når nummerering er tildelt vil all konfigurering gjerast ved å
                  klikka på følgjande aktive ikon:
                </p>
                <Flex>
                  <div>Kablet nettverk: </div>
                  <img src={ConnectorIMG} alt="Kablet nettverk symbol" />
                  <div>Trådlaust nettverk: </div>
                  <img src={WifiIMG} alt="Trådløst nettverk symbol" />
                </Flex>
                <p>
                  Kvart ikon vil gi valmoglegheit for kva nettverk du ønsker å
                  nytta for denne porten.
                </p>
              </>
            ) : (
              <>
                <p>
                  VLAN er en teknikk for å{" "}
                  <strong>
                    dele opp et fysisk nettverk i flere logiske nettverk
                  </strong>
                  . Dette brukes for å kontrollere hva enhetene skal få tilgang
                  til i nettverket .
                </p>
                <p>
                  Vi har allerde satt opp tre tenkte nettverk:{" "}
                  <strong>Ansatt-, Drift- og Gjestnettverk</strong>.<br />
                  Når nummerering er tildelt vil all konfigurering gjøres ved å
                  klikke på følgende aktive ikoner:
                </p>
                <Flex>
                  <div>Kablet nettverk: </div>
                  <img src={ConnectorIMG} alt="Kablet nettverk symbol" />
                  <div>Trådløst nettverk: </div>
                  <img src={WifiIMG} alt="Trådløst nettverk symbol" />
                </Flex>
                <p>
                  Hvert ikon vil gi valgmulighet for hvilket nettverk du ønsker
                  å benytte for denne porten.
                </p>
              </>
            )}
            <img
              src={VLANex1}
              alt="Eksempel"
              style={{ marginBottom: "var(--margin-s)", maxWidth: "250px" }}
            />
          </>
        )}
        {pageNum === 2 && (
          <>
            <p>
              <strong>{isNN ? "Sambandslogikk" : "Forbindelseslogikk"}</strong>
            </p>
            <Flex>
              {isNN ? "Døme" : "Eksempel"} under viser for drift nettverk:{" "}
              <img src={VLANex2} alt="Eksempel" />{" "}
            </Flex>
            <Flex className="konfimages">
              <div>
                <strong>Ingen konfigurasjon</strong>
                <img src={WiresEx1} alt="Eksempel" />
              </div>
              <div>
                <strong>{isNN ? "Ei" : "En"} side konfigurert</strong>
                <img src={WiresEx2} alt="Eksempel" />
              </div>
              <div>
                <strong>
                  Begge sider {isNN ? "konfigurerte" : "konfigurert"}
                </strong>
                <img src={WiresEx3} alt="Eksempel" />
              </div>
            </Flex>
            {isNN ? (
              <>
                <p>
                  <strong>Linjetypar</strong>
                </p>
                <p>
                  Vi nyttar <strong>stipla linje</strong> for alle samband som{" "}
                  <strong>IKKJE er konfigurerte riktig</strong>.<br />
                  Vi nyttar <strong>heltrukket linje</strong> for alle samband
                  som er konfigurerte riktig.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>Linjetyper</strong>
                </p>
                <p>
                  Vi benytter <strong>stiplet linje</strong> for alle
                  forbindelser som <strong>IKKE er konfigurert riktig</strong>.
                  <br />
                  Vi benytter <strong>heltrukket linje</strong> for alle
                  forbindelser som er konfigurert riktig.
                </p>
              </>
            )}
          </>
        )}
        <PageNum>
          <button onClick={prevPage} disabled={pageNum === 1}>
            <img src={PreviousIMG} alt="Forrige side" />
          </button>
          <span>{pageNum} / </span> 2
          <button onClick={nextPage} disabled={pageNum === 2}>
            <img src={NextIMG} alt="Neste side" />
          </button>
        </PageNum>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #deebf6f2;
  z-index: 200;
`;

const PageNum = styled.footer`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2em;
  span,
  button:disabled {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    margin-right: var(--margin-xs);
  }
  button {
    background: none;
    cursor: pointer;
    border: none;
    padding: 0;
    margin: 0 var(--margin-m);
    img {
      width: 2.2em;
    }
  }
`;

const Main = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 1.2rem;
  @media (max-height: 700px) and (max-width: 770px) {
    transform: translate(-50%, 0px);
    top: var(--margin-xl);
    font-size: 1rem;
    max-width: 650px;
  }
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  color: var(--color-blue);
  max-height: calc(100vh - calc(var(--margin-l) * 2));
  padding-bottom: calc(var(--margin-l) * 2);
  overflow-y: auto;
  h2 {
    font-size: 3rem;
    text-align: center;
  }
  p {
    margin-bottom: var(--margin-l);
    line-height: 1.5em;
  }
  .konfimages {
    margin: var(--margin-xl) 0;
    img {
      margin-top: var(--margin-s);
    }
  }
`;

const Flex = styled.div`
  display: flex;
  gap: var(--margin-m);
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: var(--margin-m);
  right: var(--margin-m);
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  cursor: pointer;
  img {
    max-width: 100%;
  }
  @media screen and (min-width: 800px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

export default Help;
