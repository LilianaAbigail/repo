import React, { Component } from 'react';

class TablaFija extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maquinasFiltradas: [],
    };
  }


  componentDidUpdate(prevProps) {
    if (this.props.departamento !== prevProps.departamento) {
      this.filtrarMaquinasPorDepartamento(this.props.departamento);
    }
  }

 
  filtrarMaquinasPorDepartamento(departamento) {
    if (departamento) {
     
      const maquinasFiltradas = this.props.maquinasPorDepartamento[departamento];
      this.setState({ maquinasFiltradas });
    } else {
   
      this.setState({ maquinasFiltradas: [] });
    }
  }

  render() {
    const { maquinasFiltradas } = this.state;

    return (
      <div>
        <h3>MACHINE List</h3>
        <br></br>
        <table className='tableEdit'>
          <thead>
            <tr>
              <th>ID</th>
              <th style={{ width: '200px' }}>MACHINE</th>
            </tr>
          </thead>
          <tbody>
            {maquinasFiltradas.map((maquina) => (
              <tr key={maquina.id}>
                <td>{maquina.id}</td>
                <td>{maquina.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TablaFija;
