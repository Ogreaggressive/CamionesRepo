import React from 'react';
import { Link } from 'react-router-dom';
import TopNavigationBar from '../components/menu/topNavigationBar';
import Viaje from '../components/viajes/viaje';
import ViajesContainer from '../components/viajes/viajesContainer';


const ViajesEnCurso = () => {
  return (
    <div>
      <TopNavigationBar />
      <ViajesContainer />

      {/* Estilos personalizados para el botón */}
      <Link to="/nuevoViaje" style={{ textDecoration: 'none', float: 'right' }}>
        <button
          style={{
            backgroundColor: 'black',
            color: 'white',
            marginBottom: '10px',
            padding: '12px 24px', // Aumenta el tamaño del botón
            fontSize: '18px', // Aumenta el tamaño del texto
            borderRadius: '4px', // Añade bordes redondeados
            border: 'none', // Elimina el borde
            cursor: 'pointer', // Cambia el cursor al pasar el mouse
          }}
        >
          Agregar Viaje
        </button>
      </Link>
    </div>
  );
}

export default ViajesEnCurso;