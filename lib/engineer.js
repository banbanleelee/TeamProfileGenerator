const Employee = require('./employee');

class Engineer extends Employee {
    constructor(firstName, id, email, gitHub) {
        super(firstName, id, email, 'Engineer');
        this.gitHub = gitHub;
        this.title = 'Engineer';
    }

    getGithub() {
        return this.gitHub;
    }

    getTitle() {
        return this.title;
    }

    isValidEngineer() {
        if (this.github === '' || typeof(this.gitHub) !== 'string') {
            throw new Error ('Please fill in a non-empty string');
        }
        this.isValidEmployee();
    }
}

module.exports = Engineer;