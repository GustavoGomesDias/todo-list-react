import React, { Component } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

// Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  // Controla o estado do componente
  state = {
    newTask: '',
    tasks: [
      'Fazer café',
      'Beber água',
      'Comer fruta',
    ],
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form action="#" className="form">
          {/*
            handle == lidar com | handleChange == lidar com mudança.
            Usar hnadle sempre que tiver um evento com 'on'.
          */}
          <input
            onChange={this.handleChange}
            type="text"
            value={newTask}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
