#! /usr/bin/env node  
import inquirer from "inquirer";
let todos = [];
let condition = true;
// Here we use loop to repeatedly ask questions from user until condition is false.
while (condition) {
    // Asking question from users.
    let todoQuestions = await inquirer.prompt([{
            name: "firstQuestion",
            type: "input",
            message: "What do you want to add in your todos?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Do you want to add more in your todos? ",
            default: "true"
        }]);
    todos.push(todoQuestions.firstQuestion);
    // Condition is base on secondQuestion. If secondQuestion's answer is yes than
    // loop will continue if No than it will stop.
    condition = todoQuestions.secondQuestion;
    console.log(todos);
}
// Printing list of todos.
console.log("Here are our todos.");
console.log("1. " + todos[0]);
console.log("2. " + todos[1]);
console.log("3. " + todos[2]);
console.log("4. " + todos[3]);
console.log("5. " + todos[4]);
