const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter up to 3 characters.',
      name: 'text',
    },
    {
        type: 'input',
        message: 'Please enter a color for the text!',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Please pick a shape!',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Please enter a color for the shape!',
        name: 'shapeColor',
    },
  ])
  .then((response) =>
    console.log(response)
  );
  
