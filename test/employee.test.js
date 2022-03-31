const Employee = require('../classes/employee');

describe("Test for the Employee class", () => {

    describe("Get employee name", () => {

      it("should return the name of the employee", () => {
        
        const newEmployee = new Employee("Mike", 1, "Mike@dm.com");
        
        expect(newEmployee.getName()).toEqual("Mike");
        
      })
    })

    describe("Get employee id", () => {

        it("should return the id of the employee", () => {
          
          const newEmployee = new Employee("Mike", 1, "Mike@dm.com");
          
          expect(newEmployee.getId()).toEqual(1);
          
        })
    })

    describe("Get employee email", () => {

        it("should return the email of the employee", () => {
          
          const newEmployee = new Employee("Mike", 1, "Mike@dm.com");
          
          expect(newEmployee.getEmail()).toEqual("Mike@dm.com");
          
        })
    })

    describe("Get employee role", () => {

        it("should return the role of the employee", () => {
          
          const newEmployee = new Employee("Mike", 1, "Mike@dm.com");
          
          expect(newEmployee.getRole()).toEqual("Employee");
          
        })
    })

})