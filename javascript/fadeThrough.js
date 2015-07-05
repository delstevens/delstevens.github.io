window.addEventListener("load", function(){
    var items_container = document.getElementById("items_container");
    var thisItem = 0
    var dir="./img/";

    var picArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg",
                    "9.jpg", "10.jpg", "11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg",
                    "17.jpg", "18.jpg", "h_1.jpg", "h_2.jpg","h_3.jpg","h_4.jpg","h_5.jpg","h_6.jpg","h_7.jpg","h_8.jpg","h_9.jpg",];


    function buildDiv(i) {
        var thisImage = "<img src='" + dir + picArray[i] + "'/>"
        $("#fadeWrapper").append(thisImage)
        $("#fadeWrapper").css("display", "none")
        $("#fadeWrapper").fadeIn(1400)

    }

    buildDiv(thisItem)

    setInterval(function(){ 

        thisItem = getRandom(thisItem)
        $("#fadeWrapper").fadeOut(1000, function(){
            $("#fadeWrapper").empty()    
            buildDiv(thisItem)
        })
    }, 3000);

    function getRandom(inInt){
        var thisInt = Math.random()*picArray.length-1
        if (thisInt == inInt) {
            return Math.floor(getRandom(thisInt))
        } else {
            return Math.floor(thisInt)
        }
    }

});


