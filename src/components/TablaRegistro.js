import React, { Component } from 'react';
import './TablaRegistro.css';
import Modal from 'react-modal'; 
import TablaFija from './TablaFija'; 

class TablaRegistro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registros: this.props.datosCompartidos, 
      celdaEditada: null,
      turno: '', 
      fecha: '', 
      showModal: false, 
      departamento: '',
    };
    this.opcionesSKU = {
        'Bulk Production': {
          'C2': '9',
          'C15': '9',
          'C16': '9',
          'C3': '15',
          'C14': '15',
          'C18': '15',
          'C11': '20',
          'C12': '20',
          'C17': '20',
          'C20': '20',
          'C4': '25',
          'C1': '29',
          'C6': '1518',
          'C9': '4035',
          'C10': '4035',
          'C5': '12662',
        },
        Wire: {
          '20': '606541',
          '22': '608032',
          '35': '608543',
          '36': '609281',
          '45': '609283',
          '30': '609283',
          '27': '609287',
          '78': '609287',
          '39': '609287',
        },
        Plastic: {
          '3': '606122',
          '69': '606122',
          '61': '606122',
          '81': '606122',
          '73': '606122',
          '11': '606122',
          '51': '606122',
          '76': '606497',
          '1': '606539',
          '2': '606539',
          '4': '606539',
          '71': '606539',
          '12': '606540',
          '14': '606540',
          '8': '610206',
        },
      };
      this.maquinasPorDepartamento = {
        'Bulk Production': [
          { id: 1, nombre: 'C2' },
          { id: 2, nombre: 'C15' },
          { id: 3, nombre: 'C16' },
          { id: 4, nombre: 'C3' },
          { id: 5, nombre: 'C14' },
          { id: 6, nombre: 'C18' },
          { id: 7, nombre: 'C11' },
          { id: 8, nombre: 'C15' },
          { id: 9, nombre: 'C12' },
          { id: 10, nombre: 'C10' },
        
        ],
        Wire: [
          { id: 1, nombre: '20' },
          { id: 2, nombre: '22' },
          { id: 3, nombre: '35' },
          { id: 4, nombre: '36' },
          { id: 5, nombre: '45' },
          { id: 6, nombre: '30' },
          { id: 7, nombre: '27' },
          { id: 8, nombre: '78' },
          { id: 9, nombre: '39' },
        
        ],
        Plastic: [
          { id: 1, nombre: '3' },
          { id: 2, nombre: '69' },
          { id: 3, nombre: '61' },
          { id: 4, nombre: '81' },
          { id: 5, nombre: '73' },
          { id: 6, nombre: '11' },
          { id: 7, nombre: '51' },
          { id: 8, nombre: '76' },
          { id: 9, nombre: '1' },
          { id: 10, nombre: 'C10' },
        
        ],
      };
      
  }

  

  handleCeldaClick = (filaIndex, columna) => {
    const { registros } = this.state;

    if (columna === 'maquinaApagada') {
      return; 
    }

    if (!registros[filaIndex].maquinaApagada) {
      this.setState({ celdaEditada: { fila: filaIndex, columna } });
    }
  };

  handleCeldaBlur = () => {
    this.setState({ celdaEditada: null });
  };

  handleChange = (event, filaIndex, columna) => {
    const { registros } = this.state;
    registros[filaIndex][columna] = event.target.value;
    if (columna === 'MACHINE') {
     
        const departamento = this.state.departamento;
        const machineValue = event.target.value;
        const newSKU = this.opcionesSKU[departamento]?.[machineValue] || '';
  
        registros[filaIndex].SKU = newSKU;
      }
  
      this.setState({ registros });
  };

  handleApagarMaquina = (filaIndex) => {
    const { registros } = this.state;
    registros[filaIndex].maquinaApagada = true;
    this.setState({ registros });
  };

  handleEncenderMaquina = (filaIndex) => {
    const { registros } = this.state;
    registros[filaIndex].maquinaApagada = false;
    this.setState({ registros });
  };

  handleAgregarMaquina = () => {
   
    const ultimoID =
      this.state.registros.length > 0
        ? this.state.registros[this.state.registros.length - 1].ID
        : 0;
    const nuevoID = ultimoID + 1;
  
    const nuevaFila = {
      ID: nuevoID,
      MACHINE: 'Insert',
      SKU: 'Select',
      NOTES: 'Note',
      maquinaApagada: false,
    };
  
 
    const nuevosRegistros = [...this.state.registros, nuevaFila];
  
 
    this.setState({ registros: nuevosRegistros });
  
  };
  
   
  
  

  handleEliminarFila = (filaIndex) => {
    const { registros } = this.state;
    registros.splice(filaIndex, 1);
    this.setState({ registros });
  };

 
  mostrarModal = () => {
    this.setState({ showModal: true });
  };

 
  ocultarModal = () => {
    this.setState({ showModal: false });
  };


  handleGuardar = () => {
 
    if (!this.state.turno || !this.state.fecha) {
        alert('Por favor, ingrese turno y fecha.');
        return;
      }
  
 
    const registrosGuardados = this.state.registros.filter(
        (registro) => !registro.maquinaApagada
      );
  
   
  
    console.log(
      'Datos guardados con turno',
      this.state.turno,
      'y fecha',
      this.state.fecha
    );
    console.log('Datos guardados:', registrosGuardados);
  

    this.setState(
        {
          turno: '',
          fecha: '',
          showModal: false,
          registros: registrosGuardados, 
          turnoSeleccionado: this.state.turno, 
    fechaSeleccionada: this.state.fecha, 
        },
        () => {
          this.props.actualizarFechaYTurno(this.state.fecha, this.state.turno);
    
          this.props.actualizarDatosCompartidos(registrosGuardados);
        }
      );
      
    
      alert('Datos guardados con éxito');
  };

  handleDepartamentoChange = (event) => {
    this.setState({ departamento: event.target.value });
  };
  

  render() {
    // Opciones de SKU
    const { registros, departamento } = this.state;

    // Opciones de turno
    const opcionesTurno = ['Shift', 'A', 'B', 'C'];

    return (
      <div className="contenedor-tablas">
        <div className="tabla-izquierda">
          <TablaFija
            departamento={departamento}
            maquinasPorDepartamento={this.maquinasPorDepartamento}
          />
        </div>
        <div className="tabla-derecha">
          <h3>Edit Program</h3>
        <div>
          <label htmlFor="departamento">Cell:</label>
          <select
            id="departamento"
            value={departamento}
            onChange={this.handleDepartamentoChange}
          >
            <option value="">Cell Type</option>
            <option value="Bulk Production">Bulk Production</option>
            <option value="Wire">Wire</option>
            <option value="Plastic">Plastic</option>
          </select>
          <button onClick={this.handleAgregarMaquina}>Add</button>
        <button onClick={this.mostrarModal}>Save</button>
        {this.state.turnoSeleccionado && this.state.fechaSeleccionada && (
    <div>
    
    </div>
  )}
        </div>
        <table className='tableEdit'>
          <thead>
            <tr>
              <th>ID</th>
              <th style={{ width: '100px' }}>MACHINE</th>
              <th style={{ width: '100px' }}>SKU</th>
              <th style={{ width: '400px' }}>NOTES</th>
              <th>||</th>
              <th style={{ width: '125px' }}>OPTIONS</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((registro, filaIndex) => (
              <tr key={filaIndex}>
                {Object.keys(registro).map((columna, columnIndex) => (
                  <td
                    key={columna}
                    onClick={() => this.handleCeldaClick(filaIndex, columna)}
                    onBlur={this.handleCeldaBlur}
                  >
                    {columna === 'ID' ? (
                      registro[columna]
                    ) : columna === 'SKU' && this.state.celdaEditada &&
                      this.state.celdaEditada.fila === filaIndex &&
                      this.state.celdaEditada.columna === columna ? (
                      <select
                        value={registro[columna]}
                        onChange={(event) =>
                          this.handleChange(event, filaIndex, columna)
                        }
                      >
                        {departamento &&
                          this.opcionesSKU[departamento] &&
                          Object.entries(this.opcionesSKU[departamento]).map(
                            ([machineValue, skuValue]) => (
                              <option key={machineValue} value={skuValue}>
                                {skuValue}
                              </option>
                            )
                          )}
                      </select>
                    ) : this.state.celdaEditada &&
                      this.state.celdaEditada.fila === filaIndex &&
                      this.state.celdaEditada.columna === columna ? (
                      <input
                        type="text"
                        value={registro[columna]}
                        onChange={(event) =>
                          this.handleChange(event, filaIndex, columna)
                        }
                      />
                    ) : (
                      registro[columna]
                    )}
                  </td>
                ))}
                {registro.maquinaApagada ? (
                  <button onClick={() => this.handleEncenderMaquina(filaIndex)}>
                    On
                  </button>
                ) : (
                  <div>
                    <button onClick={() => this.handleApagarMaquina(filaIndex)}>
                      Off
                    </button>
                    <button onClick={() => this.handleEliminarFila(filaIndex)}>
                      Delete
                    </button>
                  </div>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        
       

       <Modal
  isOpen={this.state.showModal}
  onRequestClose={this.ocultarModal}
  contentLabel="Ingresar Turno y Fecha"
>
  <h2>Shift and Date</h2>
  <label htmlFor="turno">Shift:</label>
  <select
    id="turno"
    value={this.state.turno}
    onChange={(e) => this.setState({ turno: e.target.value })}
  >
    {opcionesTurno.map((opcion) => (
      <option key={opcion} value={opcion}>
        {opcion}
      </option>
    ))}
  </select>
  <label htmlFor="fecha">Date:</label>
  <input
    type="date"
    id="fecha"
    value={this.state.fecha}
    onChange={(e) => this.setState({ fecha: e.target.value })}
  />
  <button onClick={this.handleGuardar}>Save</button>
  <button onClick={this.ocultarModal}>Cancel</button>


  <div>
    <p>Selected Shift: {this.state.turno}</p>
    <p>Selected Date: {this.state.fecha}</p>
  </div>
</Modal>

</div></div>
    );
  }

}
export default TablaRegistro;