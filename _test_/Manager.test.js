const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should create a new instance of Manager with firstName, id, email and officeNumber", () => {
        const manager = new Manager(
            "Sally", 
            20, 
            "sally@sally.com", 
            123);
        expect(manager.name).toBe("Sally");
        expect(manager.id).toBe(20);
        expect(manager.email).toBe("sally@sally.com");
        expect(manager.github).toBe(123);
    });

    it("should throw an error if officeNumber is not a number", () => {
        const err = new Error(
        "Please input a number for office number."
        );
        // Assert
        expect(() => {
            new Manager(
                "Sally", 
                20, 
                "sally@sally.com", 
                "123"
            ).isValidManager();
        }).toThrow(err);
  });

    it("should throw an error if officeNumber is a negative number", () => {
        const err = new Error(
            "Please input a non-negative office number."
        );
        expect(() => {
            new Manager(
                "Sally", 
                20, 
                "sally@sally.com", 
                -1
            ).isValidEmployee();
        }).toThrow(err);
    });

    it("should return the office number input with the getOfficeNumber() method", () => {
        const manager = new Manager(
            "Sally", 
            20, 
            "sally@sally.com", 
            123
        );
        expect(manager.getOfficeNumber()).toBe(123);
    });

    it("should return role with the getTitle() method", () => {
        const manager = new Manager(
            "Sally", 
            20, 
            "sally@sally.com", 
            123
        );
        expect(manager.getTitle()).toBe("Manager");
    });
});