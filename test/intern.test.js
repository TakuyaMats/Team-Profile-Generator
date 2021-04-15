const Intern = require("../lib/intern");

describe("intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and school if provided valid arguments", () => {
            const intern = new Intern('Joe', 2, 'Joebel@gmail.com', 'Rutgers');

            expect(intern._name).toEqual('Joe');
            expect(intern._id).toEqual(2);
            expect(intern._email).toEqual('Joebel@gmail.com');
            expect(intern._school).toEqual('Rutgers');
        });
        it('should throw an error if provided no arguments or undefined', () => {
            const callBack = () => {
                throw new Intern()
            };
            expect(callBack).toThrow(Intern);
        });

        it('should throw an error if "name" is not a string', () => {
            const callBack = () => {
                throw new Intern(1, 4)
            };
            const err = new Error('Expected parameter "name" to be a non-empty string');

            expect(callBack).toThrowError(Intern, err);
        });

        it('should throw an error if not provided an id', () => {
            const callBack = () => {
                throw new Intern('Joe')
            };
            const err = new Error('Expected paramter "id" to be a non-negative number');

            expect(callBack).toThrowError(Intern, err);
        });

        it('should throw an error if "email" is not a string', () => {
            const callBack = () => {
                throw new Intern(3)
            };
            const err = new Error('Expected parameter "email" to be a non-empty string');

            expect(callBack).toThrowError(Intern, err);
        });
        it("should throw an error if 'id' is not a number", () => {
            const callBack = () => {
                throw new Intern("Joe", "2")
            };
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(callBack).toThrowError(Intern, err);
        });

        it("should throw an error if 'id' is less than 0", () => {
            const callBack = () => {
                throw new Intern("Joe", -1)
            };
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(callBack).toThrowError(Intern, err);
        });

        it('should throw an error if "school" is not a string', () => {
            const callBack = () => {
                throw new Intern(2)
            };
            const err = new Error('Expected parameter "school" to be a non-empty string');

            expect(callBack).toThrowError(Intern, err);
        });

    })
    describe('getName', () => {
        it('it should return interns name', () => {

            expect(new Intern('Joe').getName()).toBe("Joe");

        });
    });
    describe('getId', () => {
        it('it should return interns id', () => {

            expect(new Intern('Joe', 2).getId()).toBe(2);

        });
    });
    describe('getEmail', () => {
        it('it should return interns email', () => {

            expect(new Intern('Joe', 2, 'Joebel@gmail.com').getEmail()).toBe("Joebel@gmail.com");

        });
    });
    describe('getSchool', () => {
        it('it should return interns school link', () => {

            expect(new Intern('Joe', 2, 'Joebel@gmail.com', 'Rutgers').getSchool()).toBe("Rutgers");

        });
    });
    describe('getRole', () => {
        it('it should return interns role', () => {

            expect(new Intern('Joe', 2, 'Joebel@gmail.com', 'Rutgers').getRole()).toEqual('intern');

        });
    });
});