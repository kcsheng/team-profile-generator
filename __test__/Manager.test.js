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
      expect(manager.position).toBe("manager");
      expect(manager.name).toBe("Sarah Lee");
      expect(manager.id).toBe("01092");
      expect(manager.email).toBe("sl@luv.ya");
      expect(manager.office_ext).toBe("0245");
    });
  });
  // describe("Manger class method", () => {
  //   it("should provide 4 questions in the array", () => {
  //     const arrayLength = Manager.questions().length;
  //     console.log(arrayLength);
  //     expect(arrayLength).toBe(4);
  //   });
  // });
});
