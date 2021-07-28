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
      expect(engineer).toEqual({
        position: "engineer",
        name: "Bob T",
        id: "01254",
        email: "bt@so.nice",
        github: "https://www.github.com/bobt",
      });
    });
  });
});
