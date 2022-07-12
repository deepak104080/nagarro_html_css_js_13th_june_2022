console.log('hello world from external js file.....')


// DOM - Document Object Model

// let variable1 = 5
// const varibel2 = 10;
// var variable3 = 50


// window.document - document


function fnabc() {
    console.log('button clicked....');
    var name = document.getElementById('name').value;
    var city = document.getElementById('city').value;
    console.log(name, city);
    document.getElementById('content_form').innerText = name + " " + city;
}



//steps for assignment

// create design
// button - add a functiion
// inside function :-----------------
// select all values from form elements like input, checkbox, radio, etc
// console.log
// create plain table - html
// create elements - td / feeding content / set sttribute (image)
// create element - tr
// append td into tr
// append tr into table - html