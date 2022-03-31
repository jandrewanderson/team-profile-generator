const Employee = require('./employee');

class Engineer extends Employee {
    
    constructor(name, id, email, github, role) {
			super(name, id, email);
      this.github = github;
			this.role = role;
    }
		
		getGitHub() {
			return this.github;
		}
  
    getRole() {
			if (this.role){
				return "Engineer";
			}
    }
  }


module.exports = Engineer;

