// Packages needed for applications
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generateHTML = require('./generateHTML');
// const { listenerCount } = require('process');

// Command-line questions
const questions = [ {
    type: 'input',
    message: 'What is their name?',
    name: 'name'
},
{
    type: 'list',
    message: 'What is their title?',
    choices: ['Manager','Engineer','Intern'],
    name: 'title'
},
{
    type: 'input',
    message: 'What is their employee ID?',
    name: 'id'
},
{
    type: 'input',
    message: 'What is their email?',
    name: 'email'
}
];

const employeeList = [];

// Function to initialize app
function init() {
    inquirer
        .prompt(questions) //get basic info
        .then((data1) => { //depending on what they input for title, ask another question
            messageText = ''; //variable for what that question will be
            if (data1.title === 'Manager') {
                messageText = 'What is their office number?';
            }
            if (data1.title === 'Engineer') {
                messageText = 'What is their Github username?';
            }
            if (data1.title === 'Intern') {
                messageText = 'What school did they attend?';
            }
            inquirer //ask that question
            .prompt({
                type: 'input',
                message: messageText,
                name: 'extraQuestion'
            }).then((data2) => { //---package the data into a class
                //figure out what the title is again, since we dont remember because we are in a new then
               let employee;
               
                if (data1.title === 'Manager') {
                    employee = new Manager(data1.name, data1.id, data1.email, data2.extraQuestion);
                } else if (data1.title === 'Engineer') {
                    employee = new Engineer(data1.name, data1.id, data1.email, data2.extraQuestion);
                } else if (data1.title === 'Intern') {
                    employee = new Intern(data1.name, data1.id, data1.email, data2.extraQuestion);
                }

                //add this class to the employees[]
                employeeList.push(employee);

                //ask if we should do this all agin
                inquirer.prompt({
                    type: 'list',
                    message: 'Add another employee?',
                    choices: ['yes','no'],
                    name: 'newMember'
                }).then((data3) => {
                    if (data3.newMember === 'yes') {
                        //run loop again
                        init();
                    } else {
                        //generate html
                        generateHTML(employeeList);
                        console.log(employeeList);
                    }
                })
            });
        });
                
};

// Calling function to initialize app
console.log('Initizalizing..')
init();