const Employee = require("../lib/employee");
const inquirer = require("inquirer");
const employeesRawData = [];

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

const addEmployee = (position) => {
  inquirer
    .prompt(askQuestionsBy(position))
    .then((data) => {
      employeesRawData.push(data);
      if (data.further_action === "Add an engineer.") {
        addEmployee("engineer");
      } else if (data.further_action === "Add an intern.") {
        addEmployee("intern");
      } else {
        return employeesRawData;
      }
    })
    .catch((error) => console.error(error));
};

const getData = () => addEmployee("manager");

module.exports = getData;
