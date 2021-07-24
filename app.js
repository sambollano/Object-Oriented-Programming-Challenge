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


function init() {
    startHtml();
    addMembers();
}

  function addMembers() {
      inquirer.prompt([{
          type: "input",
          message: "Team Members Role",
          choices: [
              "Manager",
              "Intern",
              "Engineer"
          ],
          name: "role"
        },
        {
          message: "EmployeeId",
          name: "Id",
        },
        {
          message: "EmployeeEmail",
          name: "Email",
        },
       ]);

    // TODO: Create a function to write README file
function writeToFile(fileName, data) {

    const generatedFile = game.js(response)  
     
     console.log(generatedFile);
    };
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, err => {
            if (err)
                throw new Error(err);
            console.log("Readme is successfully created")
    })
}

// TODO: Create a function to initialize app
function init() {
        inquirer.prompt(questions)
        .then((inquirerResponse) => {   
            console.log("Generated");
        })
        .catch((err) => {
            console.log(err);
        })
      }}