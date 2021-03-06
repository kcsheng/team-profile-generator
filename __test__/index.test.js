const { addEmployee, askQuestionsBy, createTeam } = require("../index");
const inquirer = require("inquirer");

describe("index", () => {
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

  // describe("inquirer", () => {
  //   it("should be invoked by askQuestionsby('manager')", () => {
  //     inquirer.prompt = jest.fn().mockImplementation(() =>
  //       Promise.resolve({
  //         manager_name: "John Jackson",
  //         manager_id: "31454",
  //         manager_email: "jj@cute.me",
  //         manager_office_ext: "3451",
  //         further_action: "Finish team building.",
  //         position: "manager",
  //       })
  //     );
  //     expect(addEmployee("manager")).resolves.toEqual({
  //       manager_name: "John Jackson",
  //       manager_id: "31454",
  //       manager_email: "jj@cute.me",
  //       manager_office_ext: "3451",
  //       further_action: "Finish team building.",
  //       position: "manager",
  //     });
  //   });
  // });

  describe("createTeam", () => {
    it("should convert an array of raw data into a team object", () => {
      const rawData = [
        {
          manager_name: "John Jackson",
          manager_id: "31454",
          manager_email: "jj@cute.me",
          manager_office_ext: "3451",
          further_action: "Add an intern.",
          position: "manager",
        },
        {
          intern_name: "Chris Smith",
          intern_id: "34512",
          intern_email: "cs@gmail.it",
          intern_school: "RMIT University",
          further_action: "Add an engineer.",
          position: "intern",
        },
        {
          engineer_name: "Tim Maxx",
          engineer_id: "33213",
          engineer_email: "tm@google.it",
          engineer_github: "https://www.github.com/tmaxx",
          further_action: "Finish team building.",
          position: "engineer",
        },
      ];

      const teamObject = {
        members: [
          {
            position: "manager",
            name: "John Jackson",
            id: "31454",
            email: "jj@cute.me",
            office_ext: "3451",
          },
          {
            position: "intern",
            name: "Chris Smith",
            id: "34512",
            email: "cs@gmail.it",
            school: "RMIT University",
          },
          {
            position: "engineer",
            name: "Tim Maxx",
            id: "33213",
            email: "tm@google.it",
            github: "https://www.github.com/tmaxx",
          },
        ],
      };

      expect(createTeam(rawData)).toEqual(teamObject);
    });
  });
});
