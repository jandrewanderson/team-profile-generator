const inquirer = require('inquirer');
const fs = require('fs');
const addMem = require('./employee');

const internQuestions = () => {
    console.log('you are adding an intern');
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is this team members name?',
            name: 'name1',
        },
        {
            type: 'input',
            message: 'What is this team members ID number?',
            name: 'id1',
        },
        {
            type: 'input',
            message: 'What is this team members email?',
            name: 'email1',
        },
        {
            type: 'input',
            message: 'What is the name of your school?',
            name: 'school1',
        },
    ]).then( response3 => {
        fs.appendFile('my-team.html', 
      `
        <div class="card shadow" style="max-width: 15rem; min-width: 13rem; margin-top: 2rem;">

            <div class="card-body text-white bg-primary">
                <h5 class="card-title">${response3.name1}</h5>
                <h5 class="card-title">👨‍🎓 Intern</h5>
            </div>

            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${response3.id1}</li>
                <li class="list-group-item">Email: <a href="mailto:${response3.email1}" class="card-link">${response3.email1}</a></li>
                <li class="list-group-item">School: ${response3.school1}</li>
            </ul>

        </div>
              
      `, (err) => {
        err ? console.error(err) : console.log('Intern card has been created.');
        console.log( `Your intern ${response3.name1} has been added.`);
        addMem.addMember();
      }
      );
    })
    
}

module.exports = {
    internQuestions,
};


