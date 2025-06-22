import { StatusContainer, StatusInfo, StatusTitle } from "./style";

const Status = ({ total, inTransit, delivered }) => {
  return (
    <StatusContainer>
      <StatusTitle>Estado General</StatusTitle>
      <StatusInfo>Número total de guías activas: <span>{total}</span></StatusInfo>
      <StatusInfo>Guías en tránsito: <span>{inTransit}</span></StatusInfo>
      <StatusInfo>Guías entregadas: <span>{delivered}</span></StatusInfo>
    </StatusContainer>
  );
};

export default Status;
