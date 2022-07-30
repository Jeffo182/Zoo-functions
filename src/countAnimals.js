const data = require('../data/zoo_data');

const selectAnimalBySex = (getAnimal, animal) => {
  const selectAnimal = getAnimal.residents.filter((resident) => resident.sex === animal.sex);
  return selectAnimal.length;
};

const selectAnimalByname = (animal) => data.species.find((specie) => specie.name === animal.specie);

// eslint-disable-next-line max-len

function countAnimals(animal) {
  if (!animal) {
    const animals = {};
    data.species.forEach(({ name, residents }) => { animals[name] = residents.length; });
    return animals;
  }
  if (!animal.sex) {
    const { specie } = animal;
    const animals = {};
    data.species.forEach(({ name, residents }) => { animals[name] = residents.length; });
    return animals[specie];
  }
  const animalSelecionado = selectAnimalByname(animal);
  if (animal.sex) {
    return selectAnimalBySex(animalSelecionado, animal);
  }
  return animalSelecionado.residents.length;
}
console.log(countAnimals({ specie: 'bears', sex: 'female' }));
module.exports = countAnimals;
