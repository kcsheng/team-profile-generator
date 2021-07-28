const Employee = require("./employee");
class Manager extends Employee {
  constructor(name, id, email, office_ext) {
    const position = "manager";
    super(position, name, id, email);
    this.office_ext = office_ext;
  }
}
module.exports = Manager;
