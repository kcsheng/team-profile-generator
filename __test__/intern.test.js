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
      expect(intern.position).toBe("intern");
      expect(intern.name).toBe("Sharma Moska");
      expect(intern.id).toBe("04562");
      expect(intern.email).toBe("sm@rty.cool");
      expect(intern.school).toBe("Monash University");
    });
  });
});
