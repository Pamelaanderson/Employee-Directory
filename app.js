// Empty string to be used with each function 
let direction = "";
// display is to be used over and over- pass through loop to render through the employeeList
const display = function () {
    let htmlStr = '';
    for (let i = 0; i < employeeList.length; i++) {
        htmlStr += `<div class="entry"><p> ${employeeList[i].name}</p><p> ${employeeList[i].officeNum}</p><p> ${employeeList[i].phoneNum}</p></div>`;
    }
    render(htmlStr);    
} 
 // Set list to empty and direction to empty string- Pull up list once view is clicked
const setView = function () {
    $('#empList').empty();
    direction = '';
    $('form').hide();
    display();
}
// Empty List and set command to add to show both our form and bonus
const setAdd = function() {
    $('#empList').empty();
    direction = 'add';
    $('form').show();
    $('.bonus').show();
}
// adds user input to list
const add = function() {
    const userName = $('#name').val();
    const officeNum = $('#office').val();
    const phoneNum = $('#phone').val();
    employeeList.push({
        name: userName,
        officeNum: officeNum,
        phoneNum: phoneNum
    })
    display();
}
// sets the verify to empty and shows the form 
const setVerify = function () {
    $('#empList').empty();
    direction = 'verify';
    $('form').show();
    $('.bonus').hide();
}
 // verify if the username is in list and displays yes/no 
 const verify = function() {
    const userName = $('#name').val();
    let htmlStr = 'no';
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === userName) {
            htmlStr = 'yes';
        }
    }
    render(htmlStr);
}
// sets update to empty and shows the form
const setUpdate = function () {
    $('#empList').empty();
    direction = 'update';
    $('form').show();
    $('.bonus').show();
}
 // updates the users input into the new list and renders
 const update = function () {
    const userName = $('#name').val();
    const officeNum = $('#office').val();
    const phoneNum = $('#phone').val();
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === userName) {
            employeeList[i].officeNum = officeNum;
            employeeList[i].phoneNum = phoneNum;
        }
    }
    display();
} 
// sets delete to empty and shows the form 
const setDelete = function () {
    $('#empList').empty();
    direction = 'delete';
    $('form').show();
    $('.bonus').hide();
}
// removes the user name and rerenders the list
const remove = function () {
    const userName = $('#name').val();
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === userName) {
            employeeList.splice(i, 1);
        }
    }
    display();
}
// each time render is called- the htmlStr will render the new list
const render = function (htmlStr) {
    $('#empList').html(htmlStr);
}
// switch expression is evaluated once, the value of that
//expression is compared to each case value- if they match
//then when the button is clicked runDirection is triggered
const runDirection = function (event) {
    event.preventDefault();
    switch (direction) {
        case 'add':
            add();
            break; // breaks out of block and stops more execution
        case 'verify':
            verify();
            break;
        case 'update':
            update();
            break;
        case 'delete':
            remove();
            break;
        default: 
            console.log('we hit default');
            break;
    }
}
// event listeners
$('#view').on('click', setView);
$('#add').on('click', setAdd);
$('#verify').on('click', setVerify);
$('#update').on('click', setUpdate);
$('#delete').on('click', setDelete);

$('#submit').on('click', runDirection);





