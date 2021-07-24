const Employee = require("./Employee");
const intern = require("../__tests__/Intern.test");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    } 
}

module.exports = Intern;