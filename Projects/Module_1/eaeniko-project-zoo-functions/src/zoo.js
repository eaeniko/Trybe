const data = require('./data');

const { species, employees, prices, hours } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  const newSpecieis = ids.map((id) => species.find((specie) => specie.id === id));
  return newSpecieis;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(speciesParam) {
  // seu código aqui
  if (!speciesParam) {
    return species.reduce((accumulator, { name, residents }) => {
      accumulator[name] = residents.length;
      return accumulator;
    }, {});
  }
  return species.find((specie) => specie.name === speciesParam).residents.length;
}

function calculateEntry(entrants = 0) {
  // seu código aqui
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  if (Object.keys(entrants).length === 0) return 0;
  return ((Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior));
}

function getAnimalMap(options) {
  // seu código aqui
}

function DaySchedule(day) {
  const schedule = {};
  schedule[day] = (day === 'Monday') ? 'CLOSED'
    : `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
  return schedule;
}

function getSchedule(dayName) {
  // seu código aqui
  const days = Object.keys(hours);
  const schedule = {};
  if (!dayName) {
    days.forEach((day) => {
      if (day === 'Monday') schedule[day] = 'CLOSED';
      else schedule[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    });
    return schedule;
  }
  return DaySchedule(dayName);
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const animal = employees.find((employee) => employee.id === id).responsibleFor[0];
  return Object.values(species.find(
    (specie) => specie.id === animal,
  ).residents.reduce(
    (accumulator, currentNumber) => {
      if ((accumulator.age) > currentNumber.age) return accumulator;
      return currentNumber;
    },
  ));
}

const doPercentage = (priceType, percentage) => {
  const didPercentage = Math.ceil(((priceType * (percentage / 100)) + priceType) * 100) / 100;
  return didPercentage;
};

function increasePrices(percentage) {
  // seu código aqui
  prices.Adult = doPercentage(prices.Adult, percentage);
  prices.Child = doPercentage(prices.Child, percentage);
  prices.Senior = doPercentage(prices.Senior, percentage);
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
