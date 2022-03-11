const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {
        let firstName;
        let id;
        let email;
        
        super(firstName, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;