$(function () {

    var maxXPosition = ($("#container").outerWidth() - $("#box").outerWidth());
    console.log(maxXPosition);
    var maxYPosition = ($("#container").outerHeight() - $("#box").outerHeight());
    console.log(maxYPosition);


    $("#btnRight").click(function () {
        $("#box").stop().animate({
            left: maxXPosition
        }, 3000);
    });

    $("#btnDown").click(function () {
        $("#box").stop().animate({
            top: maxYPosition
        }, 3000);
    });

    $("#btnLeft").click(function () {
        $("#box").stop().animate({
            left: 0
        }, 3000);
    });

    $("#btnUp").click(function () {
        $("#box").stop().animate({
            top: 0
        }, 3000);
    });

    $("#btnFadeOut").click(function () {
        $("#box").stop().fadeOut(2000);
    });

    $("#btnFadeIn").click(function () {
        $("#box").stop().fadeIn(2000);
    });

    var myInterval = function () { };
    function setBlinking() { };
    function stopBlinking() { clearInterval(myInterval) };

    //Blink button
    $("#btnBlink").click(function () {
        $("#box").stop();

        //event listener in plain js works; can it be done purely in jQ?
        document.getElementById("btnReset").addEventListener("click", function () {
            clearInterval(myInterval)
        });
        document.getElementById("btnReset").addEventListener("click", function () {
            document.getElementById("box").style.display = "block";
        });
        var myInterval = setInterval(setBlinking, 300);
        function setBlinking() {
            $("#box").fadeToggle()
        };

        //Failed jQ attempt at stopping the blink:
        //$("#btnReset").click(function(){
        //    $("#box").clearInterval(myInterval)
        //});
    });
    //end of Blink button

    var containerOffset = $("#container").offset();
    $("#btnReset").click(function () {
        clearInterval(myInterval);
        $("#box").stop();
        $("#box").show().fadeIn();
        $("#box").offset(containerOffset);
    });


});
