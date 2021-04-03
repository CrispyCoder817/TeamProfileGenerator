const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

function initApplication() {
  beginHtml();
  positionCard();
}

function positionCard() {
  inquirer
    .prompt([
      {
        message: "Enter team member's name",
        name: "name",
      },

      {
        type: "list",
        message: "Select position of team member",
        choices: ["Engineer", "Intern", "Manager"],
        name: "position",
      },

      {
        message: "Enter team member's identification",
        name: "id",
      },

      {
        message: "Enter email address of team member",
        name: "email",
      },
    ])

    .then(function ({ name, role, id, email }) {
      let positionInfoCard = "";
      if (role === "Engineer") {
        positionInfoCard = "GitHub username";
      } else if (role === "Intern") {
        positionInfoCard = "school name";
      } else {
        positionInfoCard = "office phone number";
      }
      inquirer
        .prompt([
          {
            message: `Enter team member's ${positionInfoCard}`,
            name: "positionInfoCard",
          },
          {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["yes", "no"],
            name: "extraMembers",
          },
        ])
        .then(function ({ positionInfoCard, extraMembers }) {
          let neophyte;
          if (role === "Engineer") {
            neophyte = new Engineer(name, id, email, positionInfoCard);
          } else if (role === "Intern") {
            neophyte = new Intern(name, id, email, positionInfoCard);
          } else {
            neophyte = new Manager(name, id, email, positionInfoCard);
          }
          employees.push(neophyte);
          addHtml(neophyte).then(function () {
            if (extraMembers === "yes") {
              positionCard();
            } else {
              finishHtml();
            }
          });
        });
    });
}

function beginHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>
        <nav class="navbar navbar-light bg-light mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="column">`;
    fs.writeFile('./dist/teammates.html', html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addHtml(neophyte) {
    return new Promise(function(resolve, reject) {
        const name = neophyte.getName();
        const role = neophyte.getRole();
        const id = neophyte.getId();
        const email = neophyte.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = neophyte.getGithub();
            data = `<div class="col-3">
            <div class="card mx-auto mb-3" style="width: 12rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = neophyte.getSchool();
            data = `<div class="col-3">
            <div class="card mx-auto mb-3" style="width: 12rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officePhone = neophyte.getOfficeNumber();
            data = `<div class="col-3">
            <div class="card mx-auto mb-3" style="width: 12rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("produced +1 team member");
        fs.appendFile('./dist/teammates.html', data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
    
            
    
        
    
    
}

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile('./dist/teammates.html', html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("fin");
}
initApplication();