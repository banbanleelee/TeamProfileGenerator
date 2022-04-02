const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should create a new instance of Engineer with firstName, id, email and github", () => {
        const engineer = new Engineer(
            "Sally", 
            20, 
            "sally@sally.com", 
            "banbanleelee");
        expect(engineer.name).toBe("Sally");
        expect(engineer.id).toBe(20);
        expect(engineer.email).toBe("sally@sally.com");
        expect(engineer.github).toBe("banbanleelee");
    });

    it("should throw an error if an empty input has been filled out", () => {
        expect(() => {
            new Engineer().isValidEngineer();
        }).toThrow();
    });

    it("should throw an error if typeof(gitHub) is not a string", () => {
        const err = new Error(
            "Please input a string for gitHub username."
        );
        expect(() => {
            new Engineer(
                'Sally', 
                1, 
                "sally@sally.com", 
                1)
                .isValidEngineer();
        }).toThrow(err);
    });

    it("should return the gitHub input with the getGithub() method", () => {
        const engineer = new Engineer(
            "Sally", 
            20, 
            "sally@sally.com", 
            "banbanleelee"
        );
        expect(engineer.getGithub()).toBe("banbanleelee");
    });

    it("should return role with the getTitle() method", () => {
        const engineer = new Engineer(
            "Sally", 
            20, 
            "sally@sally.com", 
            "banbanleelee"
        );
        expect(engineer.getTitle()).toBe("Engineer");
    });
});