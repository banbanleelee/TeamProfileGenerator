const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
        let firstName;
        let id;
        let email;
        
        super(firstName, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;