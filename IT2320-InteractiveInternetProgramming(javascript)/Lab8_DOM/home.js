
$(function () {

    //code provided within assignment, except that I changed some functions to make sure I understood the DOM
    $("#btn1").on("click", function () {
        reset();
        console.log($("#wrapperSection1").parent().attr("id"));
        $("#wrapperSection1").parent().css({ "color": "pink" });
    });
    $("#btn2").on("click", function () {
        reset();
        $("#wrapperSection1").siblings().css({ "color": "red" });
    });
    $("#btn3").on("click", function () {
        reset();
        $("#wrapperSection1").children().css({ "color": "cyan" });
    });
    $("#btn4").on("click", function () {
        reset();
        $("#wrapperSection1").find('*').css({ "color": "green" });
    });
    $("#btn5").on("click", function () {
        reset();
        $("#wrapperSection1").parents().css({ "color": "orange" });
    });

    //Code to complete assignment begins here (reset function, below, was also provided within assigned code)
    //next()--next sibling
    $("#btn6").on("click", function () {
        reset();
        $("#wrapperSection1").next().css({ "color": "purple", "border": "3px solid gray", "padding": "5px" });
    });
    //nextAll()--all the siblings after
    $("#btn7").on("click", function () {
        reset();
        $("#wrapperSection1").nextAll().css({ "color": "aqua", "border": "3px solid gray", "padding": "5px" });
    });
    //nextUntil()--all siblingings until specified
    $("#btn8").on("click", function () {
        reset();
        $("#wrapperSection1").nextUntil("#wrapperSection3").css({ "color": "fuchsia", "border": "3px solid gray", "padding": "5px" });
    });
    //closest()--first ancestor of selected element
    $("#btn9").on("click", function () {
        reset();
        $("#wrapperSection1").closest("#container").css({ "color": "tan", "border": "3px solid gray", "padding": "5px" });
    });
    //prev()--previous sibling
    $("#btn10").on("click", function () {
        reset();
        $("#wrapperSection1").prev().css({ "color": "plum", "border": "3px solid gray", "padding": "5px" });
    });
    //prevAll()--all previous siblings
    $("#btn11").on("click", function () {
        reset();
        $("#wrapperSection1").prevAll().css({ "color": "Teal", "border": "3px solid gray", "padding": "5px" });
    });
    //prevUntil()--all previous siblings until specified
    $("#btn12").on("click", function () {
        reset();
        $("#wrapperSection1").prevUntil("h3").css({ "color": "Coral", "border": "3px solid gray", "padding": "5px" });
    });
    //first()--returns first element of selected elements
    $("#btn13").on("click", function () {
        reset();
        $("#wrapperSection1 div").first().css({ "color": "tan", "border": "3px solid gray", "padding": "5px" });
    });
    //last()--returns last element of selected elements
    $("#btn14").on("click", function () {
        reset();
        $("#wrapperSection1 div").last().css({ "color": "olive", "border": "3px solid gray", "padding": "5px" });
    });
    //filter()--reduces set of matched elements to those that match selector or pass function's test
    $("#btn15").on("click", function () {
        reset();
        $("#wrapperSection1 div p").filter(".para").css({ "color": "gold", "border": "3px solid gray", "padding": "5px" });
    });
    //not()--returns elements not matching a certain criterion
    $("#btn16").on("click", function () {
        reset();
        $("#wrapperSection1 #wrapper1 p").not(".para").css({ "color": "gold", "border": "3px solid gray", "padding": "5px" });
    });
    //slice()--reduces set of matched elements to a subset within a range of indices
    $("#btn17").on("click", function () {
        reset();
        $("#wrapperSection1 p").slice(2, 5).css({ "color": "lime", "border": "3px solid gray", "padding": "5px" });
    });


})

function reset() {
    $("#wrapperSection1").parent().css({ "color": "black", "border": "none", "padding": "0px" });
    $("#wrapperSection1").siblings().css({ "color": "black", "border": "none", "padding": "0px" });
    $("#wrapperSection1").children().css({ "color": "black", "border": "none", "padding": "0px" });
    $("#wrapperSection1").parents().css({ "color": "black", "border": "none", "padding": "0px" });
    $("#wrapperSection1").find("*").css({ "color": "black", "border": "none", "padding": "0px" });
}

/*

jQuery Traversal:
In this assignment you will implement additional functionality to Week 8 code.
You can update the html and css if needed.
Code has to use the mentioned jquery methods. For this assignment, demonstrate how to implement the following for element with id= wrapperSection. Refresh the page everytime want to try a functionality so that the styles are reset back to how they were before. Otherwise write code to reset the styles between each button click.

next()
nextAll()
nextUntil()
closest()

prev()
prevAll()
prevUntil()

first()
last()
filter()
not()

slice()
*/