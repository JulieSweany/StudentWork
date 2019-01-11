$(function () {
    //ExpiredTasks
    $("#ExpiredTasks").on("click", function () {
        $.get("/Tasks/ExpiredTasks", function (data) {
            console.log(data);

            $(".results").remove();

            $.each(data, function (i, item) {
                var task = $("<p class='results'></p>").text(item.Id + " " + item.Title);
                $("#results").append(task);

            });
        });
    });

    //DeleteExpiredTasks
    $("#DeleteExpiredTasks").on("click", function () {


        $.post("/Tasks/DeleteExpiredTasks", function (data) {
            console.log(data);

            var para = $("<p></p>").text("Count: " + data.count + "      Status: " + data.status);
            $("#results").append(para);
        });
    });

    //UrgentTasks
    $("#UrgentTasks").on("click", function () {

        var parsedInt = parseInt($("#NbrOfDays").val());

        $.get("/Tasks/UrgentTasks", { "nbr": parsedInt }, function (data) {
            console.log(data);
            
            $(".results2").remove();

            $.each(data, function (i, item) {
                var urgentItem = $("<p class='results2'></p>").text(item.Id + " " + item.Title);
                $("#results2").append(urgentItem);
            });
            
        });
    });
   
    //SearchByCategory
    $("#SearchByCategory").on("click", function () {

        var inputCategory = $("#Search").val();
        console.log(inputCategory);

        $.get("/Tasks/SearchByCategory", { "searchstring": inputCategory } , function (data) {
            console.log(data);

            $(".results3").remove();

            $.each(data, function (i, item) {
                var categoryTask = $("<p class='results3'></p>").text(item.Id + " " + item.Title);
                $("#results3").append(categoryTask);

            });
        });
    });

});     

    /* There are 4 functions in the TasksController that you have to bind using jQuery ajax
     *
     * Name="ExpiredTasks"
     * URL="/Tasks/ExpiredTasks"
     * Type = "GET"
     * Input parameter = None
     * Returns JSON
     * Goal: This method will return tasks that are in the past => earlier than today's date
     * To do: Call this method when the "ExpiredTasks" button is clicked.
     * Display expired tasks in the div with id="results"*/

    /* Name="DeleteExpiredTasks"
    * URL="/Tasks/DeleteExpiredTasks"
    * Type= "POST"
    * Input parameter = None
    * Returns JSON
    * Goal: This method will delete tasks older than today
    * To do: Call this method when the "DeleteExpiredTasks" button is clicked.
    * Display "count" and "status" in the div with id="results"*/

    /* Name="UrgentTasks"
    * URL="/Tasks/UrgentTasks"
    * Type = "GET"
    * Input parameter called as "nbr" will be an integer that indicates number of days
    * Returns JSON
    * Goal: This method will return tasks that are due in the next "nbr" days from today
    * To do: Call this method when the "UrgentTasks" button is clicked.
    * Display urgent tasks in the div with id="results2"*/

    /* Name="SearchByCategory"
    * URL="/Tasks/SearchByCategory"
    * Type = "GET"
    * Input parameter called as "searchstring" will be a string that indicates number of days
    * Returns JSON
    * Goal: This method will return tasks that are due in the next "nbr" days from today
    * To do: Call this method when the "SearchByCategory" button is clicked.
    * Display tasks that match the category in the div with id="results3"*/

