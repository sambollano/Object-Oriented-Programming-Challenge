const Engineer = require ("./lib/Engineer.js");
const Intern = require ("./lib/Intern.js");
const Manager = require ("./lib/Manager.js");
const Inquirer = require ('./lib/Inquirer');
const fs = require ("fs");

let employeeArr = [];

const Questions = () => {
    Inquirer.prompt([
        {
            Type: 'List',
            Message: 'EmployeeStatus',
            Name: 'EmployeeName',
            Choices: [Employee, Engineer, Manager, Intern]
        },
    ])
}