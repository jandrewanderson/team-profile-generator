const inquirer = require('inquirer');
const fs = require('fs');



const start = () => {
    return inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is your ID number?',
        name: 'yourId',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is your office number?',
        name: 'officeNumber',
      },

    ]).then((response) => {
      fs.writeFile('my-team.html', 
      `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Team</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
        </head>
      
        <body>
      
            <div class="jumbotron bg-danger text-white" style="text-align: center; border-radius: 0;">
      
              <h1 class="display-4">My Team</h1>
              <p class="lead"></p>
          
            </div>
      
            <div class="card-deck" style="display: flex; align-items: center; justify-content: center; margin-left: 3rem; margin-right: 3rem;">
      
                <div class="card shadow" style="max-width: 15rem; min-width: 13rem; margin-top: 2rem;">
  
                    <div class="card-body text-white bg-primary">
                    <h5 class="card-title">${response.name}</h5>
                    <h5 class="card-title">☕ Manager</h5>
                    </div>
    
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${response.yourId}</li>
                    <li class="list-group-item">Email: <a href="mailto:${response.email}" class="card-link">${response.email}</a></li>
                    <li class="list-group-item">Office Number: ${response.officeNumber}</li>
                    </ul>
  
                </div>

      `, (err) => {
        err ? console.error(err) : console.log('HTML file started. Manager card created.');
        addMember();
      }
      );
        
      });
}

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
                internQuestions();
              }else {
                engineerQuestions();
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

        console.log( `Your intern ${response3.name1} has been added.`)
        addMember();
      }
      );
    })
    
}

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
            message: 'What is this team members GitHub link?',
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
                <li class="list-group-item">Email: <a href="#" class="card-link">${response4.email2}</a></li>
                <li class="list-group-item">GitHub: <a href="mailto:${response4.email2}" class="card-link">${response4.github2}</a></li>
            </ul>

        </div>
              
      `, (err) => {
        err ? console.error(err) : console.log('Engineer card has been created.');

        console.log( `Your engineer ${response4.name2} has been added.`)
        addMember();
      }
      );
        
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

start();


//notes

    // ${/*
    //             way using a general function
    //             */
    //            ""}
    //         ${renderInterns(allTheInterns)}
    //         ${// way using method on the class
    //             ""}
    //         ${internArray.map(intern => intern.getHtml())}
    //         ${renderEngineers(allTheEngineers)}
    // const writeHTML = (html) => {
    //     fs.write
    // }
    // const renderInterns = (internArray) => {
    //     return internArray.map(intern => {
    //         return `<div class="card intern">
    //                 ${intern.name}</div>`
    //     })
    // }
    // const renderInternsWithMethod = (internArray) => {
    //     return internArray.map(intern => intern.getHtml())
    // }