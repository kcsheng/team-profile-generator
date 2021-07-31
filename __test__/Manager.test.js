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

  describe("manager object methods", () => {
    const name = "Eric Chen";
    const id = "84521";
    const email = "ec@see.ya";
    const office_ext = "5421";
    const manager = new Manager(name, id, email, office_ext);

    it("should return manager's name by inheriting employee getName()", () => {
      const managerName = manager.getName();
      expect(managerName).toBe("Eric Chen");
    });

    it("should return manager's id by inheriting employee getId()", () => {
      const managerId = manager.getId();
      expect(managerId).toBe("84521");
    });

    it("should return manager's email by inheriting employee getEmail", () => {
      const managerEmail = manager.getEmail();
      expect(managerEmail).toBe("ec@see.ya");
    });

    it("should return manager's extension number", () => {
      const managerExt = manager.getExt();
      expect(managerExt).toBe("5421");
    });

    it("should return manager's role", () => {
      const managerRole = manager.getRole();
      expect(managerRole).toBe("manager");
    });
  });
});
