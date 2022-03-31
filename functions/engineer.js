const inquirer = require('inquirer');
const fs = require('fs');
const addMem = require('./employee');

const engineerQuestions = () => {
    console.log('you are adding an engineer');
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is this team members name?',
            name: 'name2',
        },
        {
            type: 'input',
            message: 'What is this team members ID number?',
            name: 'id2',
        },
        {
            type: 'input',
            message: 'What is this team members email?',
            name: 'email2',
        },
        {
            type: 'input',
            message: 'What is this team members GitHub profile?',
            name: 'github2',
        },
    ]).then( response4 => {
        fs.appendFile('my-team.html', 
      `
        <div class="card shadow" style="max-width: 15rem; min-width: 13rem; margin-top: 2rem;">

            <div class="card-body text-white bg-primary">
                <h5 class="card-title">${response4.name2}</h5>
                <h5 class="card-title">👓 Engineer</h5>
            </div>

            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${response4.id2}</li>
                <li class="list-group-item">Email: <a href="mailto:${response4.email2}" class="card-link">${response4.email2}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${response4.github2}" class="card-link">${response4.github2}</a></li>
            </ul>

        </div>
              
      `, (err) => {
        err ? console.error(err) : console.log('Engineer card has been created.');
        console.log( `Your engineer ${response4.name2} has been added.`);
        // addMem.addMember();
        // addMem.finishHtml();
      }
      );
        
    });
    
}

module.exports = {
    engineerQuestions,
}