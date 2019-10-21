$(function(){
    // Плавный скролл до элемента

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementId = $(this).data('scroll');


        let elementOffset = $(elementId).offset().top;
        console.log(elementOffset);


        $("html, body").animate({
            scrollTop: elementOffset
        },1000);
        // Настрйока скорости скролла   
    });


    // Мобильная навигация
        let nav = $("#nav");
        let navToggle = $("#navToggle");

        navToggle.on("click", function(event){
            event.preventDefault();

            nav.toggleClass("show");
        });
});



$('.slider').slick({
    fade: true,
    arrows: false,
    dots: true
});