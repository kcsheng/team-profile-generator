const Employee = require("./employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    const position = "engineer";
    super(position, name, id, email);
    this.github = github;
  }

  getGitHub() {
    return this.github;
  }

  getRole() {
    return "engineer";
  }
}

module.exports = Engineer;
