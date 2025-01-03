import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Estado inicial da aplicação
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Bem-vindo à minha aplicação React!</h1>
        {/* Adicione mais componentes e lógica aqui */}
      </div>
    );
  }
}

export default App;