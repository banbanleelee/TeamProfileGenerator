const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should create a new instance of Intern with firstName, id, email and school", () => {
        const intern = new Intern(
            "Sally", 
            20, 
            "sally@sally.com", 
            "Georgia Tech");
        expect(intern.name).toBe("Sally");
        expect(intern.id).toBe(20);
        expect(intern.email).toBe("sally@sally.com");
        expect(intern.school).toBe("Georgia Tech");
    });

    it("should throw an error if an empty input has been filled out", () => {
        expect(() => {
            new Intern().isValidIntern();
        }).toThrow();
    });

    it("should throw an error if typeof(school) is not a string", () => {
        const err = new Error(
            "Please input a string for school name."
        );
        expect(() => {
            new Intern(
                'Sally', 
                1, 
                "sally@sally.com", 
                1)
                .isValidIntern();
        }).toThrow(err);
    });

    it("should return the school name input with the getSchool() method", () => {
        const intern = new Intern(
            "Sally", 
            20, 
            "sally@sally.com", 
            "Georgia Tech"
        );
        expect(intern.getSchool()).toBe("Georgia Tech");
    });

    it("should return role with the getTitle() method", () => {
        const intern = new Intern(
            "Sally", 
            20, 
            "sally@sally.com", 
            "Georgia Tech"
        );
        expect(intern.getTitle()).toBe("Intern");
    });
});