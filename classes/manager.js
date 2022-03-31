const Employee = require('./employee');

class Manager extends Employee {
    
    constructor(name, id, email, officenum, role) {
			super(name, id, email);
      this.officenum = officenum;
			this.role = role;
    }
		
		getOfficeNumber() {
			return this.officenum;
		}
  
    getRole() {
			if (this.role){
				return "Manager";
			}
    }
  }
  
module.exports = Manager;

