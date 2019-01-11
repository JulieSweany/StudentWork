
var colorArray = ["red", "blue", "green", "yellow", "orange", "purple", "black", "pink", "red", "blue", "green", "yellow", "orange", "purple", "black", "pink"];
var counter = 0;
var firstCell;
var secondCell;


$(function () {
    cellClick();
})


function cellClick(cell) {
  
    $(".cell").click(function () {

        if ($(this).hasClass("selected")) {
        }
        else {
            $(this).css({ "background-color": colorArray[$(this).attr("id")] });
            $(this).addClass("selected");
            counter++;
            console.log(counter);
            console.log(($(this).attr("id")));
            if (counter === 1) {
                console.log("first cell clicked")
                firstCell = $(this);
                console.log(firstCell);
                setMessage("(Click another block...)");
                return firstCell;

            }
            else if (counter === 2) {
                console.log("second cell clicked");
                var secondCell = $(this);

                if (firstCell.css("background-color") === secondCell.css("background-color")){
                    console.log("winner");
                    setMessage("You win!");
                    shuffle();

                    setTimeout(function() {
                        resetboard();setMessage("New game");}, 2500);
                        counter = 0;

                }
                else {
                    console.log("no winner")
                    counter = 0;
                    $(".cell").removeClass("selected");
                    setMessage("(No match)");

                    setTimeout(function() {
                        setMessage("Try again!");
                        $(".cell").css({"background-color": "whitesmoke"})}, 1500);
                }
            };

        }
    });

}




function resetboard() {
    //Goal is to get all divs on the board with class "cell" and set their background color to ""
        //if ($(".cell").hasClass("selected")) {
            $(".cell").removeClass("selected");
            console.log($(".cell").attr("class"));
            $(".cell").css({"background-color": "whitesmoke"});
            setMessage("New game");
       // }
}

function setMessage(msg) {
    //Goal is to get the div with id = "status" and set its innerHTML to the input parameter msg
$("#status").html("<h2>" + msg + "</h2>");
}

function shuffle() {
colorArray.sort(function (a, b) { return 0.5 - Math.random() });
console.log(colorArray);
}
