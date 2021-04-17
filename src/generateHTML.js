const generateHTML = (teamArrayRow1, teamArrayRow1) => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property='og:image' content='/images/Weather_Dashboard_Image.png' />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>

<body>
    <header class="p-5 text-center text-white bg-danger">
        <h1>My Team</h1>
    </header>

<div id="first-row" class="container-fluid padding">
    <div class="row padding justify-content-sm-center">
    ${generateTeam(teamArrayRow1)}
</div>
</div>

<div id="second-row" class="container-fluid padding">
    <div class="row padding justify-content-center">
    ${generateTeam(teamArrayRow2)}
</div>
</div>

</body>

</html>
`
};


function generateTeam(teamArrayRow1) {
    let html = ""
    teamArrayRow1.forEach(member => {
        console.log(member)
        switch (member.getRole()) {
            case "manager":
                html += generateManager(member)
                break;
            case "engineer":
                html += generateEngineer(member)
                break;    
            case "Intern":
                html += generateIntern(member)
                break;    
            default:
                break;
        }
    })
    return html;
}

function generateManager (manager) {
    return `
    <div class="card col-md-4" style="max-width: 18rem;">
        <div class="card-header text-white bg-primary">
            <h3 class="text-center">${manager.getName()}</h3>
            <h4 class="text-center"><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h4>
        </div>
        <ul class="card-body text-dark">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">
                Email:
                <a href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.officeNumber()}</li>
        </ul>
    </div>
`
};

function generateEngineer (engineer) {
    return `
    <div class="card col-md-4" style="max-width: 18rem;">
    <div class="card-header text-white bg-primary">
        <h3 class="text-center">${engineer.getName()}</h3>
        <h4 class="text-center"><i class="fas fa-glasses"></i> ${engineer.getRole()}</h4>
    </div>
    <ul class="card-body text-dark">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">
            Email:
            <a href = "mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">Github:
            <a href="www.github.com" target="_blank"> i${engineer.getGithub()}</a>
        </li>
    </ul>
</div>
`
};

function generateEngineer (intern) {
    return `
    <div class="card col-md-4" style="max-width: 18rem;">
    <div class="card-header text-white bg-primary">
        <h3 class="text-center">${intern.getName()}</h3>
        <h4 class="text-center"><i class="fas fa-glasses"></i> ${intern.getRole()}</h4>
    </div>
    <ul class="card-body text-dark">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">
            Email:
            <a href = "mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">Github:
            <a href="www.github.com" target="_blank"> i${intern.getSchool()}</a>
        </li>
    </ul>
</div>
`
};

module.exports = generateHTML