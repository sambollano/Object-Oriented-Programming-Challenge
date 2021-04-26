const Engineer = require ("./lib/Engineer.js");
const Intern = require ("./lib/Intern.js");
const Manager = require ("./lib/Manager.js");
const Inquirer = require ('./lib/Inquirer');
const Fs = require ("fs");
const path = require ("path");
const { reject } = require("lodash");
const { reset } = require("ansi-styles");

let employeeArr = [];

const Questions = () => {
    return new Promise((reset, reject) => {
    Inquirer.prompt([
        {
            type: 'List',
            message: 'EmployeeStatus',
            name: 'EmployeeName',
            choices: [Employee, Engineer, Manager, Intern]
        },
        {
            type: 'list',
            message: 'EmployeeId',
            name: 'Id',
        }
        
    ])
}