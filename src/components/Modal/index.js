
import { ModalContent, Overlay, Table } from "./style";

const Modal = ({ onClose, history }) => {
  const handleClickOutside = (e) => {
    if (e.target.classList.contains("overlay")) {
      onClose();
    }
  };

  return (
    <Overlay className="overlay" onClick={handleClickOutside}>
      <ModalContent>
        <h3>Historial de Cambios</h3>
        <Table>
          <thead>
            <tr>
              <th>Estado</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, index) => (
              <tr key={index}>
                <td>{entry.estado}</td>
                <td>{entry.fecha}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ModalContent>
    </Overlay>
  );
};

export default Modal;