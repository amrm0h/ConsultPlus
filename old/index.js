/*global $, console, alert, window*/

$(function () {
    "use strict";
    
    // trigger niceScroll Plugin
    
    $("body").niceScroll({
        cursorcolor: "#04b5e7",
        cursorwidth: "7px",
        cursorborder: "1px solid #04b5e7",
        cursoropacitymin: "0.2"
    });
    
    
    
    // trigger header height 
    
    $("header").height($(window).height());
    
    
    // sync nav items with page sections 
    
    $("header nav.menu ul li").on("click", function () {
        
        $(this).addClass("active").siblings("li").removeClass("active");
        
        $("footer ul.navbar li[data-section='" +$(this).data("section") +"']").addClass("active").siblings("li").removeClass("active");
        
        $("html, body").animate({
            scrollTop: $($(this).data("section")).offset().top
        }, 1000);
        
    });
    
    
    // about-us section icons slide 
    
    var leftArrow = $(".about-us i.fa-arrow-left"),
        rightArrow = $(".about-us i.fa-arrow-right"),
        fullProjectsButton = $(".project button"),
        hiddenProject = $(".project .contents:last-of-type"),
        fullServicessButton = $(".services button"),
        hiddenServices = $(".services .contents:last-of-type"),
        fullBlogButton = $(".our-blog button"),
        hiddenBlogs = $(".our-blog .blog.hidden"),
        pulletSlider = $(".project .contents .right .image-slider .slider-pullets i");
        
        
    
    function checkIcon() {
        
        if ($(".about-us .icons .icon:first-of-type").hasClass("active")) {
            
            leftArrow.fadeOut(500);
        } else {
            
            leftArrow.fadeIn(500);
        }
        
        if ($(".about-us .icons .icon:last-of-type").hasClass("active")) {
            
            rightArrow.fadeOut(500);
        } else {
            rightArrow.fadeIn(500);

        }
        
    }
    
    checkIcon();
    
    
    rightArrow.on("click", function () {
        
        var activeIcon = $(".about-us .icons .icon.active");
        
        activeIcon.removeClass("active").next(".icon").addClass("active");
        checkIcon();
        
    });
    
    
    leftArrow.on("click", function () {
        
        var activeIcon = $(".about-us .icons .icon.active");
        
        activeIcon.removeClass("active").prev(".icon").addClass("active");
        checkIcon();
    
        
    });
    
    
    // Work on projects section and services 
    // full projects button

    
    fullProjectsButton.on("click", function () {
        
        if (!$(this).hasClass("shown")) {
            
            fullProjectsButton.addClass("shown").text("view less");
            
            hiddenProject.fadeIn(1000, function () {
            
                $(this).removeClass("hidden");
            });
        } else {
            
            hiddenProject.fadeOut(500, function () {
            
                $(this).addClass("hidden");
                fullProjectsButton.removeClass("shown").text("full projects");
            });
            
        }
    });
    
    // pullet slider
    
    pulletSlider.on("click", function () {
        
        if (!$(this).hasClass("active")) {
            
            if ($(this).hasClass("fa-circle")) {
                
                $(this).removeClass("fa-circle").addClass("fa-dot-circle active").siblings("i").removeClass("fa-dot-circle active").addClass("fa-circle");
                
                $(this).parents(".image-slider").css({
                    
                    "background": $(this).data("image"),
                    "backgroundSize": "cover"
                });
                
            }

        }
        
    });
    
    // full Services  button
    
    fullServicessButton.on("click", function () {
        
        if (!$(this).hasClass("shown")) {
            
            fullServicessButton.addClass("shown").text("view less");
            
            hiddenServices.fadeIn(1000, function () {
            
                $(this).removeClass("hidden");
            });
        } else {
            
            hiddenServices.fadeOut(500, function () {
            
                $(this).addClass("hidden");
                fullServicessButton.removeClass("shown").text("full projects");
            });
            
        }
    });
    
    
    // slide betweem testimonials 
    
    $(".testim .client-iamges img").on("click", function () {
        
        $(this).addClass("active").siblings("img").removeClass("active");
        
        
        $(".testim .words p" + $(this).data("p")).delay(300).fadeIn();
        
        $(".testim .words p" + $(this).data("p")).siblings("p").fadeOut(300);

        
        $(".testim .names span" + $(this).data("name")).delay(300).fadeIn();
        
        $(".testim .names span" + $(this).data("name")).siblings("span").fadeOut(300);
        
    });
    
    
    // full Blog button
    
    fullBlogButton.on("click", function () {
        
        if (!$(this).hasClass("shown")) {
            
            fullBlogButton.addClass("shown").text("view less");
            
            hiddenBlogs.fadeIn(1000, function () {
            
                $(this).removeClass("hidden");
            });
        } else {
            
            hiddenBlogs.fadeOut(500, function () {
            
                $(this).addClass("hidden");
                fullBlogButton.removeClass("shown").text("full blog");
            });
            
        }
    });
    
    
    // Go to social sites 
    
    $("footer .low-footer li").click(function () {
        
        window.open($(this).data("site"), "_blank");
        
    });
    
    
    
    // sync footer investigation items with page sections 
    
    $("footer ul.navbar li").on("click", function () {
        
        $(this).addClass("active").siblings("li").removeClass("active");
        
        $("header nav.menu ul li[data-section='" +$(this).data("section") +"']").addClass("active").siblings("li").removeClass("active");
        
        $("html, body").animate({
            scrollTop: $($(this).data("section")).offset().top
        }, 1000);
        
    });
    
    
    $("footer .sections img").on("click", function () {
        
        $("html, body").animate({
            scrollTop: $($(this).data("section")).offset().top
        }, 1000);
        
    });

});






