const data = require('../data/zoo_data');

const getSpecieById = (id) => data.species.find((element) => element.id === id);

const getAnimalByName = (name) => data.species.find((element) => element.name === name).residents;

//  getColaborator();
//  getFirstSpecie();
//  getOldestAnimal();
//  retornar array com infos do animal
const getColaborator = (id) => data.employees.find((element) => element.id === id);

const getFirstSpecie = (id) => getSpecieById(getColaborator(id).responsibleFor[0]).name;

const getOldestAnimal = (id) => {
  const arrayDeResidents = getAnimalByName(getFirstSpecie(id));
  let contador = 0;
  let animal = '';
  arrayDeResidents.forEach((element) => {
    if (element.age > contador) {
      contador = element.age;
      animal = element.name;
    }
  });
  return animal;
};

// const arrayTransform = ((elemento) =>);
// console.log(getColaborator('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
// console.log(getFirstSpecie('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

function getOldestFromFirstSpecies(id) {
  const arrayDeResidents = getSpecieById(getColaborator(id).responsibleFor[0]).residents;
  const animalMaisVelho = getOldestAnimal(id);
  const resultado = arrayDeResidents.find((element) => element.name === animalMaisVelho);
  const resultadoArray = [];
  resultadoArray.push(resultado.name, resultado.sex, resultado.age);
  return resultadoArray;
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
