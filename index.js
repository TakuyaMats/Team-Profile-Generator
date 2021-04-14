const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const Manager = require("../lib/manager");
const inquirer = require('inquirer');
const fs = require('fs');

//create empty array to push team members generated into
// const generatedTeamArray = [];

//set up practice to make sure everything is working

// console.log(generatedTeamArray);

// function init() {
//     getTeamInfo();
// }


// function getTeamInfo() {

//     inquirer.prompt([{
//             type: 'input',
//             name: 'teamName',
//             message: 'Every great team needs a Team Name:'

//         },

//     ]).then((data) => {
//         const teamName = data.teamName
//         generatedTeamArray.push(teamName)
//         askManager();
//     })


// }

// function askManager() {
//     inquirer.prompt([

//         {
//             type: 'input',
//             name: 'name',
//             message: "Every great team has a great manager! Please Enter your team manager's name",
//         },

//         {
//             type: 'input',
//             name: 'email',
//             message: "Please enter your Manager's email"
//         },
//         {
//             type: 'number',
//             name: 'officeNumber',
//             message: "What is your team manager's officer number?"
//         },
        // {
        //     type: 'list',
        //     name: ' role',
        //     message: 'Please choose what kind of team member you would like to add to your team',
        //     choices: ['Manager', 'Engineer','Intern'],

        // },

//     ]).then((data) => {
//         const name = data.name;
//         const id = 1;
//         const email = data.email;
//         const officeNumber = data.officeNumber;
//         const teamMember = new Manager(name, id, email, officeNumber);
//         generatedTeamArray.push(teamMember)
//         console.log(generatedTeamArray)
//         //create teamMemberBuilder()


//     })

// };
// const teamBuilder = () => {
//     inquirer.createPromptModule([{
//             type: 'list',
//             name: ' role',
//             message: 'Please choose what kind of team member you would like to add to your team',
//             choices: ['Manager', 'Engineer', 'Intern'],

//         },

//     ])
// }

//create teamMemberBuilder()
//create conditional or switch statements
//create cases 
//intern, engineer, manager
//case a -intern
//case b  - engineer 
//return  getEngineer()
// const getEngineer = () => {
//     inquirer.prompt(
//         [{
//                 type: "input",
//                 name: 'name',
//                 message: "what is your interns name"
//             },

//         ]
//     )

// }

//create engineer function
//inquirer.prompt()
//questions prompt
//return promise .then()
//const for name,id,email, github
//create new instance 
//push to array
//call next function


//create intern function
//inquirer.prompt()
//questions prompt
//return promise .then()
//const name id email school
//create new instance
//push to array
//call next function


// const questions = [ 
//     {
//     type: 'input',
//     name: 'employee',
//     message: "What kind of employee do you want on your team?",
//     validate: function (answer) {
//         if (answer.length < 1) {
//             return console.log('Please enter the type of employee you would like on your team')
//         }
//     }
// }]


// function generateHtml() {
//     `jumbotron/title area`



//     addHtml()
// }

// const addHtml = () => {

// }

//create function to write HTML file
// function writeToFile(fileName, data) {
//     //sets up shell to create a new file to file system
//     fs.writeFile(fileName, data, (err) => {
//         //tracks errors
//         err ? console.error(err) : console.log('successfully created new html file with team members names')
//     });
// }

//function to initialize app
// function init(){
//     //call inquirer npm and run the prompt
//     //return promise with data when prompt completes

//     // inquirer.prompt(questions).then(function(data){

//     //     //create teamHtml variable set value to generateHtml function (data);
//     //     const teamHtml = generateHtml(data);
//     //     //call writeToFile function to create an html file in the Dist folder with the data stored in teamHtml
//     //     writeToFile('./Dist/index.html', teamHtml);

//     // })

// }
// //run app by calling init();
// init();