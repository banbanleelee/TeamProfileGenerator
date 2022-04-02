const employees = [{"firstName":"Sally","id":1,"email":"sally@gmail.com","title":"Manager","officeNumber":101},{"firstName":"Pat","id":2,"email":"pat@gmail.com","title":"Engineer","gitHub":"banbanleelee"},{"firstName":"Evan","id":3,"email":"evan@gmail.com","title":"Intern","school":"Georgia Tech"}];

const createCard = (employee) => {
    const card = $('<div></div>').addClass("col-4 h-100 p-5 text-white bg-dark rounded-3 border border-white");
    const cardTitle = $('<h3></h3>').addClass("card-title");
    const cardBody = $('<div></div').addClass("card-body");
    $('#parent-card').append(card);
    card.append(cardTitle, cardBody);
    cardTitle.text(employee.firstName);
    const info1 = $('<p></p>').text(`Title: ${employee.title}`);
    const info2 = $('<p></p>').text(`ID: ${employee.id}`);
    const info3 = $('<a></a>').text(`Email: ${employee.email}`).attr('href', `mailto:${employee.email}`);
    const info4 = $('<p></p>');
    const info5 = $('<a></a>');

    if (employee.title === "Manager") {
        info4.text(`Office Number: ${employee.officeNumber}`).css({"margin-top": "16px", "margin-bottom": "0px"});
    } else if (employee.title === "Engineer") {
        info5.text(`Github: ${employee.gitHub}`).attr('href', `https://github.com/${employee.gitHub}`);
    } else if (employee.title === "Intern") {
        info4.text(`School Name: ${employee.school}`).css({"margin-top": "16px", "margin-bottom": "0px"});
    }
    cardBody.append(info1, info2, info3, info4, info5);
}

employees.forEach((obj) => {
    console.log(obj);
    createCard(obj);
})