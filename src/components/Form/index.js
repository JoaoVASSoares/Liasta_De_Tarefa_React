// Importando o react
import React from "react";
//Importando o prop-types
import PropTypes from "prop-types";
// Importando apenas o FaPlux
import { FaPlus } from "react-icons/fa";

// Importando o css
import "./Form.css";

// Exportando a função Form
export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    // Falando que ao realizar o onSubimit ira chamar a função handleSubmit
    <form onSubmit={handleSubmit} action="#" className="form">
      {/* Falando que ao realizar uma nova função teremos o handleChange como função */}
      <input onChange={handleChange} type="text" value={novaTarefa} />
      {/* Importando o botão */}
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

// Fazendo as validações dos campos
Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
