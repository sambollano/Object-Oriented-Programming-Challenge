const inquire = {
    defineEmployee: [
        {
            type: "list",
            message: "Team Members Role",
            name: 'userChoice',
            choices: [ "Manager", "Intern", "Engineer" ],
        }
    ],

    questionsEmployee: [
        {
            type: 'input',
            message: "Team Members Name?",
            name: "name"
        },
        {
            type: 'input',
            message: "Team Members Id Number?",
            name: "id"
        },
        {
            type: 'input',
            message: "Team Members Id Email?",
            name: "Email"
        },
    ],

    engineerQuestions: [
        {
            type: 'input',
            message: "Team Members Github?",
            name: "githubUserName"
        },
    ],

    managerQuestions: [
        {
            type: 'input',
            message: "Office Number?",
            name: "officeNumber"
        },
    ],

    internQuestions: [
        {
            type: 'input',
            message: "School Name?",
            name: "SchoolName"
        },
    ],
};

module.exports = inquire;