$('.interface').on('click', function () {

    if ($(this).hasClass('orange')) {
        // $('body').toggleClass('orange')
        $('body').css("background-color", 'orange')
    }

    if ($(this).hasClass('green')) {
        $('body').css("background-color", 'green')
    }

    if ($(this).hasClass('increase')) {
        $('.text').animate({
            "font-size": "+=2"
        }, 500)
    }

    if ($(this).hasClass('move')) {
        $('.text').animate({
            "left": "+=5",
            "letter-spacing": "+=2",
        }, 500)
    }
})