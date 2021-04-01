const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./employmentjs/Engineer");
const Intern = require("./employmentjs/Intern");
const Manager = require("./employmentjs/Manager");

const employees = [];

function initApplication() {
    beginHtml();
    positionCard();
}

function positionCard() {
    inquirer.prompt([{
        message: "Enter team member's name",
        name: "name"
    },

    {
        type: "list",
        message: "Select position of team member",
        choices: [
            "Engineer",
            "Intern",
            "Manager",
            "Intern"
        ],
        name: "position"
    },

    {
        message: "Enter team member's identification",
        name: "id"
    },

    {
        message: "Enter email address of team member",
        name: "email"
    }])

    // .then(function()