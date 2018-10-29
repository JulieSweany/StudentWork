
window.onload = function () {

    document.getElementById("next").addEventListener("click", viewNext);
    document.getElementById("next").addEventListener("click", incrementI);

    var i = 0;

    function viewNext() {
        if (i < carArray.length)
            document.getElementById("display_area").innerHTML = 
            "<p>Year: " + carArray[i].year + "<br>" +  
            "Make: " + carArray[i].make + "<br>" + 
            "Model: " + carArray[i].model + "<br>" + 
            "VIN: " + carArray[i].vinNumber + "<br>" + 
            "Number of doors: " + carArray[i].doors + "<br>" + 
            "Color: " + carArray[i].color + "<br>" + 
            "Engine type: " + carArray[i].engineType + "<br>" + "</p>"
        else
            document.getElementById("display_area").innerHTML = "<p>No more cars to show.</p>"
    }
    function incrementI() {
        i++;
    }

}



//car object
var car = {
    year: 1978,
    make: "Ford",
    model: "Mustang",
    vinNumber: 123123456,
    doors: 4,
    color: "Blue",
    engineType: "8-cylinder"
};

//JSON car object
var jsonCar = {
    "year": 1978,
    "make": "Ford",
    "model": "Mustang",
    "vinNumber": 123123456,
    "doors": 4,
    "color": "Blue",
    "engineType": "8-cylinder"
};

console.log(car);
console.log(jsonCar);

//convert to JSON string
console.log(JSON.stringify(jsonCar));

//convert JSON string to object
var parsedCar = JSON.parse('{"year":1978,"make": "Ford", "model": "Mustang", "vinNumber": 123123456,"doors": 4,"color": "Blue","engineType": "8-cylinder"}');
console.log(parsedCar);

//update color
car.color = "Red";
console.log("The new color is " + car.color);

//convert updated car object to JSON string
console.log(JSON.stringify(car));

//array using JSON
var carArray = [
    {
        "year": 1978,
        "make": "Ford",
        "model": "Mustang",
        "vinNumber": 123123456,
        "doors": 4,
        "color": "blue",
        "engineType": "8-cylinder"
    },
    {
        "year": 1980,
        "make": "Volkswagon",
        "model": "Rabbit",
        "vinNumber": 789789123,
        "doors": 4,
        "color": "yellow",
        "engineType": "4-cylinder"
    },
    {
        "year": 1988,
        "make": "Chevy",
        "model": "Camaro",
        "vinNumber": 555888777,
        "doors": 2,
        "color": "black",
        "engineType": "6-cylinder"
    },
    {
        "year": 1990,
        "make": "Dodge",
        "model": "Omni",
        "vinNumber": 987654321,
        "doors": 4,
        "color": "silver",
        "engineType": "4-cylinder"
    },
    {
        "year": 1991,
        "make": "Ford",
        "model": "Focus",
        "vinNumber": 345543789,
        "doors": 4,
        "color": "light blue",
        "engineType": "4-cylinder"
    },
    {
        "year": 1994,
        "make": "Chevy",
        "model": "Bronco",
        "vinNumber": 101023456,
        "doors": 4,
        "color": "red",
        "engineType": "6-cylinder"
    },
    {
        "year": 1998,
        "make": "Chevy",
        "model": "Cruze",
        "vinNumber": 543789531,
        "doors": 4,
        "color": "black",
        "engineType": "4-cylinder"
    },
    {
        "year": 2005,
        "make": "Ford",
        "model": "Taurus",
        "vinNumber": 221332443,
        "doors": 4,
        "color": "white",
        "engineType": "4-cylinder"
    },
    {
        "year": 2010,
        "make": "Chevy",
        "model": "Camaro",
        "vinNumber": 218765449,
        "doors": 2,
        "color": "yellow",
        "engineType": "6-cylinder"
    },
    {
        "year": 2019,
        "make": "Toyota",
        "model": "Prius",
        "vinNumber": 789987543,
        "doors": 4,
        "color": "green",
        "engineType": "4-cylinder"
    }
];

console.log(carArray);

    /*
    Assignment #1
    
    Create a Car object with
    year
    make
    model
    vin number
    number of doors
    color
    engine type
    
    1. Make this into a javascript object and display properties in console
    2. Create this as a json object and display properties in console
    3. Convert JSON to JSON string and write it to console
    4. Convert JSON string to Object. display its properties in console
    5. Update color property. display in console.
    6. Convert Object to JSON string and display in console
    
    Assignment #2
    Create an array of 10 cars using JSON.
    Display array of cars one by one (
        -create the html element to display the car properties dynamically using javascript
    Provide a "Next" button to show the next car
    If you are on the last car, show a message "No more cars to show"
    */
