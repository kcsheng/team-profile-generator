const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialisation", () => {
    it("should create an object with valid position, name, id, email", () => {
      // Arrange
      const position = "manager";
      const name = "Sue Doe";
      const id = "34";
      const email = "sd@abc.xyz";
      // Act
      const employee = new Employee(position, name, id, email);
      // Assert
      expect(employee.position).toBe("manager");
      expect(employee.name).toBe("Sue Doe");
      expect(employee.id).toBe("34");
      expect(employee.email).toBe("sd@abc.xyz");
    });

    describe("Employee class method", () => {
      it("should provide a total of 4 items in a question array", () => {
        const arrayLength = Employee.questions().length;

        expect(arrayLength).toBe(4);
      });
      it("should have the second question as 'Enter employee's name:'", () => {
        const secondQuestion = Employee.questions()[1];
        const expectedQuestion = `Enter employee's name:`;

        expect(secondQuestion).toBe(expectedQuestion);
      });
    });
  });
});
