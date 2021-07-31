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
  });
  describe("employee object methods", () => {
    const position = "employee";
    const name = "Mark Uno";
    const id = "03455";
    const email = "mu@abc.xyz";
    const employee = new Employee(position, name, id, email);

    it("should return employee's name", () => {
      const employeeName = employee.getName();
      expect(employeeName).toBe("Mark Uno");
    });

    it("should return employee's id", () => {
      const employeeId = employee.getId();
      expect(employeeId).toBe("03455");
    });

    it("should return employee's email", () => {
      const employeeEmail = employee.getEmail();
      expect(employeeEmail).toBe("mu@abc.xyz");
    });

    it("should return employee's position", () => {
      const employeeRole = employee.getRole();
      expect(employeeRole).toBe("employee");
    });
  });

  describe("Employee class method", () => {
    it("should provide a total of 4 questions when 'manager', 'engineer' or 'intern' are passed in", () => {
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
