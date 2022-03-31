const inquirer = require('inquirer');
const fs = require('fs');
const addMem = require('./employee')


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
        addMem.addMember();
        }
        );
        
        });
}

module.exports = {
    start,
}