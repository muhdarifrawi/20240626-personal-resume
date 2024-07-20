function checkFullLoad() {
    $(window).on("load",function () {
        setTimeout(function() { 
            console.log("fully loaded");
            $("#main-page").show()
            $("#loading-screen").addClass("loading-screen-away")
            // $("#loading-screen").fadeOut("slow",function(){})
        }, 2000);
        
    });

    
};

checkFullLoad();