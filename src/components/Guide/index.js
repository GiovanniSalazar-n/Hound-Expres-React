import {
  GuideTable,
  GuideHeader,
  GuideRow,
  GuideData,
  GuideBtn
} from "./style";

const Guide = ({ guides, onUpdate, onViewHistory }) => {
  return (
    <section>
      <h2>Lista de Guías</h2>
      <GuideTable>
        <thead>
          <GuideRow>
            <GuideHeader>Número</GuideHeader>
            <GuideHeader>Estado</GuideHeader>
            <GuideHeader>Origen</GuideHeader>
            <GuideHeader>Destino</GuideHeader>
            <GuideHeader>Fecha</GuideHeader>
            <GuideHeader>Acciones</GuideHeader>
          </GuideRow>
        </thead>
        <tbody>
          {guides.map((guide) => (
            <GuideRow key={guide.number}>
              <GuideData>{guide.number}</GuideData>
              <GuideData>{guide.state}</GuideData>
              <GuideData>{guide.origin}</GuideData>
              <GuideData>{guide.destination}</GuideData>
              <GuideData>{guide.date}</GuideData>
              <GuideData>
                <GuideBtn onClick={() => onUpdate(guide.number)}>Actualizar</GuideBtn>
                <GuideBtn onClick={() => onViewHistory(guide.number)}>Ver Historial</GuideBtn>
              </GuideData>
            </GuideRow>
          ))}
        </tbody>
      </GuideTable>
    </section>
  );
};

export default Guide;
