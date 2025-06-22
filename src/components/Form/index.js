import { useState } from "react";
import {
  FormAplication, FormContainer, FormGroup, FormInput,
  FormSubmit, FormTitle
} from "./style";

const Form = ({ onAddGuide }) => {
  const [form, setForm] = useState({
    number: "",
    origin: "",
    destination: "",
    receiver: "",
    date: "",
    state: "Pendiente",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e) => {
    setForm(prev => ({ ...prev, state: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { number, origin, destination, receiver, date, state } = form;

    if (!number || !origin || !destination || !receiver || !date || !state) {
      alert("Por favor llena todos los campos.");
      return;
    }

    onAddGuide({ ...form });
    setForm({
      number: "",
      origin: "",
      destination: "",
      receiver: "",
      date: "",
      state: "Pendiente",
    });
  };

  return (
    <FormContainer>
      <FormTitle>Registro de Guías</FormTitle>
      <FormAplication onSubmit={handleSubmit}>
        {["number", "origin", "destination", "receiver", "date"].map(field => (
          <FormGroup key={field}>
            <label htmlFor={field}>{field[0].toUpperCase() + field.slice(1)}</label>
            <FormInput
              type={field === "date" ? "date" : "text"}
              id={field}
              name={field}
              value={form[field]}
              onChange={handleChange}
            />
          </FormGroup>
        ))}
        <FormGroup>
          <legend>Estado Inicial</legend>
          <label><input type="radio" name="state" value="Pendiente" checked={form.state === "Pendiente"} onChange={handleRadioChange} /> Pendiente</label>
          <label><input type="radio" name="state" value="En tránsito" checked={form.state === "En tránsito"} onChange={handleRadioChange} /> En tránsito</label>
          <label><input type="radio" name="state" value="Entregado" checked={form.state === "Entregado"} onChange={handleRadioChange} /> Entregado</label>
        </FormGroup>
        <FormSubmit type="submit">Registrar Guía</FormSubmit>
      </FormAplication>
    </FormContainer>
  );
};

export default Form;
