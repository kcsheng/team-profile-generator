const Employee = require("./employee");
class Intern extends Employee {
  constructor(name, id, email, school) {
    const position = "intern";
    super(position, name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "intern";
  }
}

module.exports = Intern;
