const { addEmployee, employeesRawData } = require("../src/getInput");

function activate(cb) {
  addEmployee("manager");
  cb();
}

activate(() => console.log(employeesRawData));
