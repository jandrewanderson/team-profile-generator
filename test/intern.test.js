const Employee = require('../classes/employee');
const Intern = require('../classes/intern');

describe("Test for the Intern class", () => {

    describe("Get Manger office number", () => {

        it("should return the role of the Intern", () => {
          
          const newIntern = new Intern("Mike", 1, "Mike@dm.com", "SMU", "Intern");
          
          expect(newIntern.getSchool()).toEqual("SMU");
          
        })
    })

    describe("Get Intern role", () => {

        it("should return the role of the Intern", () => {
          
            const newIntern = new Intern("Mike", 1, "Mike@dm.com", "SMU", "Intern");
          
          expect(newIntern.getRole()).toEqual("Intern");
          
        })
    })

})