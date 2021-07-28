const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Initialisation", () => {
    it("should create an object with valid name, id, email and office_ext", () => {
      // Arrange
      const name = "Sarah Lee";
      const id = "01092";
      const email = "sl@luv.ya";
      const office_ext = "0245";
      // Act
      const manager = new Manager(name, id, email, office_ext);
      // Assert
      expect(manager).toEqual({
        position: "manager",
        name: "Sarah Lee",
        id: "01092",
        email: "sl@luv.ya",
        office_ext: "0245",
      });
    });
  });
});
