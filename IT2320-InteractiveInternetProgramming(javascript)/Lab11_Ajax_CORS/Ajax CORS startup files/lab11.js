//Hufflepug!333
//Petfinder API Key  645a0f2dca98ccda5b5939306b026865
//Petfinder API Secret  3762e7927bd338e938b440ba0645bf95


//parameters start with ampersand
//&location=ohio
//url
$(function(){

    //jQuery code goes here
        $("#btn1").on("click", function(){
            var url = "https://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=?&tags="
                        +$("#photosearch").val();   
           $.ajax({
               url: url,           
               type: "GET", 
               dataType: "jsonp",   //needed for CORS       
               contentType: "application/json; charset=utf-8",
               crossDomain: true,                   
               success: function(data){
                  console.log(data);             
                  $.each(data.items, function(i, item){                
                    var img = $("<img></img>");
                    img.attr("src",item.media.m);
                    $("#flikrresults").append(img);
                  });              
               }
             });
        });
    
        $("#btn2").on("click", function(){
            //Go to https://www.petfinder.com/developers/api-key to get an api key
            //Add the API key to the URL
            //PetFinder API Key 551b527add03634ac3a95a7a967367e6
            //PetFinder API Secret 6a5a2731d31fb44b2d2303c7686c5278
            
            const key = "645a0f2dca98ccda5b5939306b026865";           
            var animal = $("#breedsearch").val();
            var url = "http://api.petfinder.com/breed.list?format=json&key="+key+"&callback=?&animal="+animal+"&format=json";
           $.ajax({
               url: url,           
               type: "GET", 
               dataType: "jsonp",   //needed for CORS       
               contentType: "application/json; charset=utf-8",
               crossDomain: true,                   
               success: function(data){              
                  console.log(data);
                  $("ul").remove();
                  var ul = $("<ul>Breeds</ul>");
                  $("#breedresults").after(ul);
                  
                  $.each(data.petfinder.breeds.breed,function(i,breed){                  
                        var li = $("<li></li>").text(breed.$t);
                        $("ul").append(li);
                  });                      
                }                     
    
             });//ajax  
        });  //btn click
    
    
    
        //pet.find
        $("#btn3").on("click", function () {
           
            const key = "645a0f2dca98ccda5b5939306b026865";
            var animaltype = $("#animaltype").val();
            var breed = $("#breed").val();            
            var size = $("#size").val();
            var sex = $("#sex").val();
            var location = $("#location").val();
            var age = $("#age").val();
            var url = "http://api.petfinder.com/pet.find?format=json&key="+key+"&callback=?&location="+location+"&animal=" + animaltype + 
            "&breed=" + breed + "&size=" + size + "&sex=" + sex + "&age=" + age + "&format=json";
            $.ajax({
                url: url,
                type: "GET",
                dataType: "jsonp",   //needed for CORS       
                contentType: "application/json; charset=utf-8",
                crossDomain: true,
                success: function (data) {
                    console.log(data);
                    
                    $("ul").remove();
                    var ul = $("<ul>Matched Pets:</ul>");
                    $("#petresults").after(ul);
    
                    $.each(data.petfinder.pets.pet, function (i, pet) {
                        var li = $("<li></li>").text((pet.animal.$t) + ", ID#" + (pet.id.$t));
                        $("ul").append(li);    
                        var li = $("<li class='petName'></li>").text(pet.name.$t);
                        $("ul").append(li);
                        var li = $("<li class='petText'></li>").text(pet.description.$t);
                        $("ul").append(li);
                        var li = $("<li class='petContact'></li>").text("Contact info:");
                        $("ul").append(li);
                        var li = $("<li class='petContact'></li>").text(pet.contact.phone.$t);
                        $("ul").append(li);
                        var li = $("<li class='petContact'></li><br>").text(pet.contact.email.$t);
                        $("ul").append(li);
                    });
                   
                }
    
            });//ajax  
        });  //btn click
       
    })