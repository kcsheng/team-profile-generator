class Employee {
  constructor(position, name, id, email) {
    this.position = position;
    this.name = name;
    this.id = id;
    this.email = email;
  }
  static questions(position) {
    const questions = [
      `Enter ${position}'s name:`,
      `Enter ${position}'s id:`,
      `Enter ${position}'s email:`,
    ];
    const extraQuestions = {
      manager: `Enter ${position}'s extension number:`,
      engineer: `Enter ${position}'s github address:`,
      intern: `Enter ${position}'s school:`,
    };
    questions.push(extraQuestions[position]);
    return questions;
  }
}

module.exports = Employee;
