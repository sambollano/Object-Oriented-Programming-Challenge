const intern = require('./Employee');


class Employee extends Character {
    constructor(name, job) {
        super(name);
    }
}

module.exports = Employee;