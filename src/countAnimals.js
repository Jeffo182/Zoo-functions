const data = require('../data/zoo_data');

function countAnimals(...animal) {
  const animaTeste = data.species.find((especie) => especie.name.includes(animal));
  console.log(animaTeste);
}
countAnimals('lions', 'tigers');
module.exports = countAnimals;
