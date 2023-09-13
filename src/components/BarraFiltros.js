import React, { Component } from 'react';
import './BarraFiltros.css';

class BarraFiltros extends Component {

  constructor(props) {
    super(props);
    this.state = {
      departamento: '',
      celda: '',
      turno: true,
      fecha: '',
    };
  }

  handleDepartamentoChange = (event) => {
    this.setState({ departamento: event.target.value });
  };

  handleCeldaChange = (event) => {
    this.setState({ celda: event.target.value });
  };

  handleTurnoChange = (event) => {
    this.setState({ turno: event.target.value });
  };

  handleFechaChange = (event) => {
    this.setState({ fecha: event.target.value });
  };


  render() {

    const { departamento, celda, turno, fecha } = this.state;

    let opcionesCelda;
    if (departamento === 'Bulk') {
      opcionesCelda = ['Cell Type', 'Bulk Production'];
    } else if (departamento === 'Collated') {
      opcionesCelda = ['Cell Type', 'Papertape', 'Plastic Strip', 'Wire coil'];
    } else {
      opcionesCelda = [];
    }

    return (
      <div className="barra-filtros">
        <div className="filtro">
          <label htmlFor="departamento">Department:</label>
          <select
            id="departamento"
            value={departamento}
            onChange={this.handleDepartamentoChange}
          >
            <option value="">Dept</option>
            <option value="Bulk">Bulk</option>
            <option value="Collated">Collated</option>
          </select>
        </div>
        {departamento && (
          <div className="filtro">
            <label htmlFor="celda">Cell Type:</label>
            <select
              id="celda"
              value={celda}
              onChange={this.handleCeldaChange}
            >
              {opcionesCelda.map((celda, index) => (
                <option key={index} value={celda}>
                  {celda}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="filtro">
          <label htmlFor="turno">Shift:</label>
          <select
            id="turno"
            value={turno}
            onChange={this.handleTurnoChange}
          >
            {/* Opciones de turno */}
            <option value="">Shift</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>

          </select>
        </div>
        <div className="filtro">
          <label htmlFor="fecha">Date:</label>
          <input
            type="date"
            id="fecha"
            value={fecha}
            onChange={this.handleFechaChange}
          />
        </div>
        <div className="filtro">
          <button className="fecha-anterior">{"<-"}</button>
        </div>
        <div className="filtro">
          <button className="fecha-siguiente">{"->"}</button>
        </div>
        <div className="filtro">
          <label htmlFor="version">VERSION:</label>
          <input type="text" id="version" />
        </div>
      </div>
    );
  }
}

export default BarraFiltros;