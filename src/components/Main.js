// importando o react e component
import React, { Component } from "react";

// Importando o form
import Form from "./Form";

// importando seu css
import "./Main.css";
import Tarefas from "./Tarefas";

export default class name extends Component {
  // estado do meu componente. Tudo alterado aqui ira interferir no comportamento do render
  // tudo que mudar ira mudar em tempo real na pagina
  state = {
    novaTarefa: "",
    tarefas: [],
    index: -1,
  };

  // Uma função que serar executada assim que o componete for executado
  componentDidMount() {
    // Estamos pegando o JSON do localStorage com o que tinhamos salvado anteriormente
    const tarefas = JSON.parse(localStorage.getItem("tarefas"));

    // Se não tiver tarefas não fazemos nada
    if (!tarefas) return;

    // Se tiver salvamos o estado
    this.setState({
      tarefas,
    });
  }

  // Inicia quando o componete for atualizado. Ou seja toda vez que o componete salvar nos vamos salvar no localstorage do navegador
  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;
    // Estamos comparando o estado passado com as tarefas
    if (tarefas === prevState.tarefas) return;

    // Estamos salvando no localstorage
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }

  // Esta pegando o evento do input e atralando ao novaTarefa
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  // esta pegando o envento de onSubmit e atrelando a array de tarefas
  handleSubmit = (e) => {
    // Previnindo o evento
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    // removendo os espaços
    novaTarefa = novaTarefa.trim();

    // Verificando se já existe uma tarefa com o indexOf de novatarefa
    if (tarefas.indexOf(novaTarefa) !== -1) return;

    // Verificando se é uma string vazia
    if (novaTarefa === "") return;

    // Copiando o array
    const novasTarefas = [...tarefas];

    // Não estamos editando
    if (index == -1) {
      // sentando as novas tarefas com o array passado copiado
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        // limpando o campo
        novaTarefa: "",
      });
    } else {
      // copia o que tem no index para o campo
      novasTarefas[index] = novaTarefa;

      // copia novamente o que o que foi editado e volta o campo para vazio
      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
        novaTarefa: "",
      });
    }
  };

  // recebendo o e o index
  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    // pegamos o index e falamos que a tarefa e igual a nova tarefa. ou seja copia o campo para edição
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  // Estamos recebendo o e o index
  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    // Copiando as tarefas para um novo array
    const novasTarefas = [...tarefas];
    // removendo a tarefa, estamos passando o index e removendo 1
    novasTarefas.splice(index, 1);

    // reatribuindo o valor de tarefas
    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  render() {
    // esta atribindo o valor do estado a nova tarefa
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1> Lista de tarefas </h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />
        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
