const Employee = require('./employee');

class Intern extends Employee {
    constructor(firstName, id, email, school) {
        super(firstName, id, email, 'Intern');
        this.school = school;
        this.title = 'Intern';
    }

    getSchool() {
        return this.school;
    }

    getTitle() {
        return this.title;
    }

    isValidIntern() {
        if (this.school === '' || typeof(this.school) !== 'string') {
            throw new Error ('Please fill in a non-empty string');
        }
        this.isValidEmployee();
    }
}

module.exports = Intern;