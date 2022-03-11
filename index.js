const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
let headCount = 0;

const generalQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What\'s the name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What\'s the ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What\'s the email?',
    },
];

const selectRole = [
    {
        type: 'list',
        name: 'role',
        message: 'What\'s the role of this employee?',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
];

const managerQuestion = [
    {
        type: 'input',
        name: 'additional', 
        message: 'What\'s the manager\'s office number?',
    }
];

const engineerQuestion = [
    {
        type: 'input',
        name: 'additional', 
        message: 'What\'s the engineer\'s github username?',
    }
];

const internQuestion = [
    {
        type: 'input',
        name: 'additional', 
        message: 'What\'s the engineer\'s school name?',
    }
];

const addRoles = [
    {
        type: 'confirm',
        name: 'addRoles',
        message: 'Do you want to add a new role to the roster?',
        default: true,
    }
];

( async () => {
    const role = await inquirer.prompt(selectRole);
    const info1 = await inquirer.prompt(generalQuestions);

    console.log('role', role.role);

    let info2;
    let category;
    switch (role.role) {
        case 'Manager':
            info2 = await inquirer.prompt(managerQuestion);
            category = 'Office number';
            break;
        case 'Engineer':
            info2 = await inquirer.prompt(engineerQuestion);
            category = 'GitHub';
            break;
        case 'Intern':
            info2 = await inquirer.prompt(internQuestion);
            category = 'School';
            break;
    }

    const employee =  { ...role, ...info1, ...info2 };

    console.log('employee', employee);

    fs.readFile('./dist/index.html', 'utf8', (err, file) => {
        if (err) {
            throw err;
        }
        const infoCard = file
            .replace('{firstName}', employee.name)
            .replace('{role}', employee.role)
            .replace('{id}', employee.id)
            .replace('{email}', employee.email)
            .replace('{additional}', `${category}: ${employee.additional}`);
        
        fs.writeFile('./dist/demo.html', infoCard, (err) =>
            err ? console.error(err) : console.log('successfully added one employee.')
        );
    
    });
    return employee;
})()
.then(console.log)
.catch(console.error);

