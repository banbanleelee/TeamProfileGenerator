const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber) {
        let firstName;
        let id;
        let email;
        
        super(firstName, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;