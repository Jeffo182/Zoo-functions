const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // eslint-disable-next-line max-len
  let resultado;
  if (employeeName !== undefined) {
    resultado = data.employees.find(
      (colaborador) =>
        employeeName === colaborador.firstName
        || employeeName === colaborador.lastName,
    );
  } else {
    resultado = {};
  }
  return resultado;
}

module.exports = getEmployeeByName;
