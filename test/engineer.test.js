const Employee = require('../classes/employee');
const Engineer = require('../classes/Engineer');

describe("Test for the Engineer class", () => {

    describe("Get Engineer office number", () => {

        it("should return the role of the Engineer", () => {
          
          const newEngineer = new Engineer("Mike", 1, "Mike@dm.com", "github.com/mike", "Enginner");
          
          expect(newEngineer.getGitHub()).toEqual("github.com/mike");
          
        })
    })

    describe("Get Engineer role", () => {

        it("should return the role of the Engineer", () => {
          
            const newEngineer = new Engineer("Mike", 1, "Mike@dm.com", "github.com/mike", "Enginner");
          
          expect(newEngineer.getRole()).toEqual("Engineer");
          
        })
    })

})