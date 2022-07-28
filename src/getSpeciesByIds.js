const data = require("../data/zoo_data");

function getSpeciesByIds(...ids) {
  const specieId = ids.map((idDoMap) =>
    data.species.find((idBaseDeDados) => idBaseDeDados.id === idDoMap));

  return specieId;
}

module.exports = getSpeciesByIds;
