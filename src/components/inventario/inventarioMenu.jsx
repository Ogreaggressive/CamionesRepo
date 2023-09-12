import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './inventarioMenuStyles';

const InventarioMenu = () => {
  const classes = useStyles();
  const location = useLocation();
  
  // Determina la página actual a partir de la ruta actual
  let pageFromURL = location.pathname.split('/').filter(Boolean)[0];
  
  // Establece currentPage en 'camiones' si la página es 'inventario'
  const currentPage = pageFromURL === 'inventario' ? 'camiones' : pageFromURL;
  
  // Mapea la página actual a un texto descriptivo
  const pageText = {
    camiones: 'Camiones',
    documentos: 'Documentos',
    pagosmensuales: 'Pagos Mensuales',
  }[currentPage];

  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        <ul>
          <li>
            <Link to="/camiones" className={currentPage === 'camiones' ? classes.active : ''}>
              Camiones
            </Link>
          </li>
          <li>
            <Link to="/documentos" className={currentPage === 'documentos' ? classes.active : ''}>
              Documentos
            </Link>
          </li>
          <li>
            <Link to="/pagosmensuales" className={currentPage === 'pagosmensuales' ? classes.active : ''}>
              Pagos Mensuales
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.agregarButton}>
        <Link to={`/agregar${currentPage}`}>
          <button>
            Agregar {pageText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InventarioMenu;