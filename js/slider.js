let prevbtn = '<img src="images/bi_arrow-left-circle-fill.png" alt="" class="prev-btn">'
let nextbtn = '<img src="images/bi_arrow-right-circle-fill.png" alt="" class="next-btn">'

$('.classes-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    nav:true,
    navText:[
        prevbtn,nextbtn
    ],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        540:{
            items:1
        },
        900:{
            items:2
        },
        1200:{
            items:2
        }
    }
})



$('.product-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText:[
        prevbtn,nextbtn
    ],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        830:{
            items:2,
        },
        1300:{
            items:3
        }
    }
})