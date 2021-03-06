import React from "react";
import styled from "styled-components";
import ConnectorIMG from "../../../assets/symbols/Connector.svg";
import WifiIMG from "../../../assets/symbols/Wifi_Connection.svg";
import CloseIMG from "../../../assets/symbols/close.svg";
import NextIMG from "../../../assets/symbols/next.svg";
import PreviousIMG from "../../../assets/symbols/previous.svg";
import VLANex1NN from "../../../assets/examples/VLAN_box_Nynorsk.svg";
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
                    dele opp eit fysisk nettverk i fleire logiske nettverk
                  </strong>
                  . Vi bruker VLAN for å kontrollere kva einingane skal få
                  tilgang til i nettverket.
                </p>
                <p>
                  Vi har satt opp tre tenkte logiske nettverk:{" "}
                  <strong>
                    Tilsett nettverk, Drift nettverk og Gjest nettverk
                  </strong>
                  .<br />
                  Når du har nummerert nettverka, konfigurerer du dei ved å
                  klikke på desse aktive ikona:
                </p>
                <Flex>
                  <div>Kabla nettverk: </div>
                  <img src={ConnectorIMG} alt="Kablet nettverk symbol" />
                  <div>Trådlaust nettverk: </div>
                  <img src={WifiIMG} alt="Trådløst nettverk symbol" />
                </Flex>
                <p>
                  Begge ikona let deg velje nettverket du vil bruke for denne
                  porten.
                </p>
              </>
            ) : (
              <>
                <p>
                  VLAN er en teknikk for å{" "}
                  <strong>
                    dele opp et fysisk nettverk i flere logiske nettverk
                  </strong>
                  . Vi bruker VLAN for å kontrollere hva enhetene skal få
                  tilgang til i nettverket.
                </p>
                <p>
                  Vi har satt opp tre tenkte logiske nettverk:{" "}
                  <strong>Ansatt nettverk, Drift nettverk</strong> og{" "}
                  <strong> Gjest nettverk</strong>
                  .<br />
                  Når du har nummerert nettverkene, konfigurerer du dem ved å
                  klikke på følgende aktive ikoner:
                </p>
                <Flex>
                  <div>Kablet nettverk: </div>
                  <img src={ConnectorIMG} alt="Kablet nettverk symbol" />
                  <div>Trådløst nettverk: </div>
                  <img src={WifiIMG} alt="Trådløst nettverk symbol" />
                </Flex>
                <p>
                  Begge ikonene lar deg velge nettverket du vil bruke for denne
                  porten.
                </p>
              </>
            )}
            <img
              src={isNN ? VLANex1NN : VLANex1}
              alt="Eksempel"
              style={{ marginBottom: "var(--margin-s)", maxWidth: "250px" }}
            />
          </>
        )}
        {pageNum === 2 && (
          <>
            <p>
              <strong>Konfigureringsstatus</strong>
            </p>
            <Flex>
              {isNN ? "Døma" : "Eksemplene"} under viser for Drift nettverk:{" "}
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
                  Vi bruker <strong>stipla linje</strong> for alle sambanda som{" "}
                  <strong>IKKJE er konfigurerte rett</strong>.<br />
                  Vi nyttar <strong>heltrukket linje</strong> for alle sambanda
                  som er konfigurerte rett.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>Linjetyper</strong>
                </p>
                <p>
                  Vi bruker <strong>stiplet linje</strong> for alle forbindelser
                  som <strong>IKKE er konfigurert riktig</strong>.
                  <br />
                  Vi benytter <strong>heltrukket linje</strong> for alle
                  forbindelser som er <strong>konfigurert riktig</strong>.
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
  min-height: 640px;
`;

const PageNum = styled.footer`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2em;
  margin-top: auto;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 640px;
  @media (max-height: 700px) and (max-width: 770px) {
    transform: translate(-50%, 0px);
    top: var(--margin-xl);
    font-size: 1rem;
    max-width: 650px;
    min-height: 580px !important;
    h2 {
      font-size: 2rem !important;
    }
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
