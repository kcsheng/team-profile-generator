const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Initialisation", () => {
    it("should create a new object with valid 'name', 'id', 'email' and 'school'", () => {
      // Arrange
      const name = "Sharma Moska";
      const id = "04562";
      const email = "sm@rty.cool";
      const school = "Monash University";
      // Act
      const intern = new Intern(name, id, email, school);
      // Assert
      expect(intern).toEqual({
        position: "intern",
        name: "Sharma Moska",
        id: "04562",
        email: "sm@rty.cool",
        school: "Monash University",
      });
    });
  });

  describe("intern object methods", () => {
    const name = "Beck Tilly";
    const id = "45462";
    const email = "bt@rmit.edu.au";
    const school = "RMIT University";
    const intern = new Intern(name, id, email, school);

    it("should return intern's name by inheriting from employee's getName method", () => {
      const internName = intern.getName();
      expect(internName).toBe("Beck Tilly");
    });

    it("should return intern's id by inheriting from employee's getId method", () => {
      const internId = intern.getId();
      expect(internId).toBe("45462");
    });

    it("should return intern's email by inheriting from employee's getEmail method", () => {
      const internEmail = intern.getEmail();
      expect(internEmail).toBe("bt@rmit.edu.au");
    });

    it("should return intern's role", () => {
      const internRole = intern.getRole();
      expect(internRole).toBe("intern");
    });
  });
});
