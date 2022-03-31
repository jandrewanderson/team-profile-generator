const inquirer = require('inquirer');
const fs = require('fs');

//require in all functions from other folders
const employee = require('./employee');
const manager = require('./manager');
const intern = require('./intern');
const engineer = require('./engineer');

//run all functions in order
manager.managerQuestions();

