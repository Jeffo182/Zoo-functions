const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const resultado = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((element) => {
    const { age } = element;
    if (age < 18) {
      resultado.child += 1;
    }
    if (age >= 18 && age < 50) {
      resultado.adult += 1;
    }
    if (age >= 50) {
      resultado.senior += 1;
    }
  });
  return resultado;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0 || entrants === undefined) {
    return 0;
  }
  const totalEntradas = countEntrants(entrants);
  const { child, adult, senior } = totalEntradas;
  const resultado = data.prices.adult * adult
    + data.prices.child * child
    + data.prices.senior * senior;
  return resultado;
}

module.exports = { calculateEntry, countEntrants };
