function promptsManager() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Manager's name:",
          name: "name",
        },
        {
          type: "input",
          message: "Manager's id:",
          name: "id",
        },
        {
          type: "input",
          message: "Manager's email address:",
          name: "email",
        },
        {
          type: "input",
          message: "Manager's office number:",
          name: "officeNumber",
        },
      ])
      .then(function ({ name, id, email, officeNumber }) {
        let manager = new Manager(name, id, email, officeNumber);
        employees.push(manager);
        htmlCards(manager);
        newEmployee();
      });
  }
  
  // Additional Team Members Question function
  function newEmployee() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What role would you like to add for your team member?",
          choices: [
            "Engineer",
            "Intern",
            "I do not wish to add any more team members",
          ],
          name: "addEmployee",
        },
      ])
      .then(function ({ addEmployee }) {
        if (addEmployee === "Engineer") {
          return promptsEngineer();
        } else if (addEmployee === "Intern") {
          return promptsIntern();
        } else {
          htmlFooter();
        }
      });
  }
  
  // Add Engineer Questions function
  function promptsEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Engineer's name:",
          name: "name",
        },
        {
          type: "input",
          message: "Engineer's id:",
          name: "id",
        },
        {
          type: "input",
          message: "Engineer's email address:",
          name: "email",
        },
        {
          type: "input",
          message: "Engineer's GitHub username:",
          name: "github",
        },
      ])
      .then(function ({ name, id, email, github }) {
        let engineer = new Engineer(name, id, email, github);
        employees.push(engineer);
        htmlCards(engineer);
        newEmployee();
      });
  }
  
  // Add Intern Questions function
  function promptsIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Intern's name:",
          name: "name",
        },
        {
          type: "input",
          message: "Intern's id:",
          name: "id",
        },
        {
          type: "input",
          message: "Intern's email address:",
          name: "email",
        },
        {
          type: "input",
          message: "Intern's school :",
          name: "school",
        },
      ])
      .then(function ({ name, id, email, school }) {
        let intern = new Intern(name, id, email, school);
        employees.push(intern);
        htmlCards(intern);
        newEmployee();
      });
  }
  
  function htmlHead() {
    const html = `
  <!doctype html>
  <html lang="en">
  <body>
      <!-- Banner Section -->
      <section class="jumbotron jumbotron-fluid bg-info text-white text-center">
          <div class="container">
              <h1 class="display-3">My Team</h1>
          </div>
      </section>
      <!-- Main Employee Card Section-->
      <main class="container">
          <div class="row">
      `;
  
    fs.writeFile("index.html", html, function (error) {
      if (error) {
        console.log(error);
      }
    });
  }
  
  function htmlCards(member) {
    return new Promise(function (resolve, reject) {
      const name = member.getName();
      const id = member.getId();
      const email = member.getEmail();
      const role = member.getRole();
  
      let data = "";
      if (role === "Engineer") {
        const github = member.getGithub();
        data = `
              <!-- Engineer Employee Card -->
              <div class="col d-sm-flex justify-content-center">
                  <div class="card employee-card mt-4">
                      <div class="card-header">
                          <h2 class="card-title">${name}</h2>
                          <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
                      </div>
                      <div class="card-body">
                          <ul class="list-group">
                              <li class="list-group-item">ID: ${id}</li>
                              <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                              <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              `;
      } else if (role === "Intern") {
        const school = member.getSchool();
        data = `
              <!-- Intern Employee Card -->          
              <div class="col d-sm-flex justify-content-center">
                  <div class="card employee-card mt-4">
                      <div class="card-header">
                          <h2 class="card-title">${name}</h2>
                          <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
                      </div>
                      <div class="card-body">
                          <ul class="list-group">
                              <li class="list-group-item">ID: ${id}</li>
                              <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                              <li class="list-group-item">School: ${school}</li>
                          </ul>
                      </div>
                  </div>
              </div>              
              `;
      } else {
        const officeNumber = member.getOfficeNumber();
        data = `
              <!-- Manager Employee Card -->
              <div class="col d-sm-flex justify-content-center">
                  <div class="card employee-card mt-4">
                      <div class="card-header">
                          <h2 class="card-title">${name}</h2>
                          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
                      </div>
                      <div class="card-body">
                          <ul class="list-group">
                              <li class="list-group-item">ID: ${id}</li>
                              <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                              <li class="list-group-item">Office Number: ${officeNumber}</li>
                          </ul>
                      </div>
                  </div>
              </div>    
              `;
      }
      console.log("Team Member's Profile Added");
      fs.appendFile("index.html", data, function (error) {
        if (error) {
          return reject(error);
        }
        return resolve();
      });
    });
  }
  
  function htmlFooter() {
    const html = `
          </div>
      </main>  
  `;
  
    fs.appendFile("index.html", html, function (error) {
      if (error) {
        console.log(error);
      }
    });
    console.log(" Your index.html file has been created.");
  }
  
  init();