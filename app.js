const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const Inquirer = require("./lib/Inquirer");


const {
    Empoloyees,
    Empoloyeesquestions,
    ManagerQuestions,
    EngineerQuestions,
    InternQuestions
} = require("./lib/Inquire");
const inquire = require("./lib/Questions.js");
const Employee = require("./lib/Employee.js");
const { managerQuestions, defineEmployee, internQuestions, engineerQuestions } = require("./lib/Questions.js");


function init() {
    inquire
    .prompt(Empoloyeesquestions.contcat(managerQuestions))
    .then(({name, id, email, officeNumber}) => {
        let manager = new Manager(name, id, email, officeNumber);
        employeeArray.push(manager);
        getEmployee();
    })
}

  function getEmployee() {
      inquirer
      .prompt(defineEmployee)
      .then(({userChoice}) => {
          switch (userChoice) {
            case 'intern':
            getIntern();
            break;
            case 'Complete':
            htmlRenderer(employeeArray);
            break;
            case 'Engineer':
            getEngineer();
            break;
          }
      })
    }

    function getIntern() {
        inquire
        .prompt(Empoloyeesquestions.concat(internQuestions))
        .then(({name, id, email, school}) => {
            let intern = new Intern(name, id, email, school);
            employeeArray.push(intern)
            getEmployee();
        }) 
    }

    function getEngineer() {
        inquire
        .prompt(employeeQuestions.concat(engineerQuestions))
        .then(({name, id, email, githubUsername}) => {
            let engineer = new Engineer(name, id, email, githubUsername);
            employeeArray.push(engineer);
            getEmployee();
        })
    }

    init();