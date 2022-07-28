const data = require("../data/zoo_data");

function getAnimalsOlderThan(especie, idade) {
  return data.species
    .find((animal) => animal.name === especie)
    .residents.every((resident) => resident.age >= idade);
}

module.exports = getAnimalsOlderThan;
