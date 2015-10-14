/// <reference path="jquery-2.1.4.js" />

//var count = 0;
//var wait = setInterval(function () {
//    $('#cont').append(
//        $('<div/>')
//            .addClass('circle')
//    );

//    count++;

//    if (count == 6) {
//        clearInterval(wait);
//    }
//}, 1000);

$('.circle').click(function () {
    if ($(this).hasClass('explode'))
        $(this).removeClass('explode').addClass('implode');
    else
        $(this).removeClass('implode').addClass('explode');
});