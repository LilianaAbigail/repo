import React, { Component } from 'react';
import './TablaFiltro.css';

class TablaFiltro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registros: [
        {
          ID: 1,
          MACHINE: 'Máquina 1',
          SKU: 'SKU123',
        },
        {
          ID: 2,
          MACHINE: 'Máquina 2',
          SKU: 'SKU456',
        },


      ], turnoSeleccionado: '',
      fechaSeleccionada: '',
    };
  }

  render() {
    const { datosCompartidos, fechaSeleccionada, turnoSeleccionado } = this.props;

    return (
      <div>
        <h2>Filter</h2>


        {fechaSeleccionada && <p>Date: {fechaSeleccionada}</p>}
        {turnoSeleccionado && <p>Turno: {turnoSeleccionado}</p>}

        <table className='tableFilter'>
          <thead>
            <tr>
              <th>ID</th>
              <th>MACHINE</th>
              <th>SKU</th>

            </tr>
          </thead>
          <tbody>
            {datosCompartidos.map((registro) => (
              <tr key={registro.ID}>
                <td>{registro.ID}</td>
                <td>{registro.MACHINE}</td>
                <td>{registro.SKU}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TablaFiltro;
