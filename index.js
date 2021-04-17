const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const util = require('util');
const generateHTML = require('./src/generateHTML');
const inquirer = require('inquirer');
const fs = require('fs');


//create empty array to push team members generated into
let teamArrayRow1 = [];
let teamArrayRow2 = [];


const writeFileAsync = util.promisify(fs.writeFile);

function createTeam() {
    inquirer.prompt([{
        type: "list",
        name: "employee",
        message: "Which employee would you like to add to your team?",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "I do not want to add any more team members"
        ]
    }]).then(data => {
        switch (data.employee) {
            case "Manager":
                askManager();
                break;
            case "Engineer":
                askEngineer();
                break;
            case "Intern":
                askIntern();
                break;
            case "I do not want to add any more team members":
                print();
                break;
        }
    })
}

function askManager() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: "Please enter your team Manager's name.",
        validate: answer => {
            if (answer !== "") {
                return true;
            } else {
                return "Please enter at least one Character.";
            }
        }
    }, {
        type: 'input',
        name: 'id',
        message: "Please enter your Manager's ID.",
        validate: answer => {
            const regEx = /^[1-9]\d*$/;
            const pass = answer.match(regEx);
            if (pass) {
                return true;
            } else {
                return "Please enter at least one digit."
            }
        }
    }, {
        type: 'input',
        name: 'email',
        message: "Please enter your Manager's email address.",
        default: () => {},
        validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                return "Please enter a valid email!"
            }
        }
    }, {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter your Manager's officer number.",
        validate: answer => {
            const regEx = /^[1-9]\d*$/;
            const pass = answer.match(regEx);
            if (pass) {
                return true;
            } else {
                return "Please enter at least one digit."
            }
        }
    }, {
        type: 'list',
        name: 'role',
        message: 'Please choose what kind of team member you would like to add to your team',
        choices: [
            "Engineer",
            "Intern",
            "I do not want to add any more team members"
        ]
    }]).then(data => {
        let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        teamArrayRow1.push(manager);
        switch (data.role) {
            case "Manager":
                askManager()
                break;
            case "Engineer":
                askEngineer()
                break;
            case "Intern":
                askIntern()
                break;
            case "I do not want to add any more team members":
                print()
                break;
        }
    })
}

function askIntern() {
    inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: "Please enter your Intern's name.",
            validate: answer => {
                if (answer !== "") {
                    return true;
                } else {
                    return "Please enter at least one Character.";
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter your Intern's ID.",
            validate: answer => {
                const regEx = /^[1-9]\d*$/;
                const pass = answer.match(regEx);
                if (pass) {
                    return true;
                } else {
                    return "Please enter at least one digit."
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your Intern's email address.",
            default: () => {},
            validate: function (email) {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    return "Please enter a valid email!"
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter your Intern's school name.",
            validate: answer => {
                if (answer !== "") {
                    return true;
                } else {
                    return "Please enter at least one Character.";
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'Please choose what kind of team member you would like to add to your team',
            choices: [
                "Engineer",
                "Manager",
                "I do not want to add any more team members"
            ]
        }
    ]).then(data => {
        let intern = new Intern(data.name, data.id, data.email, data.school);
        teamArrayRow1.push(intern);
        switch (data.role) {
            case "Manager":
                askManager()
                break;
            case "Engineer":
                askEngineer()
                break;
            case "Intern":
                askIntern()
                break;
            case "I do not want to add any more team members":
                print();
                break;
        }
    })
}

function askEngineer() {
    inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: "Please enter your Engineer's name.",
            validate: answer => {
                if (answer !== "") {
                    return true;
                } else {
                    return "Please enter at least one Character.";
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter your Engineer's ID.",
            validate: answer => {
                const regEx = /^[1-9]\d*$/;
                const pass = answer.match(regEx);
                if (pass) {
                    return true;
                } else {
                    return "Please enter at least one digit."
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your Engineer's email address.",
            default: () => {},
            validate: function (email) {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    return "Please enter a valid email!"
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter your Engineer's github username.",
            validate: answer => {
                if (answer !== "") {
                    return true;
                } else {
                    return "Please enter at least one Character.";
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'Please choose what kind of team member you would like to add to your team',
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "I do not want to add any more team members"
            ]
        }
    ]).then(data => {
        let engineer = new Engineer(data.name, data.id, data.email, data.github);
        teamArrayRow2.push(engineer);
        switch (data.role) {
            case "Manager":
                askManager()
                break;
            case "Engineer":
                askEngineer()
                break;
            case "Intern":
                askIntern()
                break;
            case "I do not want to add any more team members":
                print();
                break;
        }
    })
}

const print = () => {

    let html = generateHTML(teamArrayRow1, teamArrayRow2);
    console.log(html)
    writeFileAsync('./dist/index.html', html)
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
}

const init = () => {
    createTeam();
}

init()