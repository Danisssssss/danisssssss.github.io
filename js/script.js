$(function() {
    
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
    
//fixed header
    checkScroll(scrollOffset);
    
    $(window).on("scroll", function() {
        
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);
        
    });
    
    
    function checkScroll(scrollOffset) {
        
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
        
    }
    
    /*smooth scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        var $this = $(this),
            elementId = $(this).data("scroll"),
            blockOffset = $(elementId).offset().top;
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 100);
    });
    
    $(".header__toggle").on("click", function(event) {
        event.preventDefault();
        $(".header__toggle").toggleClass("active");
        $(".header__nav").toggleClass("active");
    });
    
})