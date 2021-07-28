class Employee {
  constructor(position, name, id, email) {
    this.position = position;
    this.name = name;
    this.id = id;
    this.email = email;
  }
  static questions() {
    const className = this.name.toLowerCase();
    return [
      `Enter ${className}'s position:`,
      `Enter ${className}'s name:`,
      `Enter ${className}'s id`,
      `Enter ${className}'s email`,
    ];
  }
}

module.exports = Employee;
