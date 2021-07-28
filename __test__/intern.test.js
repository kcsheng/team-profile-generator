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
});
