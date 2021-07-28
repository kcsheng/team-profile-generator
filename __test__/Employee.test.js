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
  });
});
