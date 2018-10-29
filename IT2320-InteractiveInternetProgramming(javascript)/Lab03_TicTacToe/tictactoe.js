window.onload = function () {

    //declare variables
    var computerTurn = false;
    var isWinner = false;
    var winner = "";

    resetBoard();

    //user's move, followed by computer's move
    cells = document.getElementsByClassName("grid-item");
    for (i = 0; i < cells.length; i++)
        cells[i].addEventListener("click", function () {
            markX(this);
            checkWin();
            makeNextMove();
            checkWin();

        });

    document.getElementById("reset_button").addEventListener("click", function () {
        resetBoard(this);
    });

    //var element = document.getElementById("game-status")
    //document.getElementById("game_status").innerHTML = "Trying to change this";



    function checkWin() {
        if //there is a win by user
        (((document.getElementById("grid-item1").innerHTML) == "X" &&
            (document.getElementById("grid-item4").innerHTML) == "X" &&
            (document.getElementById("grid-item7").innerHTML) == "X") ||

        ((document.getElementById("grid-item2").innerHTML) == "X" &&
            (document.getElementById("grid-item5").innerHTML) == "X" &&
            (document.getElementById("grid-item8").innerHTML) == "X") ||

        ((document.getElementById("grid-item0").innerHTML) == "X" &&
            (document.getElementById("grid-item4").innerHTML) == "X" &&
            (document.getElementById("grid-item8").innerHTML) == "X") ||

        ((document.getElementById("grid-item2").innerHTML) == "X" &&
            (document.getElementById("grid-item4").innerHTML) == "X" &&
            (document.getElementById("grid-item6").innerHTML) == "X") ||

        ((document.getElementById("grid-item0").innerHTML) == "X" &&
            (document.getElementById("grid-item1").innerHTML) == "X" &&
            (document.getElementById("grid-item2").innerHTML) == "X") ||

        ((document.getElementById("grid-item3").innerHTML) == "X" &&
            (document.getElementById("grid-item4").innerHTML) == "X" &&
            (document.getElementById("grid-item5").innerHTML) == "X") ||

        ((document.getElementById("grid-item6").innerHTML) == "X" &&
            (document.getElementById("grid-item7").innerHTML) == "X" &&
            (document.getElementById("grid-item8").innerHTML) == "X") ||

        ((document.getElementById("grid-item0").innerHTML) == "X" &&
            (document.getElementById("grid-item3").innerHTML) == "X" &&
            (document.getElementById("grid-item6").innerHTML) == "X") ||

            ((document.getElementById("grid-item2").innerHTML) == "X" &&
                (document.getElementById("grid-item5").innerHTML) == "X" &&
                (document.getElementById("grid-item8").innerHTML) == "X")) {
            winner = "User";
            isWinner = true;
            setGameStatus();
        }

        else if //there is a win by computer
        (((document.getElementById("grid-item1").innerHTML) == "O" &&
            (document.getElementById("grid-item4").innerHTML) == "O" &&
            (document.getElementById("grid-item7").innerHTML) == "O") ||

        ((document.getElementById("grid-item2").innerHTML) == "O" &&
            (document.getElementById("grid-item5").innerHTML) == "O" &&
            (document.getElementById("grid-item8").innerHTML) == "O") ||

        ((document.getElementById("grid-item0").innerHTML) == "O" &&
            (document.getElementById("grid-item4").innerHTML) == "O" &&
            (document.getElementById("grid-item8").innerHTML) == "O") ||

        ((document.getElementById("grid-item2").innerHTML) == "O" &&
            (document.getElementById("grid-item4").innerHTML) == "O" &&
            (document.getElementById("grid-item6").innerHTML) == "O") ||

        ((document.getElementById("grid-item0").innerHTML) == "O" &&
            (document.getElementById("grid-item1").innerHTML) == "O" &&
            (document.getElementById("grid-item2").innerHTML) == "O") ||

        ((document.getElementById("grid-item3").innerHTML) == "O" &&
            (document.getElementById("grid-item4").innerHTML) == "O" &&
            (document.getElementById("grid-item5").innerHTML) == "O") ||

        ((document.getElementById("grid-item6").innerHTML) == "O" &&
            (document.getElementById("grid-item7").innerHTML) == "O" &&
            (document.getElementById("grid-item8").innerHTML) == "O") ||

        ((document.getElementById("grid-item0").innerHTML) == "O" &&
            (document.getElementById("grid-item3").innerHTML) == "O" &&
            (document.getElementById("grid-item6").innerHTML) == "O") ||

            ((document.getElementById("grid-item2").innerHTML) == "O" &&
                (document.getElementById("grid-item5").innerHTML) == "O" &&
                (document.getElementById("grid-item8").innerHTML) == "O")) {
            winner = "Computer";
            isWinner = true;
            setGameStatus();
        }
        else if//there is a draw
        (document.getElementById("grid-item0").innerHTML != "" &&
        document.getElementById("grid-item1").innerHTML != "" &&
        document.getElementById("grid-item2").innerHTML != "" &&
        document.getElementById("grid-item3").innerHTML != "" &&
        document.getElementById("grid-item4").innerHTML != "" &&
        document.getElementById("grid-item5").innerHTML != "" &&
        document.getElementById("grid-item6").innerHTML != "" &&
        document.getElementById("grid-item7").innerHTML != "" &&
            document.getElementById("grid-item8").innerHTML != "") {
            isWinner = false;
            setGameStatus();
        }
    }


    function setGameStatus() {
        if (isWinner == true)
            document.getElementById("game_status").innerHTML = "The " + winner + " is the winner!";
        else
            //(isWinner == false)
            document.getElementById("game_status").innerHTML = "The game is a tie.";
    }





    function markX(obj) {
        if (obj.innerHTML == "X")
            computerTurn = false;
        else if (obj.innerHTML != "O") {
            obj.innerHTML = "X";
            checkWin();
            if (isWinner == false)
                computerTurn = true;
        }
    }


    function makeNextMove() {
        if (computerTurn == true) {
            if ((document.getElementById("grid-item4").innerHTML) != "X" &&
                (document.getElementById("grid-item4").innerHTML) != "O") {
                document.getElementById("grid-item4").innerHTML = "O";
                computerTurn = false;
            }
            else if ((document.getElementById("grid-item0").innerHTML) != "X" &&
                (document.getElementById("grid-item0").innerHTML) != "O") {
                document.getElementById("grid-item0").innerHTML = "O";
                computerTurn = false;
            }
            else if ((document.getElementById("grid-item2").innerHTML) != "X" &&
                (document.getElementById("grid-item2").innerHTML) != "O") {
                document.getElementById("grid-item2").innerHTML = "O";
                computerTurn = false;
            }
            else if ((document.getElementById("grid-item6").innerHTML) != "X" &&
                (document.getElementById("grid-item6").innerHTML) != "O") {
                document.getElementById("grid-item6").innerHTML = "O";
                computerTurn = false;
            }
            else if ((document.getElementById("grid-item8").innerHTML) != "X" &&
                (document.getElementById("grid-item8").innerHTML) != "O") {
                document.getElementById("grid-item8").innerHTML = "O";
                computerTurn = false;
            }
            else if ((document.getElementById("grid-item1").innerHTML) != "X" &&
                (document.getElementById("grid-item1").innerHTML) != "O") {
                document.getElementById("grid-item1").innerHTML = "O";
                computerTurn = false;
            }
            else if ((document.getElementById("grid-item3").innerHTML) != "X" &&
                (document.getElementById("grid-item3").innerHTML) != "O") {
                document.getElementById("grid-item3").innerHTML = "O";
                computerTurn = false;
            }
            else if ((document.getElementById("grid-item5").innerHTML) != "X" &&
                (document.getElementById("grid-item5").innerHTML) != "O") {
                document.getElementById("grid-item5").innerHTML = "O";
                computerTurn = false;
            }
            else if ((document.getElementById("grid-item7").innerHTML) != "X" &&
                (document.getElementById("grid-item7").innerHTML) != "O") {
                document.getElementById("grid-item7").innerHTML = "O";
                computerTurn = false;

            }
        }








    }



    function resetBoard() {
        document.getElementById("grid-item0").innerHTML = "";
        document.getElementById("grid-item1").innerHTML = "";
        document.getElementById("grid-item2").innerHTML = "";
        document.getElementById("grid-item3").innerHTML = "";
        document.getElementById("grid-item4").innerHTML = "";
        document.getElementById("grid-item5").innerHTML = "";
        document.getElementById("grid-item6").innerHTML = "";
        document.getElementById("grid-item7").innerHTML = "";
        document.getElementById("grid-item8").innerHTML = "";
        document.getElementById("game_status").innerHTML = "This is a new game.";
        computerTurn = false;
        isWinner = false;
        winner = "";
    }



}
