const data = require("../data/zoo_data");

/* const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]; */

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
