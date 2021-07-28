const Team = require("../lib/team");
describe("Team", () => {
  describe("Initialisation", () => {
    it("should generate a new team when passing in an array of objects", () => {
      // Arrange
      const members = [
        {
          position: "manager",
          name: "Nina Chen",
          id: "52451",
          email: "nc@mail.io",
          office_ext: "0234",
        },
        {
          position: "engineer",
          name: "Diana Smith",
          id: "93451",
          email: "ds@gmail.io",
          github: "https://www.github.com/dsmith",
        },
        {
          position: "intern",
          name: "John Harris",
          id: "92158",
          email: "jh@gmail.edu",
          school: "RMIT University",
        },
      ];
      // Act
      const team = new Team(members);
      // Assert
      expect(team).toEqual({
        members: [
          {
            position: "manager",
            name: "Nina Chen",
            id: "52451",
            email: "nc@mail.io",
            office_ext: "0234",
          },
          {
            position: "engineer",
            name: "Diana Smith",
            id: "93451",
            email: "ds@gmail.io",
            github: "https://www.github.com/dsmith",
          },
          {
            position: "intern",
            name: "John Harris",
            id: "92158",
            email: "jh@gmail.edu",
            school: "RMIT University",
          },
        ],
      });
    });
  });
  describe("add", () => {
    it("should add a team member when passing in a member object", () => {});
  });
});
