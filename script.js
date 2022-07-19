$(document).ready(function(){



$('.foot').click(function(){
    alert("All rights reserved. Content is the intellectual property of Group B inc. Please contact for any questions about using content.")
});


$('#next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10);
    }
})

$('#prev').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if(prevImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        prevImg.addClass('active').css('z-index', 10);
    }
})

$(".nav-item").hover( 
    function() {
$( this ).css("background-color", "#05b7ed");
},
 function(){
$( this ).css("background-color", "#bed4e9")
}
);

});
