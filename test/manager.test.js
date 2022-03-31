const Employee = require('../classes/employee');
const Manager = require('../classes/manager');

describe("Test for the Manager class", () => {

    describe("Get Manager office number", () => {

        it("should return the role of the Manager", () => {
          
          const newManager = new Manager("Mike", 1, "Mike@dm.com", 123, "Manager");
          
          expect(newManager.getOfficeNumber()).toEqual(123);
          
        })
    })

    describe("Get Manager role", () => {

        it("should return the role of the Manager", () => {
          
            const newManager = new Manager("Mike", 1, "Mike@dm.com", 123, "Manager");
          
          expect(newManager.getRole()).toEqual("Manager");
          
        })
    })

})