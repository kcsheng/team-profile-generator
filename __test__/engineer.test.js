const Engineer = require("../lib/engineer");

describe("engineer", () => {
  describe("Initilisation", () => {
    it("should create an object with valid 'name', 'id', 'email' and 'github'", () => {
      // Arrange
      const name = "Bob T";
      const id = "01254";
      const email = "bt@so.nice";
      const github = "bobt";
      // Act
      const engineer = new Engineer(name, id, email, github);
      // Assert
      expect(engineer).toEqual({
        position: "engineer",
        name: "Bob T",
        id: "01254",
        email: "bt@so.nice",
        github: "bobt",
      });
    });
  });
  describe("engineer object methods", () => {
    const name = "Tronald Dump";
    const id = "23455";
    const email = "td@kiss.ass";
    const github = "tdump";
    const engineer = new Engineer(name, id, email, github);

    it("should return engineer's name by inheriting employee getName()", () => {
      const engineerName = engineer.getName();
      expect(engineerName).toBe("Tronald Dump");
    });

    it("should return engineer's id by inheriting employee getId()", () => {
      const engineerId = engineer.getId();
      expect(engineerId).toBe("23455");
    });

    it("should return engineer's email by inheriting employee getEmail", () => {
      const engineerEmail = engineer.getEmail();
      expect(engineerEmail).toBe("td@kiss.ass");
    });

    it("should return engineer's extension number", () => {
      const engineerGithub = engineer.getGitHub();
      expect(engineerGithub).toBe("tdump");
    });

    it("should return engineer's role", () => {
      const engineerRole = engineer.getRole();
      expect(engineerRole).toBe("engineer");
    });
  });
});
