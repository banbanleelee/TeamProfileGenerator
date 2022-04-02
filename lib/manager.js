const Employee = require('./employee');

class Manager extends Employee {
    constructor(firstName, id, email, officeNumber) {
        super(firstName, id, email), 'Manager';
        this.officeNumber = officeNumber;
        this.title = 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getTitle() {
        return this.title;
    }

    isValidManager() {
        if (this.officeNumber < 0 || typeof(this.officeNumber) !== 'number') {
            throw new Error ('Please fill in a non-negative number');
        }
        this.isValidEmployee();
    }
}

module.exports = Manager;