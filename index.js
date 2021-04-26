const Engineer = require ("./lib/Engineer.js");
const Intern = require ("./lib/Intern.js");
const Manager = require ("./lib/Manager.js");
const Inquirer = require ('./lib/Inquirer');
const Fs = require ("fs");
const path = require ("path");
const { reject } = require("lodash");
const { reset } = require("ansi-styles");

const { run } = require("jest");

const src = path.resolve("src");
const distPath = path.join(src, "index.html");

let employeeArr = [];

const Questions = () => {
    return new Promise((res, rej) => {
    Inquirer.prompt([
        {
            type: 'input',
            message: 'EmployeeName',
            name: 'Name',
        },
        {
            type: 'input',
            message: 'EmployeeId',
            name: 'Id',
        },
        {
            type: 'input',
            message: 'EmployeeEmail',
            name: 'Email',
        },