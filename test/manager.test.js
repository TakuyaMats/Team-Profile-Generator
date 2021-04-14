const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and officeNumber if provided valid arguments", () => {
            const manager = new Manager('Takuya', 5, 'takomats@hotmail.com', 30);

            expect(manager._name).toEqual('Takuya');
            expect(manager._id).toEqual(5);
            expect(manager._email).toEqual('takomats@hotmail.com');
            expect(manager._officeNumber).toEqual(30);
        });
        it('should throw an error if provided no arguments or undefined', () => {
            const callBack = () => {
                throw new Manager()
            };
            expect(callBack).toThrow(Manager);
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
                throw new Manager('Takuya')
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
                throw new Manager("Takuya", "2")
            };
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(callBack).toThrowError(Manager, err);
        });

        it("should throw an error if 'id' is less than 0", () => {
            const callBack = () => {
                throw new Manager("Takuya", -1)
            };
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(callBack).toThrowError(Manager, err);
        });
        //officenumber test
        it('should throw an error if not provided an officerNumber', () => {
            const callBack = () => {
                throw new Manager('Takuya')
            };
            const err = new Error('Expected paramter "officeNumber" to be a non-negative number');

            expect(callBack).toThrowError(Manager, err);
        });
        it("should throw an error if 'officeNumber' is not a number", () => {
            const callBack = () => {
                throw new Manager("Takuya", "5")
            };
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");

            expect(callBack).toThrowError(Manager, err);
        });

        it("should throw an error if 'officeNumber' is less than 0", () => {
            const callBack = () => {
                throw new Manager("Takuya", -1)
            };
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");

            expect(callBack).toThrowError(Manager, err);
        });


    })
    describe('getName', () => {
        it('it should return manager name', () => {


            expect(new Manager('Takuya').getName()).toBe("Takuya");

        });
    });
    describe('getId', () => {
        it('it should return manager id', () => {

            expect(new Manager('Takuya', 5).getId()).toBe(5);

        });
    });
    describe('getEmail', () => {
        it('it should return manager email', () => {

            expect(new Manager('Takuya', 5, 'takomats@hotmail.com', 30).getEmail()).toBe("takomats@hotmail.com");

        });
    });
    describe('getRole', () => {
        it('it should return manager role', () => {

            expect(new Manager('Takuya', 5, 'takomats@hotmail.com', 30).getRole()).toEqual('manager');

        });
    });

})