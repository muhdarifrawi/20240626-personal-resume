function checkFullLoad() {
    $(window).on("load",function () {
        // let currentPage = window.location.pathname.split("/")[1];
        let splitPathname = window.location.pathname.split("/");
        let splitPathnameLength = splitPathname.length;
        let currentPage = splitPathname[splitPathnameLength - 1];
        console.log(window.location.pathname);
        console.log(splitPathname);
        console.log(splitPathname.length);
        console.log(currentPage);
        // console.log(window.location.pathname.split("/")[1] == "");

        $("#loading-screen").css("width","100vw")
        setTimeout(function() { 
            console.log("fully loaded");
            $("#main-page").show();
            $("#loading-screen").addClass("loading-screen-out");
            if (currentPage === ""){
                console.log("index.html checkFullLoad");
                $("#right-hero").addClass("mobile-view-right-hero-in");
                $(".name-title").addClass("mobile-main-title-in");
                $(".view-now").addClass("mobile-view-now-btn-in");
                $(".view-now").bind("click", enterActions);
            }
            else if (currentPage === "about.html"){
                console.log("about.html checkFullLoad");
                $(".btn-offcanvas").bind("click", displayNavbar);
            }
            else{
                console.log("unexpected error occured.");
            }
        }, 2000);
    });

    
};

checkFullLoad();

function enterActions(){
    
    $(".view-now").removeClass("mobile-view-now-btn-in");
    $(".view-now").addClass("mobile-view-now-btn-out");
    $(".name-title").removeClass("mobile-main-title-in");
    $(".name-title").addClass("mobile-main-title-out");
    $("#right-hero").removeClass("mobile-view-right-hero-in");
    $("#right-hero").addClass("mobile-view-right-hero-out");
    $("body").append(`<div id="loading-screen" class=" loading-screen-in">
                        <p id="loading-text">
                            Loading ...
                        </p>
                    </div>`);

    setTimeout(function(){window.location.replace("about.html");}, 2000);
    
}

function displayNavbar(){
    console.log("navbar appear!");
    $("nav").addClass("mobile-navbar-in");
}