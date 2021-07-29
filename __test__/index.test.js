const { addEmployee, askQuestionsBy } = require("../index");
const inquirer = require("inquirer");

// Mock the inquirer module
// jest.mock("inquirer");

describe("getInput", () => {
  describe("askQuestionsBy(position)", () => {
    it("should match corresponding property value for a specific position", () => {
      const expected1 = "Enter intern's email:";
      const expected2 = "manager_office_ext";
      const expected3 = "Finish team building.";

      expect(askQuestionsBy("intern")[2]["message"]).toBe(expected1);
      expect(askQuestionsBy("manager")[3]["name"]).toBe(expected2);
      expect(askQuestionsBy("engineer")[4]["choices"][2]).toBe(expected3);
    });
  });

  // describe("addEmployee", () => {
  //   it("should return empty object by invoking addEmployee with 'manager'", () => {
  //     inquirer.prompt.mockResolvedValue({ data: {} });
  //     expect(addEmployee("manager")).resolves.toEqual({ data: {} });
  //   });
  // });
});
