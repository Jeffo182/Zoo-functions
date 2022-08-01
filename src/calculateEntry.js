const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const { age } = entrants;
  const resultado = {
    child: 0,
    adult: 0,
    senior: 0,
  };

  if (age < 18) {
    resultado.child += 1;
  }
  if (age >= 18 && age < 50) {
    resultado.adult += 1;
  }
  if (age >= 50) {
    resultado.senior += 1;
  }
  return resultado;
}

function calculateEntry(entrants) {
  if (entrants === 0 || entrants === undefined) {
    return 0;
  }
  countEntrants(entrants);
  const { child, adult, senior } = entrants;
  const resultado = data.prices.adult * adult
    + data.prices.child * child
    + data.prices.senior * senior;
  return resultado;
}

module.exports = { calculateEntry, countEntrants };
