const Employee = require("./Employee");
const intern = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber = "Manager") {
        super(name, id, email)
        this. officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;