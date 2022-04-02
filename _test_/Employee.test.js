const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should create a new instance of Employee with firstName, id, email and title", () => {
        const employee = new Employee(
            "Sally", 
            20, 
            "sally@sally.com", 
            "Employee");
        expect(employee.name).toBe("Sally");
        expect(employee.id).toBe(20);
        expect(employee.email).toBe("sally@sally.com");
        expect(employee.title).toBe("Employee");
    });

    it("should throw an error if an empty input has been filled out", () => {
        expect(() => {
            new Employee().isValidEmployee();
        }).toThrow();
    });

    it("should throw an error if typeof(firstName) is not a string", () => {
        const err = new Error(
            "Please input a string for first name."
        );
        expect(() => {
            new Employee(
                0, 
                20, 
                "sally@sally.com", 
                "Employee"
            ).isValidEmployee();
        }).toThrow(err);
    });

   it("should throw an error if id is not a number", () => {
        const err = new Error(
            "Please input a numeric id."
        );
        expect(() => {
            new Employee(
                "Sally", 
                "20", 
                "sally@sally.com", 
                "Employee"
            ).isValidEmployee();
        }).toThrow(err);
    });

    it("should throw an error if id is a negative number", () => {
        const err = new Error(
            "Please input a non-negative id."
        );
        expect(() => {
            new Employee(
                "Sally", 
                -1, 
                "sally@sally.com", 
                "Employee"
            ).isValidEmployee();
        }).toThrow(err);
    });

    it("should throw an error if typeof(email) is not a string", () => {
        const err = new Error(
            "Please input a string for email."
        );
        expect(() => {
            new Employee(
                "Sally", 
                20, 
                12, 
                "Employee"
            ).isValidEmployee();
        }).toThrow(err);
    });

    it("should return firstName with the getName() method", () => {
        const employee = new Employee(
            "Sally", 
            20, 
            "sally@sally.com", 
            "Employee"
        );
        expect(employee.getName()).toEqual("Sally");
    });

    it("should return id with the getId() method", () => {
        const employee = new Employee(
            "Sally", 
            20, 
            "sally@sally.com", 
            "Employee"
        );
        expect(employee.getId()).toEqual(20);
    });

    it("should return email with the getEmail() method", () => {
        const employee = new Employee(
            "Sally", 
            20, 
            "sally@sally.com", 
            "Employee"
        );
        expect(employee.getEmail()).toEqual("sally@sally.com");
    });

    it("should return role with the getTitle() method", () => {
        const employee = new Employee(
            "Sally", 
            20, 
            "sally@sally.com", 
            "Employee"
        );
        expect(employee.getTitle()).toEqual("Employee");
    });
});