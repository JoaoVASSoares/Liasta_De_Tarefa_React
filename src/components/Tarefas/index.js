// Importando o react
import React from "react";
// Importando o FaEdit e o FaWindowsClose
import { FaEdit, FaWindowClose } from "react-icons/fa";
//Importando o prop-types
import PropTypes from "prop-types";

// Importando o CSS
import "./Tarefas.css";

// Exportando a função Tarefas
export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {/* Fazendo para percorrer todo o array e em todo array cria uma li */}
      {tarefas.map((tarefa, index) => (
        // Cria um li utilizando a chave do array
        <li key={tarefa}>
          {/* Exibe a tarefa */}
          {tarefa}
          {/* Span dos botoes */}
          <span>
            <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

// Fazendo as validações dos campos
Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
