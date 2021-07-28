const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialisation", () => {
    it("should create an object with valid position, name, id, email", () => {
      // Arrange
      const position = "manager";
      const name = "Sue Doe";
      const id = "00012";
      const email = "sd@abc.xyz";
      // Act
      const employee = new Employee(position, name, id, email);
      // Assert
      expect(employee).toEqual({
        position: "manager",
        name: "Sue Doe",
        id: "00012",
        email: "sd@abc.xyz",
      });
    });

    describe("Employee class method", () => {
      it("should provide a total of 4 questions when 'manager', 'engineer' or 'intern' is passed in", () => {
        const lengths = [
          Employee.questions("manager").length,
          Employee.questions("engineer").length,
          Employee.questions("intern").length,
        ];
        const result = lengths.every((length) => length === 4);
        expect(result).toBeTruthy();
      });
    });
  });
});
