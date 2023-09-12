import React from 'react';
import useStyles from './topNavigationBarStyles';
import { useNavigate } from 'react-router-dom';

const TopNavigationBar = () => {
    const classes = useStyles();
    const navigateTo = useNavigate();

    const handleViajesClick = () => {
     
      navigateTo('/viajesEnCurso')
    };
    
    const handleInventarioClick = () => {
      navigateTo('/inventario')
    };
    
    const handleEstadisticasClick = () => {
      navigateTo('/CamionesRepo/')
    };
  
  return (
    <div className={classes.topNav}>
      <div className={`${classes.navItem} ${classes.navItemHover}`} onClick={handleViajesClick}>
        Viajes en Curso
      </div>
      <div className={`${classes.navItem} ${classes.navItemHover}`} onClick={handleInventarioClick}>
        Inventario
      </div>
      <div className={`${classes.navItem} ${classes.navItemHover}`} onClick={handleEstadisticasClick}>
        Estadísticas
      </div>
    </div>
  );
}

export default TopNavigationBar;