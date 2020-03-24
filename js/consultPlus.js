$(document).ready(function () {

    "use strict";

    //  ***** Consts *****
    const scrollToTopButton = $("button.scrolltotop");
    const myNavBar = $("header nav.fullnavigation");
    const myLogos = $("div.logo a");
    const elems = $("ul.navigation_list li span");
    const goDownButton = $("div.godown button");
    const testimImages = $(".testim img");
    const navButton = $("div.nav_button_container");
    const navigationList = $("ul.navigation_list.top");
    const myHeaderOverlay = $("header .overlay");
    
    //  ****   Window Widths  ****
    let lgWidth = $(window).width() < 1190.99 && $(window).width() > 991.99;
    let mdWidth = $(window).width() < 991.99 && $(window).width() > 767.99;
    let smWidth = $(window).width() < 767.99 && $(window).width() > 575.99;
    let xsWidth = $(window).width() < 575.99;
    

    
    let myHeaderOverlayPaddingTop = parseInt(myHeaderOverlay.css("padding-top"));
    let myHeaderOverlayPaddingBottom = parseInt(myHeaderOverlay.css("padding-bottom"));



    // initiate WOW.js
    const wow = new WOW(
        {
            boxClass: "w",
            offset: 200
        }
    );
    wow.init();




    // assign header height to window height

    function headerHeight() {
        myHeaderOverlay.height($(window).height() - myHeaderOverlayPaddingTop - myHeaderOverlayPaddingBottom);
    };


    // change class of nav bar when window size on mobile devices
    function changeFixedClass() {

        if ( $(window).width() <= 575.99 ) {
            if ( $(window).scrollTop() < 202 ) {
                myNavBar.removeClass("fixed-top").addClass("sticky-top");
            } else {
                myNavBar.removeClass("sticky-top").addClass("fixed-top");
            }
            
        } else {
            myNavBar.removeClass("sticky-top").addClass("fixed-top");
        }
    };


    // change active class for header nav elements 
    let navigateNavItems = function(elm) {
        let dist = 20;

        $(elm).parent("li").addClass("active").siblings("li").removeClass("active");

        // navigate between nav elements ;
        if ( lgWidth ) {
            dist = 35;
        } else if ( mdWidth ) {
            dist = 96;   
        } else if ( smWidth ) {
            dist = 94;
        } else if ( xsWidth ) {
            dist = 80;
        }

        $("html, body").animate({
            scrollTop: $($(elm).data("target")).offset().top - parseInt($($(elm).data("target")).css("paddingTop"), 10) - dist
        }, 600);
    };

    $(elems).on("click", function() {
        navigateNavItems(this);
    });


    // goDown button
    goDownButton.click(function () {
        $("html, body").animate({
            scrollTop: $($(this).data("target")).offset().top - parseInt($($(this).data("target")).css("paddingTop"), 10) - 20
        }, 600);
    });
        



    // nav bar place
    function navBarPlace() {
        if ( $(window).scrollTop() > 0 && $(window).scrollTop() < 20) {
            myNavBar.css({
                "background-color": "transparent",
                "top": 0,
                "padding-top": 18,
                "padding-bottom": 18
            });
        } else if ( $(window).scrollTop() >= 20 && $(window).scrollTop() < 200) {

            myNavBar.css({"top": - (parseInt( $(myNavBar).css("height") ,10)) });

        } else if($(window).scrollTop() >= 200) {
            myNavBar.css({
                "background-color": "rgb(7, 45, 80)",
                "top": 0,
                "padding-top": 8,
                "padding-bottom": 8
            });
        }
    };


    // scroll to top button
    function scrollToTopAction() {
        if ($(window).scrollTop() >= 200 ) {
            scrollToTopButton.fadeIn(200, function () {
                $(this).css("display", "block");
            });
        } else {
           scrollToTopButton.fadeOut(200, function () {
               $(this).css("display", "none");
           });
        }
    };


    // sync navs to scroll

    function syncNavsToScroll() {

        const topNavItems = $("ul.navigation_list.top li span");

        let distance = 22;

        if ( lgWidth ) {
            distance = 37;
        } else if ( mdWidth ) {
            distance = 100;
        } else if ( smWidth ) {
            distance = 95;
        } else if ( xsWidth ) {
            distance = 80;
        }

        $(topNavItems).each(function () {

            if ($(window).scrollTop() >= $($(this).data("target")).offset().top - parseInt($($(this).data("target")).css("paddingTop"), 10) - distance) {

                $(this).parent("li").addClass("active").siblings("li").removeClass("active");
            }

        });
    };

    scrollToTopButton.click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
     });


    // navigate between testimonials


    testimImages.on("click", function () {

        $(this).addClass("active_image").siblings("img").removeClass("active_image");

        $($(this).data("target")).siblings("p").removeClass("active").fadeOut(5);

        $($(this).data("target")).fadeIn(100).addClass("active");

    });




    // logos
    myLogos.click(function (e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });



    // Nav button toggler 
    navButton.on("click", function () {

        $(this).toggleClass("expanded");

        if ( $(this).hasClass("expanded") ) {
            navigationList.addClass("opened");

        } else if ( !$(this).hasClass("expanded") ) {
            navigationList.removeClass("opened");
        }
    });



    // nav between project 2 images

    const myImageContainer = $("div#img_container");
    let largeImages = [
        "../images/images/projects/projectsimage2.jpg",
        "../images/images/projects/projectsimage3.jpg",
        "../images/images/projects/projectsimage4.jpg",
    ];
    let smallImages = [
        "../images/images/projects/projectsimage2-xs.jpg",
        "../images/images/projects/projectsimage3-xs.jpg",
        "../images/images/projects/projectsimage4-xs.jpg"
    ];


    


    
    function assignImageToProject() {
        let myBigImage = "./images/images/projects/projectsimage2.jpg";
        let myXsImage = "./images/images/projects/projectsimage2-xs.jpg";

        if ( $(window).width() > 575.99 ) {
            myImageContainer.css("background-image", "url(" + myBigImage + ")" );
        } else {
            myImageContainer.css("background-image", "url(" + myXsImage + ")" );
        };
    };


    // ***** functions done while window scrolling *****
    $(window).on("scroll", function () {
        navBarPlace();
        syncNavsToScroll();
        scrollToTopAction();
        changeFixedClass();
    });


    // ***** functions done while window resizing *****
    $(window).on("resize", function() {
        headerHeight();
        changeFixedClass();
        syncNavsToScroll();
        assignImageToProject();
    });


    //  ****** initiation of functions once window loaded ******
    const init = function() {
        headerHeight();
        changeFixedClass();
        navBarPlace();
        scrollToTopAction();
        syncNavsToScroll();
        assignImageToProject();
    };
    init();




});