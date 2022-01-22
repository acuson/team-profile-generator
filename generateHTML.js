// Function to generate HTML file
function generateHTML (employeeList) {
    htmlOutput = '';

    //set up the base html. headers sdljfsdljf
    htmlOutput += startHTML();

    //loop through a list of the employees converting the json (object) into a list of html elements
    htmlOutput += contentHTML(employeeList);

    //add list to the basehtml
    htmlOutput += endHTML();

    //save file
    fs.appendFile("./team.html", data, function (err) {
        if (err) {
            return reject(err);
        };
        return resolve();
    });

};

function startHTML() {
    return ''; //init the headers and html and body
};

function contentHTML(employeeList) {
    html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;

    for(employee in employeeList) {
        html += new Promise(function(resolve, reject) {
            const name = newMember.getName();
            const role = newMember.getRole();
            const id = newMember.getId();
            const email = newMember.getEmail();
            let data = "";
            if (role === "Engineer") {
                const gitHub = member.getGithub();
                data = `<div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header">${name}<br /><br />Engineer</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email Address: ${email}</li>
                    <li class="list-group-item">GitHub: ${gitHub}</li>
                </ul>
                </div>
            </div>`;
            } else if (role === "Intern") {
                const school = member.getSchool();
                data = `<div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header">${name}<br /><br />Intern</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email Address: ${email}</li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
                </div>
            </div>`;
            } else {
                const officePhone = member.getOfficeNumber();
                data = `<div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header">${name}<br /><br />Manager</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email Address: ${email}</li>
                    <li class="list-group-item">Office Phone: ${officePhone}</li>
                </ul>
                </div>
            </div>` 
    }

    return html;
});

};
}
function endHTML() {
    return ` </div>
    </div>
    
</body>
</html>`};
module.exports = generateHTML;