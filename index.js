const Employee = require ("./lib/Employee.js");
const Engineer = require ("./lib/Engineer.js");
const Intern = require ("./lib/Intern.js");
const Manager = require ("./lib/Manager.js");
const Inquirer = require ('./lib/Inquirer')

let employeeArr = [];

const initialQuestion = () => {
    Inquirer.prompt([
        {
            Type: 'Text',
            Message: 'EmployeeStatus',
            Name: 'EmployeeName',
            Choices: [Employee, Engineer, Manager, Intern]
        },
    ])
}