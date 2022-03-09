const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

const team = []

function createTeam() {
  console.log("Build your team!")
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?",
      },
    ])
    .then(answers => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      )
      team.push(manager)
    })
    .then(answer => {
      if (answer.memberChoice === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "engineerName",
              message: "What is your engineer's name?",
            },
            {
              type: "input",
              name: "engineerId",
              message: "What is your engineer's id?",
            },
            {
              type: "input",
              name: "engineerEmail",
              message: "What is your engineer's email?",
            },
            {
              type: "input",
              name: "engineerGithub",
              message: "What is your engineer's GitHub username?",
            },
          ])
          .then(answers => {
            const engineer = new Engineer(
              answers.engineerName,
              answers.engineerId,
              answers.engineerEmail,
              answers.engineerGithub
            )
            team.push(engineer)
          })
          .then(() => {
            inquirer.prompt([
              {
                type: "list",
                name: "memberChoice",
                message: "Which type of team member would you like to add?",
                choices: [
                  "Engineer",
                  "Intern",
                  "I don't want to add any more team members",
                ],
              },
            ])
          })
      }
      if (answer.memberChoice === "Intern") {
        // intern questions here
      }
    })
}

createTeam()
