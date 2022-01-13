// Function to generate HTML file
function generateHTML (employeeList) {
    htmlOutput = '';

    //set up the base html. headers sdljfsdljf
    htmlOutput += startHTML();

    //loop through a list of the employees converting the json (object) into a list of html elements
    htmlContent += contentHTML(employeeList);

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
    html = '';

    for(employee in employeeList) {
        html += `${employee.getTitle()}`; //html for the employee element (single box of info)
    }

    return html;
};

function endHTML() {
    return ''; //close the body and html
};

module.exports = generateHTML;