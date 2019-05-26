$('.ingredients-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots: false,
    touchDrag: false,
    mouseDrag: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})