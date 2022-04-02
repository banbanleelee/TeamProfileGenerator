const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

let teamMembers = [];

const generalQuestions = [
    {
        type: 'list',
        name: 'title',
        message: 'Select the title of this employee',
        choices: ['Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'firstName',
        message: 'Enter employee\'s first name',
    },
    {
        type: 'number',
        name: 'id',
        message: 'Enter employee\'s id',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter employee\'s email',
    },
];


const managerQuestions = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Enter manager\'s first name',
    },
    {
        type: 'number',
        name: 'id',
        message: 'Enter manager\'s id',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter manager\'s email',
    },
    {
        type: 'number',
        name: 'officeNumber', 
        message: 'Enter manager\'s office number',
    },
];

const engineerQuestion = [
    {
        type: 'input',
        name: 'gitHub', 
        message: 'What\'s the engineer\'s github username?',
    }
];

const internQuestion = [
    {
        type: 'input',
        name: 'school', 
        message: 'What\'s the intern\'s school name?',
    }
];

const newEmployeeQuestion = [
    {
        type: 'confirm',
        name: 'addNewEmployee',
        message: 'Do you want to add a new role to the roster?',
    }
];

createManager = () => {
    inquirer
        .prompt(managerQuestions)
        .then((data) => {
            const manager = new Manager(
                data.firstName,
                data.id,
                data.email,
                data.officeNumber
            );
            manager.isValidManager();
            console.log(`New staff: \n First name: ${manager.firstName} \n Title: ${manager.title} \n ID: ${manager.id} \n Email: ${manager.email} \n Office Number: ${manager.officeNumber}`);
            teamMembers.push(manager);
            console.log('teamMembers', teamMembers);
            createNewEmployee();
        })
};

createEmployee = () => {
    inquirer
        .prompt(generalQuestions)
        .then((data) => {
            if(data.title === 'Engineer') {
                getGitHub(data);
            } else {
                getSchool(data);
            }
        })
};

getGitHub = (data) => {
    inquirer
        .prompt(engineerQuestion)
        .then((data1) => {
            data.gitHub = data1.gitHub;
            const engineer = new Engineer(
                data.firstName,
                data.id,
                data.email,
                data.gitHub
            );
            engineer.isValidEngineer();
            console.log(`New staff: \n First name: ${engineer.firstName} \n Title: ${engineer.title} \n ID: ${engineer.id} \n Email: ${engineer.email} \n GitHub Username: ${engineer.gitHub}`)
            teamMembers.push(engineer);
            console.log('teamMembers', teamMembers);
            createNewEmployee();
        })
};

getSchool = (data) => {
    inquirer
        .prompt(internQuestion)
        .then((data1) => {
            data.school = data1.school;
            const intern = new Intern(
                data.firstName,
                data.id,
                data.email,
                data.school
            );
            intern.isValidIntern();
            console.log(`New staff: \n First name: ${intern.firstName} \n Title: ${intern.title} \n ID: ${intern.id} \n Email: ${intern.email} \n School Name: ${intern.school}`)
            teamMembers.push(intern);
            console.log('teamMembers', teamMembers);
            createNewEmployee();
        })
};

const createNewEmployee = () => {
    inquirer
        .prompt(newEmployeeQuestion)
        .then((data) => {
            if (data.addNewEmployee) {
                createEmployee();
            } else {
                fs.readFile('dist/index.js', 'utf8', (error, data) => {
                    if (error) {
                        console.error(error);
                    } 
                    const update = data.replace('{teamMembers}', JSON.stringify(teamMembers));
                    fs.writeFile('dist/demo.js', update, "utf8", function (error) {
                        error ? console.error(error) : console.log('Commit logged!')
                    });
                });
            }
        })
};

createManager();
