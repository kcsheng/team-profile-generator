class Employee {
  constructor(position, name, id, email) {
    this.position = position;
    this.name = name;
    this.id = id;
    this.email = email;
  }
  static questions(position) {
    const basicQuestions = [
      `Enter ${position}'s name:`,
      `Enter ${position}'s id:`,
      `Enter ${position}'s email:`,
    ];
    const extraQuestions = {
      manager: `Enter ${position}'s extension number:`,
      engineer: `Enter ${position}'s github address:`,
      intern: `Enter ${position}'s school:`,
    };
    basicQuestions.push(extraQuestions[position]);
    return basicQuestions;
  }
}

module.exports = Employee;
