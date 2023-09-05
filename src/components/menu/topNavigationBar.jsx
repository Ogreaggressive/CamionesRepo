import React from 'react';
import useStyles from './topNavigationBarStyles';

const TopNavigationBar = () => {
    const classes = useStyles();

  // Agregamos enlaces ficticios (recuerda descomentarlos cuando implementes las páginas)
  const handleViajesClick = () => {
    // Aquí podrías navegar a la página de Viajes en Curso
    // Por ejemplo: history.push('/viajes-en-curso')
  };

  const handleInventarioClick = () => {
    // Aquí podrías navegar a la página de Inventario
    // Por ejemplo: history.push('/inventario')
  };

  const handleEstadisticasClick = () => {
    // Aquí podrías navegar a la página de Estadísticas
    // Por ejemplo: history.push('/estadisticas')
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