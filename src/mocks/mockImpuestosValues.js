const getRandomBoolean = () => Math.random() < 0.5;

const impuestosData = {
  enero: [
    { id: 1, nombre: 'IVA', tipo: 'Mensual', monto: 400, pagado: getRandomBoolean() },
    { id: 2, nombre: 'IT', tipo: 'Mensual', monto: 500, pagado: getRandomBoolean() },
    { id: 3, nombre: 'IUE', tipo: 'Anual', monto: 1400, pagado: getRandomBoolean() },
  ],
  febrero: [
    { id: 1, nombre: 'IVA', tipo: 'Mensual', monto: 410, pagado: getRandomBoolean() },
    { id: 2, nombre: 'IT', tipo: 'Mensual', monto: 520, pagado: getRandomBoolean() },
    { id: 3, nombre: 'IUE', tipo: 'Anual', monto: 1420, pagado: getRandomBoolean() },
  ],
  marzo: [
    { id: 1, nombre: 'IVA', tipo: 'Mensual', monto: 390, pagado: getRandomBoolean() },
    { id: 2, nombre: 'IT', tipo: 'Mensual', monto: 480, pagado: getRandomBoolean() },
    { id: 3, nombre: 'IUE', tipo: 'Anual', monto: 1380, pagado: getRandomBoolean() },
  ],
  abril: [
    { id: 1, nombre: 'IVA', tipo: 'Mensual', monto: 405, pagado: getRandomBoolean() },
    { id: 2, nombre: 'IT', tipo: 'Mensual', monto: 510, pagado: getRandomBoolean() },
    { id: 3, nombre: 'IUE', tipo: 'Anual', monto: 1410, pagado: getRandomBoolean() },
  ],
  mayo: [
    { id: 1, nombre: 'IVA', tipo: 'Mensual', monto: 395, pagado: getRandomBoolean() },
    { id: 2, nombre: 'IT', tipo: 'Mensual', monto: 490, pagado: getRandomBoolean() },
    { id: 3, nombre: 'IUE', tipo: 'Anual', monto: 1390, pagado: getRandomBoolean() },
  ],
  junio: [
    { id: 1, nombre: 'IVA', tipo: 'Mensual', monto: 415, pagado: getRandomBoolean() },
    { id: 2, nombre: 'IT', tipo: 'Mensual', monto: 530, pagado: getRandomBoolean() },
    { id: 3, nombre: 'IUE', tipo: 'Anual', monto: 1430, pagado: getRandomBoolean() },
  ],
  julio: [
    { id: 1, nombre: 'IVA', tipo: 'Mensual', monto: 410, pagado: getRandomBoolean() },
    { id: 2, nombre: 'IT', tipo: 'Mensual', monto: 520, pagado: getRandomBoolean() },
    { id: 3, nombre: 'IUE', tipo: 'Anual', monto: 1420, pagado: getRandomBoolean() },
  ],
  agosto: [
    { id: 1, nombre: 'IVA', tipo: 'Mensual', monto: 400, pagado: getRandomBoolean() },
    { id: 2, nombre: 'IT', tipo: 'Mensual', monto: 500, pagado: getRandomBoolean() },
    { id: 3, nombre: 'IUE', tipo: 'Anual', monto: 1400, pagado: getRandomBoolean() },
  ],
  septiembre: [
    { id: 1, nombre: 'IVA', tipo: 'Mensual', monto: 395, pagado: getRandomBoolean() },
    { id: 2, nombre: 'IT', tipo: 'Mensual', monto: 490, pagado: getRandomBoolean() },
    { id: 3, nombre: 'IUE', tipo: 'Anual', monto: 1390, pagado: getRandomBoolean() },
  ],
  octubre: [
    { id: 1, nombre: 'IVA', tipo: 'Mensual', monto: 415, pagado: getRandomBoolean() },
    { id: 2, nombre: 'IT', tipo: 'Mensual', monto: 530, pagado: getRandomBoolean() },
    { id: 3, nombre: 'IUE', tipo: 'Anual', monto: 1430, pagado: getRandomBoolean() },
  ],
  noviembre: [
    { id: 1, nombre: 'IVA', tipo: 'Mensual', monto: 405, pagado: getRandomBoolean() },
    { id: 2, nombre: 'IT', tipo: 'Mensual', monto: 510, pagado: getRandomBoolean() },
    { id: 3, nombre: 'IUE', tipo: 'Anual', monto: 1410, pagado: getRandomBoolean() },
  ],
  diciembre: [
    { id: 1, nombre: 'IVA', tipo: 'Mensual', monto: 390, pagado: getRandomBoolean() },
    { id: 2, nombre: 'IT', tipo: 'Mensual', monto: 480, pagado: getRandomBoolean() },
    { id: 3, nombre: 'IUE', tipo: 'Anual', monto: 1380, pagado: getRandomBoolean() },
  ],
};

export { impuestosData };