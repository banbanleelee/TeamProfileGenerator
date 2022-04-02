class Employee {
    constructor(firstName, id, email, title) {
        this.firstName = firstName;
        this.id = id;
        this.email = email;
        this.title = title;
    }

    getName() {
        return this.firstName;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getTitle() {
        return (this.title = 'Employee');
    }

    isValidEmployee() {
        if (this.firstName === ""|| typeof(this.firstName) !== 'string') {
            throw new Error ('Please fill in a non-empty string');
        }
        
        if (this.id < 0 || typeof(this.id) !== 'number') {
            throw new Error ('Please fill in a non-negative number');
        }

        if (!this.email === "" || typeof(this.email) !== 'string') {
            throw new Error ('Please fill in a non-empty string');
        }
    }

}

module.exports = Employee;