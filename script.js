
// get elements
let bulbOn = document.getElementById("btn1");
let bulbOff = document.getElementById("btn2");

// add event
bulbOn.addEventListener('click', function() {
    document.getElementsByTagName("img")[0].src = "img/bulbOn.png";
});

// add event
bulbOff.addEventListener('click', function() {
    document.getElementsByTagName("img")[0].src = "img/bulbOff.png";
});