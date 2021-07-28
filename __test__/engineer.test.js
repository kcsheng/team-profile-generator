const Engineer = require("../lib/engineer");

describe("engineer", () => {
  describe("Initilisation", () => {
    it("should create an object with valid 'name', 'id', 'email' and 'github'", () => {
      // Arrange
      const name = "Bob T";
      const id = "01254";
      const email = "bt@so.nice";
      const github = "https://www.github.com/bobt";
      // Act
      const engineer = new Engineer(name, id, email, github);
      // Assert
      expect(engineer.position).toBe("engineer");
      expect(engineer.name).toBe("Bob T");
      expect(engineer.id).toBe("01254");
      expect(engineer.email).toBe("bt@so.nice");
      expect(engineer.github).toBe("https://www.github.com/bobt");
    });
  });
});
