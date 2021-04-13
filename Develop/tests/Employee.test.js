const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            const employee = new Employee('Jay', 2, 'jaybabydaddy@gmail.com');

            expect(employee.name).toEqual('Jay');
            expect(employee.id).toEqual(2);
            expect(employee.email).toEqual('jaybabydaddy@gmail.com');
        });
        it('should throw an error if provided no arguments or undefined', () => {
            const employee = () => {
                throw new Employee()
            };
            expect(employee).toThrow(Employee);
        });

        it('should throw an error if "name" is not a string', () => {
            const callBack = () => {
                throw new Employee(3, 2)
            };
            const err = new Error('Expected parameter "name" to be a non-empty string');

            expect(callBack).toThrowError(Employee, err);
        });

        it('should throw an error if not provided an id', () => {
            const callBack = () => {
                throw new Employee('Jay')
            };
            const err = new Error('Expected paramter "id" to be a non-negative number');

            expect(callBack).toThrowError(Employee, err);
        });

        it('should throw an error if "email" is not a string', () => {
            const callBack = () => {
                throw new Employee(3)
            };
            const err = new Error('Expected parameter "name" to be a non-empty string');

            expect(callBack).toThrowError(Employee, err);
        });
        it("should throw an error if 'id' is not a number", () => {
            const callBack = () => {
                throw new Employee("Jay", "2")
            };
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(callBack).toThrowError(Employee, err);
        });

        it("should throw an error if 'id' is less than 0", () => {
            const callBack = () => {
                throw new Employee("Jay", -1)
            };
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(callBack).toThrowError(Employee, err);
        });

    })
    describe('getName', () => {
        it('it should return employee name', () => {


            expect(new Employee('jay').getName()).toBe("jay");

        });
    });
    describe('getId', () => {
        it('it should return employee id', () => {

            expect(new Employee('ben', 2).getId()).toBe(2);

        });
    });
    describe('getEmail', () => {
        it('it should return employee email', () => {

            expect(new Employee('ben', 2, 'jaybabydaddy@gmail.com').getEmail()).toBe("jaybabydaddy@gmail.com");

        });
    });
    describe('getRole', () => {
        it('it should return employee role', () => {

            expect(new Employee('ben', 2, 'jaybabydaddy@gmail.com').getRole()).toBe('employee');

        });
    });
})