const Employee = require("./employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    const position = "engineer";
    super(position, name, id, email);
    this.github = github;
  }
}

module.exports = Engineer;
