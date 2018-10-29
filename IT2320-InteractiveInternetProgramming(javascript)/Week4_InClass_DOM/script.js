console.log(writeHello());

console.log(calculate(20));

console.log(calculate(5));

console.log(add());

function writeHello() {
    return ("hello!");
}

function calculate(x) {
    if (x > 10) {
        x += 2;
        return x;
    }

    else (x <= 10)
    {
        x += 4;
    }
    return x;
}

function add() {
    x = 1;
    for (i = 2; i < 11; i++)
        x += i;
    return (x);
}

//3
window.onload = function () {
    document.getElementById("div1").innerHTML = "This is the new div content";
    document.getElementById("div1").style.backgroundColor = "orange";

    var pElements = document.getElementsByTagName("p");
    for (i = 0; i < pElements.length; i++) {
        pElements[i].style.background = "yellow";
    }

    document.getElementById("btn1").addEventListener("mouseover", function () {
        overButton(this);
    });

    document.getElementById("btn1").addEventListener("mouseout", function () {
        outButton(this);
    });

    document.getElementById("btn1").addEventListener("click", function () {
        changeButton(this);
        setClass(this);
        addBorder(this);
    });
    
}

function changeButton(obj) {
    document.getElementById("btn1").innerHTML = "You clicked me";
}

function setClass(obj) {
    var divElements = document.getElementsByTagName("div");
    for (i = 0; i < divElements.length; i++) {
        divElements[i].setAttribute("class", "blueviolet");
    }
}

function addBorder(obj) {
    var divElements = document.getElementsByTagName("div");
    for (i = 0; i < divElements.length; i++) {
        divElements[i].style.border = "thick solid black";
    }
}

function overButton(obj) {
    document.getElementById("btn1").innerHTML = "Mouseover";
}

function outButton(obj) {
    document.getElementById("btn1").innerHTML = "Click me!";
}
