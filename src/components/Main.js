import React, { Component } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  // Controla o estado do componente
  state = {
    novaTarefa: '',
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  render() {
    const { novaTarefa } = this.state;

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
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}
