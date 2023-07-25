const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes");

const questions = [
  {
    type: "list",
    message: "What shape would you like?",
    choices: ["Circle", "Square", "Triangle"],
    name: "shape"
  },
  {
    type: "input",
    message: "What color would you like for your shape?",
    name: "shapecolor"
  },
  {
    type: "input",
    message: "What text would you like? (Please input 3 characters!)",
    name: "text"
  },
  {
    type: "input",
    message: "What color would you like for your text?",
    name: "textcolor"
  },
];

inquirer.prompt(questions).then(res=>{
  let shape;
  if(res.shape==="Circle"){
      shape=new Circle(res.shapecolor, res.text, res.textcolor)
  };
  if(res.shape==="Triangle"){
      shape=new Triangle(res.shapecolor, res.text, res.textcolor)
  }; 
  if(res.shape==="Square"){
      shape=new Square(res.shapecolor, res.text, res.textcolor)
  };
  fs.writeFileSync("./examples/logo.svg",shape.render())
})
