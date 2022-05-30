const nodemailer = require('nodemailer');

const standupData = [
    {name: 'A',
     tasks: [{taskName: 'fix bug', status: 'active'},
             {taskName: 'new feature', status: 'complete'}
            ],
    }
    {name: 'B',
    tasks: [{taskName: 'fix a bug', status: 'complete'},
            {taskName: 'another new feature', status: 'active'}
            ],
    }
];

const namesOfDevelopers = standupData.map((elem) => elem.name);
const listOfTasks = standupData.map((elem) => elem.tasks.map(task => task.status));
console.log(listOfTasks);


//data => data of another format
//anarray of objects => one email string