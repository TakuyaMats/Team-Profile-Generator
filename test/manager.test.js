const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Intialization", () => {
        it("should create an object with a name, id, email, and officeNumber if provided valid arguments", () => {
            const manager = new Manager('Tak', 3, 'theRealTak@gmail.com', 20);

            expect(manager.name).toEqual('Tak');
            expect(manager.id).toEqual(3);
            expect(manager.email).toEqual('theRealTak@gmail.com');
            expect(manager.officeNumber).toEqual(20);
        });
        it('should throw an error if provided no arguments or undefined', () => {
            const manager = () => {
                throw new Manager()
            };
            expect(manager).toThrow(Manager);
        });

        it('should throw an error if "name" is not a string', () => {
            const callBack = () => {
                throw new Manager(1, 4)
            };
            const err = new Error('Expected parameter "name" to be a non-empty string');

            expect(callBack).toThrowError(Manager, err);
        });

        it('should throw an error if not provided an id', () => {
            const callBack = () => {
                throw new Manager('Tak')
            };
            const err = new Error('Expected paramter "id" to be a non-negative number');

            expect(callBack).toThrowError(Manager, err);
        });

        it('should throw an error if "email" is not a string', () => {
            const callBack = () => {
                throw new Manager(3)
            };
            const err = new Error('Expected parameter "name" to be a non-empty string');

            expect(callBack).toThrowError(Manager, err);
        });
        it("should throw an error if 'id' is not a number", () => {
            const callBack = () => {
                throw new Manager("Tak", "2")
            };
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(callBack).toThrowError(Manager, err);
        });

        it("should throw an error if 'id' is less than 0", () => {
            const callBack = () => {
                throw new Manager("Tak", -1)
            };
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(callBack).toThrowError(Manager, err);
        });
        it('should throw an error if not provided an officerNumber', () => {
            const callBack = () => {
                throw new Manager('Tak')
            };
            const err = new Error('Expected paramter "officeNumber" to be a non-negative number');

            expect(callBack).toThrowError(Manager, err);
        });
        it("should throw an error if 'officeNumber' is not a number", () => {
            const callBack = () => {
                throw new Manager("Tak", "2")
            };
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");

            expect(callBack).toThrowError(Manager, err);
        });

        it("should throw an error if 'officeNumber' is less than 0", () => {
            const callBack = () => {
                throw new Manager("Tak", -1)
            };
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");

            expect(callBack).toThrowError(Manager, err);
        });


    })
    describe('getName', () => {
        it('it should return manager name', () => {


            expect(new Manager('tak').getName()).toBe("tak");

        });
    });
    describe('getId', () => {
        it('it should return manager id', () => {

            expect(new Manager('Tak', 2).getId()).toBe(2);

        });
    });
    describe('getEmail', () => {
        it('it should return manager email', () => {

            expect(new Manager('Tak', 2, 'theRealTak@gmail.com', 20).getEmail()).toBe("theRealTak@gmail.com");

        });
    });
    describe('getRole', () => {
        it('it should return manager role', () => {

            expect(new Manager('Tak', 2, 'theRealTak@gmail.com', 20).getRole()).toEqual('manager');

        });
    });
})