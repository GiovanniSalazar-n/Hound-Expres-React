import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Status from "./components/Status";
import Form from "./components/Form";
import Guide from "./components/Guide";
import Modal from "./components/Modal";
import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import GlobalStyles from "./theme/GlobalStyles";

function App() {
  const [guides, setGuides] = useState([]);
  const [history, setHistory] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState(null);

  
  const [total, setTotal] = useState(0);
  const [inTransit, setInTransit] = useState(0);
  const [delivered, setDelivered] = useState(0);

  useEffect(() => {
    const t = guides.length;
    const transit = guides.filter(g => g.state === "En tránsito").length;
    const delivered = guides.filter(g => g.state === "Entregado").length;
    setTotal(t);
    setInTransit(transit);
    setDelivered(delivered);
  }, [guides]);

  const addGuide = (guide) => {
    setGuides(prev => [...prev, guide]);
    setHistory(prev => ({
      ...prev,
      [guide.number]: [{ estado: guide.state, fecha: guide.date }]
    }));
  };

const updateState = (guideNumber) => {
  let newState = "";
  let updatedDate = "";

  const updatedGuides = guides.map((guide) => {
    if (guide.number === guideNumber) {
      if (guide.state === "Pendiente") {
        newState = "En tránsito";
      } else if (guide.state === "En tránsito") {
        newState = "Entregado";
      } else {
        return guide; 
      }

      updatedDate = guide.date;

      return {
        ...guide,
        state: newState
      };
    }
    return guide;
  });

  if (newState) {
    setGuides(updatedGuides);

  
    setHistory((prev) => {
      const prevHist = prev[guideNumber] || [];
      return {
        ...prev,
        [guideNumber]: [
          ...prevHist,
          { estado: newState, fecha: updatedDate }
        ]
      };
    });
  }
};


  const openModal = (guideNumber) => {
    setSelectedGuide(guideNumber);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedGuide(null);
  };

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header />
      <main>
        <Form onAddGuide={addGuide} />
        <Status total={total} inTransit={inTransit} delivered={delivered} />
        <Guide
          guides={guides}
          onUpdate={updateState}
          onViewHistory={openModal}
        />
      </main>
      <Footer />
      {modalOpen && (
        <Modal
          onClose={closeModal}
          history={history[selectedGuide] || []}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
