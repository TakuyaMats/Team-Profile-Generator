const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and github if provided valid arguments", () => {
            const engineer = new Engineer('John', 7, 'johnsmith@gmail.com', 'https://github.com/JohnSmith');

            expect(engineer._name).toEqual('John');
            expect(engineer._id).toEqual(7);
            expect(engineer._email).toEqual('johnsmith@gmail.com');
            expect(engineer._github).toEqual('https://github.com/JohnSmith');
        });
        it('should throw an error if provided no arguments or undefined', () => {
            const callBack = () => {
                throw new Engineer()
            };
            expect(callBack).toThrow(Engineer);
        });

        it('should throw an error if "name" is not a string', () => {
            const callBack = () => {
                throw new Engineer(1, 4)
            };
            const err = new Error('Expected parameter "name" to be a non-empty string');

            expect(callBack).toThrowError(Engineer, err);
        });

        it('should throw an error if not provided an id', () => {
            const callBack = () => {
                throw new Engineer('John')
            };
            const err = new Error('Expected paramter "id" to be a non-negative number');

            expect(callBack).toThrowError(Engineer, err);
        });

        it('should throw an error if "email" is not a string', () => {
            const callBack = () => {
                throw new Engineer(3)
            };
            const err = new Error('Expected parameter "email" to be a non-empty string');

            expect(callBack).toThrowError(Engineer, err);
        });
        it("should throw an error if 'id' is not a number", () => {
            const callBack = () => {
                throw new Engineer("John", "2")
            };
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(callBack).toThrowError(Engineer, err);
        });

        it("should throw an error if 'id' is less than 0", () => {
            const callBack = () => {
                throw new Engineer("John", -1)
            };
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(callBack).toThrowError(Engineer, err);
        });

        it('should throw an error if "github" is not a string', () => {
            const callBack = () => {
                throw new Engineer(7)
            };
            const err = new Error('Expected parameter "github" to be a non-empty string');

            expect(callBack).toThrowError(Engineer, err);
        });

    })
    describe('getName', () => {
        it('it should return engineers name', () => {

            expect(new Engineer('John').getName()).toBe("John");

        });
    });
    describe('getId', () => {
        it('it should return engineers id', () => {

            expect(new Engineer('John', 7).getId()).toBe(7);

        });
    });
    describe('getEmail', () => {
        it('it should return engineers email', () => {

            expect(new Engineer('John', 7, 'johnsmith@gmail.com').getEmail()).toBe("johnsmith@gmail.com");

        });
    });
    describe('getGithub', () => {
        it('it should return engineers github link', () => {

            expect(new Engineer('John', 7, 'johnsmith@gmail.com', 'https://github.com/JohnSmith').getGithub()).toBe("https://github.com/JohnSmith");

        });
    });
    describe('getRole', () => {
        it('it should return engineers role', () => {

            expect(new Engineer('John', 7, 'johnsmith@gmail.com', 'https://github.com/JohnSmith').getRole()).toEqual('engineer');

        });
    });
});