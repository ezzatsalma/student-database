#! /usr/bin/env node
import inquirer from "inquirer";
let student = await inquirer.prompt([{
        name: "status",
        type: "list",
        message: "are you existing student or new student?",
        choices: ["new", "existing"]
    }]);
if (student.status == "existing") {
    let stdnaMe = await inquirer.prompt([{
            name: "name",
            message: "enter your name",
            type: "input",
        },
        {
            name: "id",
            message: "enter your 5 digit id",
            type: "input",
        }
    ]);
    console.log(`welcome back ${stdnaMe.name}`);
    let choice = await inquirer.prompt([{
            name: "choice",
            message: "options",
            type: "list",
            choices: ["enroll", "view balance", "pay fees", "check status"]
        }]);
    if (choice.choice == "view balance") {
        console.log("your balance is 2300rs");
    }
    else if (choice.choice == 'pay fees') {
        let stdf = Math.floor(Math.random() * 9670000) + 10000;
        console.log("your voucher id is ", stdf);
        console.log("pay 5000rs online");
    }
    else if (choice.choice == 'enroll') {
        console.log("you're enrolled in typescript");
    }
    else {
        console.log(`name=${stdnaMe.name} \n   id=${stdnaMe.id}    \n    balance=2300rs     \n  course=typescript  `);
    }
}
else {
    let stdf = Math.floor(Math.random() * 9670000) + 10000;
    let choose = await inquirer.prompt([{
            name: "name",
            type: "input",
            message: "enter name"
        }, {
            name: "choice",
            type: "list",
            message: "choose one",
            choices: ["graphic designing", "typescript", "app development"]
        }]);
    console.log(`${choose.name} welcome to ${choose.choice}`);
    let idno = Math.floor(Math.random() * 90000) + 10000;
    console.log(`your id is ${idno}`);
    let choice = await inquirer.prompt([{
            name: "choice",
            message: "options",
            type: "list",
            choices: ["enroll", "view balance", "pay fees", "check status"]
        }]);
    if (choice.choice == "view balance") {
        console.log("your balance is 2300rs");
    }
    else if (choice.choice == 'pay fees') {
        console.log("your voucher id is ", stdf);
        console.log("pay 5000rs online");
    }
    else if (choice.choice == 'enroll') {
        console.log("you're enrolled in ", choose.choice);
    }
    else {
        console.log(`name=${choose.name} \n   id=${idno}    \n    balance=2300rs     \n  course=${choose.choice}  `);
    }
}
