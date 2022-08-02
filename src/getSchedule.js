const data = require('../data/zoo_data');

const diasDaSemana = Object.keys(data.hours);
const verifyDaysOfdiaDaSemana = (element) => diasDaSemana.some((day) => day === element);
const verifyAnimal = (element) => data.species.some((animal) => animal.name === element);
const verifySpecie = (target) =>
  data.species.find((element) => element.name === target);
const exhibition = (dia) =>
  data.species
    .filter((animal) => animal.availability.includes(dia))
    .map((element) => element.name);
const monday = {
  Monday: {
    exhibition: 'The zoo will be closed!',
    officeHour: 'CLOSED',
  },
};

function diaDaSemana(scheduleTarget) {
  if (scheduleTarget !== 'Monday') {
    const { open, close } = data.hours[scheduleTarget];
    return {
      [scheduleTarget]: {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: exhibition(scheduleTarget),
      },
    };
  }
}

function gerarMsgCompleta() {
  const ObjectAnimaisPorDia = {};
  const animaisPorDia = diasDaSemana.map((element) => exhibition(element));
  diasDaSemana.forEach((element, index) => {
    const { open, close } = data.hours[element];
    Object.assign(ObjectAnimaisPorDia, {
      [element]: {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: animaisPorDia[index],
      },
    });
  });
  Object.assign(ObjectAnimaisPorDia, monday);
  return ObjectAnimaisPorDia;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') return monday;
  if (verifyDaysOfdiaDaSemana(scheduleTarget)) return diaDaSemana(scheduleTarget);
  if (verifyAnimal(scheduleTarget)) return verifySpecie(scheduleTarget).availability;
  return gerarMsgCompleta();
}
module.exports = getSchedule;
