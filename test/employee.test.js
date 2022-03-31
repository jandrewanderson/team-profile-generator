const inquirer = require('inquirer');
const fs = require('fs');
const intern = require('./intern');
const engineer = require('./engineer');

const addMember = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            message: 'would you like to add a team member?',
            name: 'addMemQues',
        },
    ]).then( response1 => {
        if (response1.addMemQues){
          inquirer.prompt([
              {
                type: 'list',
                message: 'What is the position of this employee?',
                name: 'engineerOrIntern',
                choices: ['Engineer', 'Intern'],
              }
          ]).then( response2 => {
              if (response2.engineerOrIntern === 'Intern'){
                intern.internQuestions();
              }else {
                engineer.engineerQuestions();
              }
          })  
        } else if (response1.addMemQues === false){
            console.log('Great! You are all set!');
            finishHtml();
        }else {
            console.log('Your response was invalid. Try again!')
            addMember();
        }
    })
}

const finishHtml = () => {
    fs.appendFile('my-team.html', 
    `
            </div>

        </body>
        </html>
    `, (err) => {
        err ? console.error(err) : console.log('HTML file has been completed.');
    }
)}

module.exports = {
    addMember,
    finishHtml,
};

// class Employee {
//     constructor(){
//         this.name = "";
//         this.id = "";
//         this.email = "";
//         this.position = "";
//     }

//     addMember = () => {
//         return inquirer.prompt([
//             {
//                 type: 'confirm',
//                 message: 'would you like to add a team member?',
//                 name: 'addMemQues',
//             },
//         ]).then( response1 => {
//             if (response1.addMemQues){
//               inquirer.prompt([
//                   {
//                     type: 'list',
//                     message: 'What is the position of this employee?',
//                     name: 'engineerOrIntern',
//                     choices: ['Engineer', 'Intern'],
//                   }
//               ]).then( response2 => {
//                   this.position = response2.engineerOrIntern;

//                   if (response2.engineerOrIntern === 'Intern'){
//                     internQuestions();
//                   }else {
//                     engineerQuestions();
//                   }
//               })  
//             } else if (response1.addMemQues === false){
//                 console.log('Great! You are all set!');
//                 finishHtml();
//             }else {
//                 console.log('Your response was invalid. Try again!')
//                 addMember();
//             }
//         })
//     }
    
//     finishHtml = () => {
//         fs.appendFile('my-team.html', 
//         `
//                 </div>
    
//             </body>
//             </html>
//         `, (err) => {
//             err ? console.error(err) : console.log('HTML file has been completed.');
//         }
//         )}
// }

// module.exports = Employee;

// const allData = { manager: {}, engineers: [], interns: [] }
// return employee.askQuestions().then( responses => {
    //   employee.position = responses.engineerOrIntern
    // });