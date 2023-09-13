import React, { Component } from 'react';
import TablaRegistro from './TablaRegistro';
import TablaFiltro from './TablaFiltro';
import './Home.css'; 
import BarraFiltros from './BarraFiltros';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosCompartidos: [], 
      departamento: '',
      celda: '',
 
      fechaSeleccionada:'',
              turnoSeleccionado:'',
    };
     this.actualizarFechaYTurno = this.actualizarFechaYTurno.bind(this);
  }

  actualizarDatosCompartidos = (nuevosDatos) => {
    this.setState({ datosCompartidos: nuevosDatos });
  };

   actualizarFechaYTurno = (fecha, turnoSeleccionado) => {
     console.log('Valor de turno antes de la actualización:', turnoSeleccionado);
     this.setState({ fecha, turnoSeleccionado });
   };


  actualizarDepartamento = (departamento) => {
    this.setState({ departamento });
  };

  actualizarCelda = (celda) => {
    this.setState({ celda });
  };




  render() {
    return (
      <div> 
        <BarraFiltros
          actualizarDepartamento={this.actualizarDepartamento}
          actualizarCelda={this.actualizarCelda}
       
          
        />
      <div className="home-container">
        
     
        <div className="tabla-registro">
        <TablaRegistro
              datosCompartidos={this.state.datosCompartidos}
              actualizarDatosCompartidos={this.actualizarDatosCompartidos}
               actualizarFechaYTurno={this.actualizarFechaYTurno}
              departamento={this.state.departamento}
              celda={this.state.celda}
          
            />

            
        </div></div>
      </div>
    );
  }
}

export default Home;
