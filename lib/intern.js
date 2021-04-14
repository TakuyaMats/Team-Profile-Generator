const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this._school = school;
    };

    getSchool() {
        return this._school;
    };

    getRole() {
        return 'intern'
    };
}

module.exports = Intern;