const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const employeesRawData = [];

const createTeam = (rawData) => {
  const members = rawData.map((member) => {
    const [name, id, email, extraProp, , position] = Object.values(member);
    const positionCap = position.charAt(0).toUpperCase() + position.slice(1);
    return eval(`new ${positionCap}(name, id, email, extraProp, position)`);
  });
  return members;
};

const askQuestionsBy = (position) => {
  const questions = [];
  const keys = [`${position}_name`, `${position}_id`, `${position}_email`];
  const extraKeys = {
    manager: `${position}_office_ext`,
    engineer: `${position}_github`,
    intern: `${position}_school`,
  };
  keys.push(extraKeys[position]);

  for (let i = 0; i < keys.length; i++) {
    questions.push({
      type: "input",
      name: `${keys[i]}`,
      message: `${Employee.questions(position)[i]}`,
      validate: (input) => {
        const regexp = new RegExp(/^[0-9 a-z,.'-@]+$/, "i");
        return regexp.test(input) && input.length > 0
          ? true
          : "Input not valid!";
      },
    });
  }

  questions.push({
    type: "rawlist",
    name: "further_action",
    choices: ["Add an engineer.", "Add an intern.", "Finish team building."],
  });
  return questions;
};

const addEmployee = (position) =>
  inquirer
    .prompt(askQuestionsBy(position))
    .then((data) => {
      data.position = position;
      employeesRawData.push(data);
      if (data.further_action === "Add an engineer.") {
        addEmployee("engineer");
      } else if (data.further_action === "Add an intern.") {
        addEmployee("intern");
      } else {
        console.log(employeesRawData);
      }
    })
    .catch((error) => console.error(error));

// addEmployee("manager");

module.exports = { addEmployee, askQuestionsBy, createTeam };
