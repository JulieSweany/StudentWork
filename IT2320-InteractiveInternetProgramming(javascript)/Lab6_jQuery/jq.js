$(function () {


    //create divs and set innerHTML
    var div1 = $("<div id='1' class='white'></div>").width(100).height(100).text("1");
    var div2 = $("<div id='2' class='black'></div>").width(100).height(100).text("2");
    var div3 = $("<div id='3' class='white'></div>").width(100).height(100).text("3");
    var div4 = $("<div id='4' class='black'></div>").width(100).height(100).text("4");

    //add css class to divs
    $(div1).addClass("divStyle");
    $(div2).addClass("divStyle");
    $(div3).addClass("divStyle");
    $(div4).addClass("divStyle");

    //attach divs to main
    $("#main").append(div1);
    $("#main").append(div2);
    $("#main").append(div3);
    $("#main").append(div4);

    //change black backgrounds to green on click
    $("#chgColor").on("click", function () {
        $(".black").css({ "background-color": "green" });
    });

    //change text on click
    $("#chgText").on("click", function () {
        $(".white").prepend("Div");
        $(".black").prepend("Div");
    });

});
